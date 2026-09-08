import { createHash } from "node:crypto";
import { gzipSync } from "node:zlib";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync, writeFileSync } from "node:fs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const directory = resolve(root, "assets/maps/natural-earth");
const manifest = JSON.parse(
  readFileSync(resolve(directory, "sources.json"), "utf8"),
);

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

const features = [];
for (const source of manifest.sources) {
  const bytes = readFileSync(resolve(directory, source.path));
  if (bytes.byteLength !== source.bytes) {
    throw new Error(
      `${source.path}: tamaño ${bytes.byteLength}; esperado ${source.bytes}`,
    );
  }
  const digest = sha256(bytes);
  if (digest !== source.sha256) {
    throw new Error(
      `${source.path}: SHA-256 ${digest}; esperado ${source.sha256}`,
    );
  }
  const collection = JSON.parse(bytes.toString("utf8"));
  if (
    collection.type !== "FeatureCollection" ||
    !Array.isArray(collection.features)
  ) {
    throw new Error(`${source.path}: GeoJSON fuente inválido`);
  }
  for (const feature of collection.features) {
    features.push({
      type: "Feature",
      properties: { layer: source.layer },
      geometry: feature.geometry,
    });
  }
}

const derived = `${JSON.stringify({
  type: "FeatureCollection",
  name: "natural-earth-110m-physical",
  features,
})}\n`;
const derivedPath = resolve(directory, manifest.derived.path);
writeFileSync(derivedPath, derived, "utf8");

const digest = sha256(derived);
if (manifest.derived.sha256 !== null && digest !== manifest.derived.sha256) {
  throw new Error(
    `Derivado no reproducible: ${digest}; esperado ${manifest.derived.sha256}`,
  );
}
const compressedBytes = gzipSync(derived, { level: 9, mtime: 0 }).byteLength;
if (Buffer.byteLength(derived) > 5 * 1024 * 1024)
  throw new Error("Derivado supera 5 MiB decodificado.");
if (compressedBytes > 1024 * 1024)
  throw new Error("Derivado supera 1 MiB comprimido.");

console.log(
  JSON.stringify({
    features: features.length,
    bytes: Buffer.byteLength(derived),
    gzipBytes: compressedBytes,
    sha256: digest,
  }),
);
