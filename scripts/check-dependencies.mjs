import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const evidence = resolve(root, "evidence/g7");
mkdirSync(evidence, { recursive: true });

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    ...options,
  });
  if (result.status !== 0) {
    console.error(result.stdout);
    console.error(result.stderr);
    process.exit(result.status ?? 1);
  }
  return result.stdout.trim();
}

if (process.version !== "v24.20.0") {
  throw new Error(
    `Node no conforme: ${process.version}; se requiere v24.20.0.`,
  );
}
const pnpmVersion = run("pnpm", ["--version"]);
if (pnpmVersion !== "12.3.4")
  throw new Error(`pnpm no conforme: ${pnpmVersion}`);

const manifestPaths = [
  "package.json",
  ...readdirSync(resolve(root, "apps")).map(
    (name) => `apps/${name}/package.json`,
  ),
  ...readdirSync(resolve(root, "packages")).map(
    (name) => `packages/${name}/package.json`,
  ),
];
for (const path of manifestPaths) {
  const manifest = JSON.parse(readFileSync(resolve(root, path), "utf8"));
  for (const section of [
    "dependencies",
    "devDependencies",
    "peerDependencies",
  ]) {
    for (const [name, version] of Object.entries(manifest[section] ?? {})) {
      if (version === "workspace:*") continue;
      if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/u.test(String(version))) {
        throw new Error(`${path}: ${name} no usa versión exacta (${version}).`);
      }
    }
  }
}

function filesNamed(directory, name) {
  const result = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (
      [".git", "node_modules", "dist", "coverage", "evidence"].includes(
        entry.name,
      )
    )
      continue;
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...filesNamed(path, name));
    else if (entry.name === name) result.push(path.slice(root.length + 1));
  }
  return result;
}

const lockfiles = filesNamed(root, "pnpm-lock.yaml");
if (lockfiles.length !== 1 || lockfiles[0] !== "pnpm-lock.yaml") {
  throw new Error(
    `Se requiere un único lockfile raíz; encontrados: ${lockfiles.join(", ")}`,
  );
}

const licenseText = run("pnpm", ["licenses", "list", "--json", "--long"]);
const licenses = JSON.parse(licenseText);
writeFileSync(
  resolve(evidence, "licenses.json"),
  `${JSON.stringify(licenses, null, 2)}\n`,
);

const workspaceList = JSON.parse(
  run("pnpm", ["list", "-r", "--json", "--depth", "Infinity"]),
);
const components = new Map();

function collectDependencies(dependencies = {}) {
  for (const [name, details] of Object.entries(dependencies)) {
    const version = details.version;
    if (version && !String(version).startsWith("link:")) {
      components.set(`${name}@${version}`, {
        type: "library",
        name,
        version,
        purl: `pkg:npm/${encodeURIComponent(name).replace("%40", "@").replace("%2F", "/")}@${version}`,
      });
    }
    collectDependencies(details.dependencies);
    collectDependencies(details.optionalDependencies);
    collectDependencies(details.devDependencies);
  }
}

for (const workspace of workspaceList) {
  collectDependencies(workspace.dependencies);
  collectDependencies(workspace.optionalDependencies);
  collectDependencies(workspace.devDependencies);
}
const sbom = {
  bomFormat: "CycloneDX",
  specVersion: "1.6",
  version: 1,
  metadata: {
    component: {
      type: "application",
      name: "GeoMotion Studio",
      version: "0.0.0-g7",
    },
    tools: {
      components: [{ type: "application", name: "pnpm", version: pnpmVersion }],
    },
  },
  components: [...components.values()].sort((a, b) =>
    `${a.name}@${a.version}`.localeCompare(`${b.name}@${b.version}`),
  ),
};
writeFileSync(
  resolve(evidence, "sbom.cdx.json"),
  `${JSON.stringify(sbom, null, 2)}\n`,
);

const auditText = run("pnpm", ["audit", "--audit-level", "high", "--json"]);
const audit = JSON.parse(auditText || "{}");
writeFileSync(
  resolve(evidence, "audit.json"),
  `${JSON.stringify(audit, null, 2)}\n`,
);

console.log(
  `Dependencias conformes: ${components.size} componentes; licencias, SBOM y audit generados.`,
);
