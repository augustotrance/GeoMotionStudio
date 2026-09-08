import type { MapViewSnapshot } from "@geomotion/map";
import type { SceneSnapshot } from "@geomotion/scene";
import type { Brand, Result } from "@geomotion/shared";

export type ProjectId = Brand<string, "ProjectId">;

export interface ProjectSnapshot {
  readonly projectId: ProjectId;
  readonly name: string;
  readonly sceneIds: readonly string[];
  readonly activeSceneId: string;
}

export interface ProjectDocument {
  readonly documentType: "geomotion-project";
  readonly formatVersion: 1;
  readonly project: ProjectSnapshot;
  readonly scenes: readonly SceneSnapshot[];
  readonly mapViews: readonly MapViewSnapshot[];
}

export type ProjectRepositoryFailureCode =
  | "PROJECT_NOT_FOUND"
  | "PROJECT_DOCUMENT_INVALID"
  | "PROJECT_STORAGE_UNAVAILABLE"
  | "PROJECT_STORAGE_QUOTA_EXCEEDED"
  | "PROJECT_STORAGE_PERMISSION_DENIED"
  | "PROJECT_STORAGE_INTEGRITY_FAILED"
  | "PROJECT_FORMAT_UNSUPPORTED";

export interface ProjectRepositoryFailure {
  readonly code: ProjectRepositoryFailureCode;
  readonly message: string;
}

export interface SaveConfirmation {
  readonly projectId: ProjectId;
  readonly generation: number;
  readonly digest: string;
}

export interface ProjectRepositoryPort {
  saveAtomically(
    document: ProjectDocument,
  ): Promise<Result<SaveConfirmation, ProjectRepositoryFailure>>;
  load(
    projectId: ProjectId,
  ): Promise<Result<ProjectDocument, ProjectRepositoryFailure>>;
  exists(projectId: ProjectId): Promise<boolean>;
}
