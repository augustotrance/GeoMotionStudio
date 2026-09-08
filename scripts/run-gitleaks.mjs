import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const binary = process.env.GITLEAKS_BIN || "gitleaks";
const version = spawnSync(binary, ["version"], { encoding: "utf8" });

if (
  version.status !== 0 ||
  !`${version.stdout}${version.stderr}`.includes("8.30.1")
) {
  console.error("Se requiere Gitleaks 8.30.1 mediante PATH o GITLEAKS_BIN.");
  process.exit(1);
}

const scan = spawnSync(
  binary,
  [
    "detect",
    "--source",
    root,
    "--no-git",
    "--config",
    resolve(root, ".gitleaks.toml"),
    "--redact",
    "--exit-code",
    "1",
  ],
  { cwd: root, stdio: "inherit" },
);

process.exit(scan.status ?? 1);
