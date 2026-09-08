import { spawnSync } from "node:child_process";
import { copyFileSync, cpSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const temporaryRoot = mkdtempSync(resolve(tmpdir(), "gms-g7-clean-"));
const copy = resolve(temporaryRoot, "GeoMotionStudio");
const sourceIndex = resolve(temporaryRoot, "source.index");
const excluded = new Set([
  ".git",
  "node_modules",
  "dist",
  "coverage",
  "playwright-report",
  "test-results",
]);

function filter(source) {
  const segments = relative(root, source).split(sep);
  if (segments.some((segment) => excluded.has(segment))) return false;
  if (
    segments[0] === "evidence" &&
    segments[1] === "g7" &&
    segments.length > 2 &&
    segments.at(-1) !== "README.md"
  )
    return false;
  return true;
}

function git(args, cwd, environment = process.env) {
  const result = spawnSync("git", args, {
    cwd,
    encoding: "utf8",
    env: environment,
  });
  if (result.status !== 0) {
    throw new Error(
      `git ${args.join(" ")} falló en ${cwd}: ${result.stderr.trim()}`,
    );
  }
  return result.stdout.trim();
}

try {
  copyFileSync(resolve(root, ".git/index"), sourceIndex);
  const sourceGitEnvironment = {
    ...process.env,
    GIT_INDEX_FILE: sourceIndex,
  };
  git(["add", "-A"], root, sourceGitEnvironment);
  const sourceTree = git(["write-tree"], root, sourceGitEnvironment);

  cpSync(root, copy, { recursive: true, filter });
  git(["init", "--quiet"], copy);
  git(["add", "-A"], copy);
  const cleanTree = git(["write-tree"], copy);
  if (cleanTree !== sourceTree) {
    throw new Error(
      `La copia limpia produjo el árbol ${cleanTree}; se esperaba ${sourceTree}.`,
    );
  }
  for (const [command, args] of [
    ["pnpm", ["install", "--frozen-lockfile"]],
    ["pnpm", ["verify"]],
  ]) {
    const result = spawnSync(command, args, {
      cwd: copy,
      stdio: "inherit",
      env: process.env,
    });
    if (result.status !== 0)
      throw new Error(`${command} ${args.join(" ")} falló en la copia limpia.`);
  }
  console.log(`Copia limpia conforme: árbol ${cleanTree}.`);
} finally {
  rmSync(temporaryRoot, { recursive: true, force: true });
}
