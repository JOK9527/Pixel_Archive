import type { LabTypeValue } from "../content/lab";
import type { NoteTypeValue } from "../content/notes";
import type { ProjectTypeValue } from "../content/projects";

export type PixelCoverVariant =
  | "terminal-strip"
  | "save-chip"
  | "timeline-fragment"
  | "experiment-grid";

export type PixelCoverAccent =
  | "green"
  | "blue"
  | "amber"
  | "violet"
  | "red";

export type PixelCoverDensity = "low" | "medium" | "high";

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

export type PixelCoverRecipe = {
  variant: PixelCoverVariant;
  accent: PixelCoverAccent;
  density: PixelCoverDensity;
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
  density: PixelCoverDensity = "medium",
): PixelCoverModel {
  let state = hashText([seed, status, density, ...tags].join("|"));
  const take = (limit: number) => {
    const next = nextValue(state);
    state = next.state;
    return next.value % limit;
  };
  const densityThresholds: Record<PixelCoverDensity, [number, number, number]> = {
    low: [56, 78, 94],
    medium: [40, 65, 88],
    high: [26, 48, 78],
  };
  const [emptyAt, neutralAt, accentAt] = densityThresholds[density];
  const takeCell = () => {
    const value = take(100);

    if (value < emptyAt) return 0;
    if (value < neutralAt) return 1;
    if (value < accentAt) return 2;
    return 3;
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
    cells: Array.from({ length: 32 }, takeCell),
    bars: Array.from({ length: 5 }, () => 28 + take(68)),
    nodes: Array.from({ length: 6 }, () => take(3)),
  };
}

export function getProjectCoverRecipe(
  type: ProjectTypeValue,
  featured = false,
): PixelCoverRecipe {
  const recipes: Record<
    ProjectTypeValue,
    Omit<PixelCoverRecipe, "density">
  > = {
    web: { variant: "save-chip", accent: "green" },
    "ai-tool": { variant: "terminal-strip", accent: "blue" },
    research: { variant: "timeline-fragment", accent: "amber" },
    design: { variant: "experiment-grid", accent: "violet" },
    hardware: { variant: "save-chip", accent: "red" },
    "personal-site": { variant: "save-chip", accent: "green" },
  };

  return {
    ...recipes[type],
    density: featured ? "high" : "medium",
  };
}

export function getLabCoverRecipe(
  type: LabTypeValue,
  status = "",
): PixelCoverRecipe {
  const recipes: Record<
    LabTypeValue,
    Omit<PixelCoverRecipe, "density">
  > = {
    pixel: { variant: "experiment-grid", accent: "violet" },
    ui: { variant: "experiment-grid", accent: "blue" },
    minecraft: { variant: "timeline-fragment", accent: "green" },
    image: { variant: "experiment-grid", accent: "red" },
    demo: { variant: "terminal-strip", accent: "amber" },
    other: { variant: "experiment-grid", accent: "violet" },
  };

  return {
    ...recipes[type],
    density: ["active", "building"].includes(status.toLowerCase())
      ? "high"
      : "medium",
  };
}

export function getNoteCoverRecipe(
  type: NoteTypeValue,
  category: string,
  tagCount: number,
): PixelCoverRecipe {
  const accents: PixelCoverAccent[] = [
    "green",
    "blue",
    "amber",
    "violet",
    "red",
  ];
  const typeOffset: Record<NoteTypeValue, number> = {
    Article: 1,
    Log: 0,
    Note: 2,
  };
  const accentIndex = (hashText(category) + typeOffset[type]) % accents.length;

  return {
    variant: "terminal-strip",
    accent: accents[accentIndex],
    density: tagCount >= 4 ? "high" : tagCount <= 1 ? "low" : "medium",
  };
}
