import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

function filesUnder(directory) {
  const result = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (
      [
        ".git",
        "node_modules",
        "dist",
        "coverage",
        "evidence",
        "playwright-report",
        "test-results",
      ].includes(entry.name)
    ) {
      continue;
    }
    const absolute = resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...filesUnder(absolute));
    else result.push(absolute);
  }
  return result;
}

function withoutFences(markdown) {
  return markdown.replace(/```[\s\S]*?```/gu, "");
}

function withoutInlineCode(markdown) {
  return markdown.replace(/`[^`\n]*`/gu, "");
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

const markdownFiles = filesUnder(root).filter((path) => path.endsWith(".md"));
const declaredIds = new Map();

for (const file of markdownFiles) {
  const repoPath = relative(root, file).split(sep).join("/");
  const markdown = readFileSync(file, "utf8");
  const active = withoutFences(markdown);

  assert(
    !/\bSSD\b/u.test(active),
    `${repoPath}: contiene la sigla incorrecta SSD`,
  );
  assert(
    !/\bSSOT\b/u.test(active),
    `${repoPath}: introduce el recurso SSOT no adoptado`,
  );

  const header = active.split("\n").slice(0, 40).join("\n");
  const idMatch = header.match(
    /\*\*(?:Código|Identificador|Identificador del acto):\*\*\s+`([^`]+)`/u,
  );
  if (idMatch?.[1]) {
    const owner = declaredIds.get(idMatch[1]);
    assert(
      owner === undefined,
      `${repoPath}: identificador ${idMatch[1]} ya declarado en ${owner}`,
    );
    declaredIds.set(idMatch[1], repoPath);
  }

  const linkPattern = /!?\[[^\]]*\]\(([^)]+)\)/gu;
  for (const match of withoutInlineCode(active).matchAll(linkPattern)) {
    const raw = match[1]?.trim();
    if (!raw || /^(?:https?:|mailto:|#)/u.test(raw)) continue;
    const target = raw
      .replace(/^<|>$/gu, "")
      .split(/\s+["']/u)[0]
      ?.split("#")[0];
    if (!target) continue;
    let decoded;
    try {
      decoded = decodeURI(target);
    } catch {
      errors.push(`${repoPath}: enlace relativo mal codificado ${target}`);
      continue;
    }
    const absolute = resolve(dirname(file), decoded);
    assert(
      absolute === root || absolute.startsWith(`${root}${sep}`),
      `${repoPath}: enlace escapa del repositorio ${target}`,
    );
    try {
      assert(
        statSync(absolute).isFile() || statSync(absolute).isDirectory(),
        `${repoPath}: enlace roto ${target}`,
      );
    } catch {
      errors.push(`${repoPath}: enlace roto ${target}`);
    }
  }
}

const governed = [
  [
    "docs/ingeniería/21_FUNDACIÓN_EJECUTABLE_Y_CONFORMIDAD_AUTOMÁTICA_DEL_REPOSITORIO.md",
    "DOC-021",
  ],
  ...Array.from({ length: 7 }, (_, index) => {
    const number = String(48 + index).padStart(3, "0");
    return [`docs/adr/ADR-${number}.md`, `ADR-${number}`];
  }),
];

for (const [path, id] of governed) {
  const markdown = readFileSync(resolve(root, path), "utf8");
  assert(
    markdown.includes(`\`1.0.0\``),
    `${path}: versión material incorrecta`,
  );
  assert(markdown.includes(id), `${path}: no declara ${id}`);
  assert(
    markdown.includes(
      "vigencia diferida hasta la publicación material de `LB-G7-GMS-20260908-01`",
    ),
    `${path}: estado de vigencia G7 incorrecto`,
  );
  assert(
    !markdown.includes("Destino previsto"),
    `${path}: conserva metadato de candidato`,
  );
}

const concreteSpecs = filesUnder(root).filter((path) => {
  const repoPath = relative(root, path).split(sep).join("/");
  return /(?:^|\/)SPEC-[^/]+\.(?:md|ya?ml|json)$/u.test(repoPath);
});
assert(concreteSpecs.length === 0, "Existe una SPEC concreta antes de G8");

assert(declaredIds.get("DOC-021") !== undefined, "DOC-021 no está declarado");
for (let number = 48; number <= 54; number += 1) {
  assert(
    declaredIds.get(`ADR-${String(number).padStart(3, "0")}`) !== undefined,
    `ADR-${number} no está declarado`,
  );
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Documentación conforme: ${markdownFiles.length} archivos Markdown; ${declaredIds.size} identificadores propietarios.`,
);
