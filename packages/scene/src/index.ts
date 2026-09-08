import type { Brand } from "@geomotion/shared";

export type SceneId = Brand<string, "SceneId">;
export type ProjectIdReference = Brand<string, "ProjectId">;
export type MapViewIdReference = Brand<string, "MapViewId">;

export interface SceneSnapshot {
  readonly sceneId: SceneId;
  readonly projectId: ProjectIdReference;
  readonly name: string;
  readonly order: number;
  readonly mapViewId: MapViewIdReference;
  readonly operationalState: "ACTIVE" | "INACTIVE";
}
