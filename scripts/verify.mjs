import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
if (process.version !== "v24.20.0") {
  console.error(`Node no conforme: ${process.version}; se requiere v24.20.0.`);
  process.exit(1);
}

const commands = [
  "data:build",
  "typecheck",
  "lint",
  "format:check",
  "test",
  "build",
  "validate:docs",
  "validate:architecture",
  "validate:schemas",
  "test:e2e",
  "security:secrets",
  "dependencies:check",
  "evidence:generate",
];

for (const command of commands) {
  console.log(`\n[g7] pnpm ${command}`);
  const result = spawnSync("pnpm", [command], {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log("\nPuerta automática G7 conforme.");
