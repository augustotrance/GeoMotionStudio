import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
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
  return /(?:^|\/)SPEC-[^/]+\.(?:md|ya?ml|json)$/iu.test(repoPath);
});

const g8GovernancePath = resolve(root, "configs/governance/g8-spec.json");
let g8Governance;
if (existsSync(g8GovernancePath)) {
  try {
    g8Governance = JSON.parse(readFileSync(g8GovernancePath, "utf8"));
  } catch (error) {
    errors.push(
      `configs/governance/g8-spec.json: JSON inválido (${error.message})`,
    );
  }
}

if (g8Governance === undefined) {
  assert(concreteSpecs.length === 0, "Existe una SPEC concreta antes de G8");
} else {
  const expectedSpecPath =
    "docs/spec/SPEC-GMS-0001_PROYECTO_LOCAL_PERSISTENTE_CON_ESCENA_Y_MAPA_BASE_2D_v1.0.0.md";
  const concreteSpecPaths = concreteSpecs
    .map((path) => relative(root, path).split(sep).join("/"))
    .sort();

  assert(
    concreteSpecPaths.length === 1 && concreteSpecPaths[0] === expectedSpecPath,
    `G8 permite exclusivamente ${expectedSpecPath}; encontradas: ${concreteSpecPaths.join(", ") || "ninguna"}`,
  );
  assert(
    g8Governance.specification?.id === "SPEC-GMS-0001",
    "G8 no autoriza una identidad SPEC distinta de SPEC-GMS-0001",
  );
  assert(
    g8Governance.specification?.version === "1.0.0",
    "G8 no autoriza una versión SPEC distinta de 1.0.0",
  );
  assert(
    g8Governance.specification?.exactCutApproved === false,
    "G8 anticipa indebidamente la aprobación del corte exacto",
  );
  assert(
    g8Governance.specification?.published === false,
    "G8 anticipa indebidamente la publicación de la SPEC",
  );
  assert(
    g8Governance.constraints?.functionalCodeAllowed === false &&
      g8Governance.constraints?.productFunctionalityAllowed === false,
    "G8 anticipa indebidamente funcionalidad o código funcional",
  );
  assert(
    g8Governance.constraints?.g8Closed === false &&
      g8Governance.constraints?.g9Open === false &&
      g8Governance.constraints?.publicationAllowed === false,
    "G8 anticipa indebidamente cierre, apertura de G9 o publicación",
  );

  if (concreteSpecPaths.includes(expectedSpecPath)) {
    const spec = readFileSync(resolve(root, expectedSpecPath), "utf8");
    const header = spec.split("\n").slice(0, 40).join("\n");
    assert(
      header.includes("**Identificador:** `SPEC-GMS-0001`"),
      `${expectedSpecPath}: identidad incorrecta`,
    );
    assert(
      header.includes("**Versión:** `1.0.0`"),
      `${expectedSpecPath}: versión incorrecta`,
    );
    const maturityLines = (
      header.match(/^\*\*Estado de madurez:\*\*.*$/gmu) ?? []
    ).map((line) => line.trimEnd());
    assert(
      maturityLines.length === 1 &&
        maturityLines[0] ===
          "**Estado de madurez:** Candidato — pendiente de aprobación del corte exacto y publicación de G8",
      `${expectedSpecPath}: el estado de madurez debe ser el candidato G8 autorizado`,
    );
    assert(
      header.includes("**Estado de implementación:** No iniciada"),
      `${expectedSpecPath}: el estado de implementación debe ser No iniciada`,
    );

    const sections = [...spec.matchAll(/^## (\d+)\./gmu)].map((match) =>
      Number(match[1]),
    );
    assert(
      sections.length === 23 &&
        sections.every((number, index) => number === index + 1),
      `${expectedSpecPath}: se requieren las secciones consecutivas 1 a 23`,
    );

    const expectedFamilies = new Map([
      ["RF", 16],
      ["RNF", 27],
      ["CA", 29],
      ["PRU", 16],
    ]);
    for (const [family, expectedCount] of expectedFamilies) {
      const pattern = new RegExp(
        "^\\| `SPEC-GMS-0001-" + family + "-(\\d{3})` \\|",
        "gmu",
      );
      const identifiers = [...spec.matchAll(pattern)].map((match) =>
        Number(match[1]),
      );
      assert(
        identifiers.length === expectedCount &&
          identifiers.every((number, index) => number === index + 1),
        `${expectedSpecPath}: la secuencia ${family} debe contener 001 a ${String(expectedCount).padStart(3, "0")}`,
      );
    }

    const acceptanceRows = spec
      .split("\n")
      .filter((line) => /^\| `SPEC-GMS-0001-CA-\d{3}` \|/u.test(line));
    assert(
      acceptanceRows.every((line) =>
        /\| (?:`?PRU-|SPEC-GMS-0001-PRU-)/u.test(line),
      ),
      `${expectedSpecPath}: cada criterio CA debe identificar al menos un método PRU`,
    );
  }
}

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
