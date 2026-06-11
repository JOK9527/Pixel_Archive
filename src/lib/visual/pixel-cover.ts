import type { LabTypeValue } from "../content/lab";
import type { ProjectTypeValue } from "../content/projects";

export type PixelCoverVariant =
  | "file-matrix"
  | "terminal-strip"
  | "save-chip"
  | "timeline-fragment"
  | "experiment-grid";

export type PixelCoverSection =
  | "projects"
  | "notes"
  | "archive"
  | "lab"
  | "home";

export type PixelCoverModel = {
  code: string;
  cells: number[];
  bars: number[];
  nodes: number[];
};

function hashText(value: string) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function nextValue(state: number) {
  let value = state + 0x6d2b79f5;
  value = Math.imul(value ^ (value >>> 15), value | 1);
  value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
  return {
    state: value >>> 0,
    value: (value ^ (value >>> 14)) >>> 0,
  };
}

export function createPixelCoverModel(
  seed: string,
  tags: string[] = [],
  status = "",
): PixelCoverModel {
  let state = hashText([seed, status, ...tags].join("|"));
  const take = (limit: number) => {
    const next = nextValue(state);
    state = next.state;
    return next.value % limit;
  };

  const code =
    seed
      .split(/[^a-z0-9]+/i)
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 3)
      .toUpperCase() || "PX";

  return {
    code,
    cells: Array.from({ length: 32 }, () => take(4)),
    bars: Array.from({ length: 5 }, () => 28 + take(68)),
    nodes: Array.from({ length: 6 }, () => take(3)),
  };
}

export function getProjectCoverVariant(
  type: ProjectTypeValue,
): PixelCoverVariant {
  const variants: Record<ProjectTypeValue, PixelCoverVariant> = {
    web: "file-matrix",
    "ai-tool": "terminal-strip",
    research: "timeline-fragment",
    design: "file-matrix",
    hardware: "save-chip",
    "personal-site": "save-chip",
  };

  return variants[type];
}

export function getLabCoverVariant(type: LabTypeValue): PixelCoverVariant {
  const variants: Record<LabTypeValue, PixelCoverVariant> = {
    pixel: "file-matrix",
    ui: "experiment-grid",
    minecraft: "timeline-fragment",
    image: "file-matrix",
    demo: "terminal-strip",
    other: "experiment-grid",
  };

  return variants[type];
}
