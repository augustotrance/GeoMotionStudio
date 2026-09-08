import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { createStrictSchemaValidator } from "@geomotion/infrastructure";
import { describe, expect, it } from "vitest";

const root = resolve(import.meta.dirname, "../..");
const schemaPaths = [
  "packages/shared/schema/common.schema.json",
  "packages/project/schema/project.schema.json",
  "packages/scene/schema/scene.schema.json",
  "packages/map/schema/map-view.schema.json",
  "packages/project/schema/project-document.schema.json",
];
const schemas = schemaPaths.map((path) =>
  JSON.parse(readFileSync(resolve(root, path), "utf8")),
);
const validate = createStrictSchemaValidator(schemas);

function fixture(path: string): unknown {
  return JSON.parse(readFileSync(resolve(root, path), "utf8"));
}

describe("schema Project Document", () => {
  it("acepta el fixture técnico mínimo", () => {
    const result = validate(
      "urn:geomotion:schema:project-document:1",
      fixture("tests/fixtures/schemas/valid/minimal.gms.json"),
    );
    expect(result).toEqual({ valid: true, errors: [] });
  });

  it("rechaza propiedades desconocidas", () => {
    const result = validate(
      "urn:geomotion:schema:project-document:1",
      fixture("tests/fixtures/schemas/invalid/unknown-property.gms.json"),
    );
    expect(result.valid).toBe(false);
    expect(
      result.errors.some((error) => error.keyword === "additionalProperties"),
    ).toBe(true);
  });

  it("rechaza la solicitud de un schema no registrado", () => {
    expect(() => validate("urn:geomotion:schema:missing:1", {})).toThrow(
      "Schema no registrado",
    );
  });

  it("rechaza schemas asíncronos en el contrato sincrónico", () => {
    const validateAsync = createStrictSchemaValidator([
      {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "urn:geomotion:schema:async-test:1",
        $async: true,
        type: "object",
      },
    ]);

    expect(() =>
      validateAsync("urn:geomotion:schema:async-test:1", {}),
    ).toThrow("validación asíncrona");
  });
});
