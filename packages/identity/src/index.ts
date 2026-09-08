import type { Brand, Result } from "@geomotion/shared";

export type OpaqueId = Brand<string, "OpaqueId">;

export const UUID_V4_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/u;

export interface IdentifierGenerationFailure {
  readonly code: "IDENTIFIER_GENERATION_UNAVAILABLE" | "IDENTIFIER_COLLISION";
  readonly message: string;
}

export interface IdentifierGeneratorPort {
  generate(): Result<OpaqueId, IdentifierGenerationFailure>;
}
