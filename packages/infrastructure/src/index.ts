import Ajv2020, { type AnySchema, type ErrorObject } from "ajv/dist/2020.js";

export const FOUNDATION_SELECTIONS = Object.freeze({
  mapEngine: "OpenLayers 10.10.0",
  internalProjection: "EPSG:4326",
  coordinateOrder: "longitude-latitude",
  projectStorage: "IndexedDB native",
  schemaDialect: "JSON Schema Draft 2020-12",
  schemaValidator: "Ajv 8.20.0",
} as const);

export interface SchemaValidationResult {
  readonly valid: boolean;
  readonly errors: readonly ErrorObject[];
}

export function createStrictSchemaValidator(schemas: readonly AnySchema[]) {
  const ajv = new Ajv2020({ allErrors: true, strict: true });

  for (const schema of schemas) {
    ajv.addSchema(schema);
  }

  return (schemaId: string, value: unknown): SchemaValidationResult => {
    const validator = ajv.getSchema(schemaId);
    if (validator === undefined) {
      throw new Error(`Schema no registrado: ${schemaId}`);
    }

    const valid = validator(value);
    if (typeof valid !== "boolean") {
      throw new Error("El schema sincrónico produjo una validación asíncrona.");
    }
    return { valid, errors: validator.errors ?? [] };
  };
}
