import type { Brand, Result } from "@geomotion/shared";

export type MapViewId = Brand<string, "MapViewId">;
export type SceneIdReference = Brand<string, "SceneId">;

export interface GeographicCenter {
  readonly longitude: number;
  readonly latitude: number;
}

export interface MapViewSnapshot {
  readonly mapViewId: MapViewId;
  readonly sceneId: SceneIdReference;
  readonly mode: "2D";
  readonly center: GeographicCenter;
  readonly zoom: number;
  readonly baseMapRef: string;
}

export interface BaseMapResourceFailure {
  readonly code: "BASE_MAP_UNAVAILABLE" | "BASE_MAP_INVALID";
  readonly message: string;
}

export interface BaseMapResourcePort {
  resolve(
    baseMapRef: string,
  ): Promise<Result<Readonly<Uint8Array>, BaseMapResourceFailure>>;
}
