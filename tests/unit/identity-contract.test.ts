import { UUID_V4_PATTERN } from "@geomotion/identity";
import { describe, expect, it } from "vitest";

describe("contrato UUID v4 opaco", () => {
  it("acepta la forma canónica aprobada", () => {
    expect(UUID_V4_PATTERN.test("11111111-1111-4111-8111-111111111111")).toBe(
      true,
    );
  });

  it.each([
    "11111111-1111-3111-8111-111111111111",
    "11111111-1111-4111-7111-111111111111",
    "11111111-1111-4111-8111-11111111111Z",
    "project-11111111-1111-4111-8111-111111111111",
  ])("rechaza una forma no canónica: %s", (candidate) => {
    expect(UUID_V4_PATTERN.test(candidate)).toBe(false);
  });
});
