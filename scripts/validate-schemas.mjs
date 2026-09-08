import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { createStrictSchemaValidator } from "@geomotion/infrastructure";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const schemaPaths = [
  "packages/shared/schema/common.schema.json",
  "packages/project/schema/project.schema.json",
  "packages/scene/schema/scene.schema.json",
  "packages/map/schema/map-view.schema.json",
  "packages/project/schema/project-document.schema.json",
];
const validate = createStrictSchemaValidator(
  schemaPaths.map((path) =>
    JSON.parse(readFileSync(resolve(root, path), "utf8")),
  ),
);

const valid = JSON.parse(
  readFileSync(
    resolve(root, "tests/fixtures/schemas/valid/minimal.gms.json"),
    "utf8",
  ),
);
const invalid = JSON.parse(
  readFileSync(
    resolve(root, "tests/fixtures/schemas/invalid/unknown-property.gms.json"),
    "utf8",
  ),
);

const validResult = validate("urn:geomotion:schema:project-document:1", valid);
if (!validResult.valid) {
  console.error(validResult.errors);
  process.exit(1);
}
if (validate("urn:geomotion:schema:project-document:1", invalid).valid) {
  console.error("El fixture adverso fue aceptado.");
  process.exit(1);
}

const sceneIds = new Set(valid.scenes.map((scene) => scene.sceneId));
const mapViewIds = new Set(valid.mapViews.map((mapView) => mapView.mapViewId));
if (!sceneIds.has(valid.project.activeSceneId))
  throw new Error("activeSceneId no resuelve.");
for (const sceneId of valid.project.sceneIds) {
  if (!sceneIds.has(sceneId))
    throw new Error(`sceneId no resuelve: ${sceneId}`);
}
for (const scene of valid.scenes) {
  if (scene.projectId !== valid.project.projectId)
    throw new Error("La Scene referencia otro Project.");
  if (!mapViewIds.has(scene.mapViewId))
    throw new Error("mapViewId no resuelve.");
}

console.log(
  `Schemas conformes: ${schemaPaths.length}; fixture válido aceptado y adverso rechazado.`,
);
