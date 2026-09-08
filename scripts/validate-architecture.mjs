import { readFileSync, readdirSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const workspaceRoots = [
  resolve(root, "apps/web"),
  ...readdirSync(resolve(root, "packages")).map((name) =>
    resolve(root, "packages", name),
  ),
];
const packages = new Map();

for (const directory of workspaceRoots) {
  const manifestPath = resolve(directory, "package.json");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  packages.set(manifest.name, { directory, manifest });
  if (manifest.private !== true)
    errors.push(`${manifest.name}: debe declarar private=true`);
  if (manifest.type !== "module")
    errors.push(`${manifest.name}: debe declarar type=module`);
  if (!manifest.exports || !manifest.types)
    errors.push(`${manifest.name}: debe publicar exports y types`);
}

const allowed = new Map([
  ["@geomotion/shared", []],
  ["@geomotion/identity", ["@geomotion/shared"]],
  ["@geomotion/map", ["@geomotion/shared"]],
  ["@geomotion/scene", ["@geomotion/shared"]],
  [
    "@geomotion/project",
    ["@geomotion/map", "@geomotion/scene", "@geomotion/shared"],
  ],
  [
    "@geomotion/application",
    [
      "@geomotion/identity",
      "@geomotion/map",
      "@geomotion/project",
      "@geomotion/scene",
      "@geomotion/shared",
    ],
  ],
  [
    "@geomotion/infrastructure",
    [
      "@geomotion/identity",
      "@geomotion/map",
      "@geomotion/project",
      "@geomotion/shared",
    ],
  ],
  ["@geomotion/ui", ["@geomotion/shared"]],
  [
    "@geomotion/web",
    ["@geomotion/application", "@geomotion/infrastructure", "@geomotion/ui"],
  ],
]);

function dependenciesOf(manifest) {
  return {
    ...manifest.dependencies,
    ...manifest.devDependencies,
    ...manifest.peerDependencies,
  };
}

for (const [name, { manifest }] of packages) {
  for (const [dependency, version] of Object.entries(
    dependenciesOf(manifest),
  )) {
    if (packages.has(dependency)) {
      if (!allowed.get(name)?.includes(dependency)) {
        errors.push(
          `${name}: dependencia interna no permitida hacia ${dependency}`,
        );
      }
      if (version !== "workspace:*")
        errors.push(`${name}: ${dependency} debe usar workspace:*`);
    } else if (/^(?:\^|~|latest$|next$|\*)/u.test(String(version))) {
      errors.push(
        `${name}: ${dependency} no tiene versión directa exacta (${version})`,
      );
    }
  }
}

function sourceFiles(directory) {
  const result = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (["node_modules", "dist", "coverage"].includes(entry.name)) continue;
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...sourceFiles(path));
    else if (/\.(?:ts|tsx|js|mjs)$/u.test(entry.name)) result.push(path);
  }
  return result;
}

for (const [name, { directory, manifest }] of packages) {
  const declared = dependenciesOf(manifest);
  for (const file of sourceFiles(directory)) {
    const text = readFileSync(file, "utf8");
    const imports = text.matchAll(/(?:from\s+|import\s*\()(["'])([^"']+)\1/gu);
    for (const match of imports) {
      const target = match[2];
      if (!target) continue;
      if (target.startsWith("@geomotion/")) {
        const segments = target.split("/");
        const packageName = segments.slice(0, 2).join("/");
        if (segments.length > 2)
          errors.push(`${relative(root, file)}: deep import ${target}`);
        if (!(packageName in declared))
          errors.push(`${name}: import no declarado ${packageName}`);
      }
      if (target.startsWith("..")) {
        const resolved = resolve(dirname(file), target);
        if (!resolved.startsWith(`${directory}${sep}`))
          errors.push(
            `${relative(root, file)}: import relativo cruza su workspace`,
          );
      }
    }
    if (
      [
        "@geomotion/project",
        "@geomotion/scene",
        "@geomotion/map",
        "@geomotion/identity",
      ].includes(name)
    ) {
      if (
        /\b(?:indexedDB|IDBDatabase|OpenLayers|from\s+["']ol|from\s+["']ajv)\b/u.test(
          text,
        )
      ) {
        errors.push(
          `${relative(root, file)}: detalle tecnológico expuesto en dominio`,
        );
      }
    }
  }
}

const graph = new Map(
  [...packages].map(([name, { manifest }]) => [
    name,
    Object.keys(dependenciesOf(manifest)).filter((dependency) =>
      packages.has(dependency),
    ),
  ]),
);
const visiting = new Set();
const visited = new Set();

function visit(name, trail = []) {
  if (visiting.has(name)) {
    errors.push(`ciclo de workspaces: ${[...trail, name].join(" -> ")}`);
    return;
  }
  if (visited.has(name)) return;
  visiting.add(name);
  for (const dependency of graph.get(name) ?? [])
    visit(dependency, [...trail, name]);
  visiting.delete(name);
  visited.add(name);
}

for (const name of graph.keys()) visit(name);

const webSource = sourceFiles(resolve(root, "apps/web", "src"))
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");
if (
  /\b(?:indexedDB|OpenLayers|createProject|saveProject|reopenProject|<canvas)\b/u.test(
    webSource,
  )
) {
  errors.push(
    "apps/web: contiene una señal de funcionalidad de producto no autorizada",
  );
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Arquitectura conforme: ${packages.size} workspaces; grafo acíclico y fronteras válidas.`,
);
