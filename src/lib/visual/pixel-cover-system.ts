export type CoverKind = "project" | "note" | "archive" | "lab";

export type CoverVariant =
  | "project-code"
  | "terminal-record"
  | "save-point"
  | "experiment-sheet";

export type CoverAccent =
  | "green"
  | "orange"
  | "teal"
  | "purple"
  | "blue"
  | "neutral";

export type CoverDensity = "low" | "medium" | "high";
export type PixelHeatVariant = "progress" | "pulse" | "timeline" | "matrix";

export type CoverMeta = {
  variant?: CoverVariant;
  code?: string;
  accent?: CoverAccent;
  progress?: number;
  density?: CoverDensity;
  seed?: string;
  showHeat?: boolean;
};

export type CoverRecipe = Required<CoverMeta>;

export type PixelHeatCell = {
  level: 0 | 1 | 2 | 3;
  active: boolean;
  completed: boolean;
  highlighted: boolean;
};

export type PixelHeatInput = {
  seed: string;
  variant: PixelHeatVariant;
  density?: CoverDensity;
  progress?: number;
  intensity?: number;
};

const variantByKind: Record<CoverKind, CoverVariant> = {
  project: "project-code",
  note: "terminal-record",
  archive: "save-point",
  lab: "experiment-sheet",
};

const accentByKind: Record<CoverKind, CoverAccent> = {
  project: "green",
  note: "orange",
  archive: "teal",
  lab: "purple",
};

const progressByStatus: Record<string, number> = {
  done: 100,
  ready: 100,
  active: 78,
  wip: 62,
  building: 62,
  prototype: 42,
  testing: 42,
  paused: 24,
  idea: 18,
  locked: 8,
  empty: 0,
};

export function hashSeed(seed: string) {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function pseudoRandom(hash: number, index: number) {
  let value = hash + Math.imul(index + 1, 0x6d2b79f5);
  value = Math.imul(value ^ (value >>> 15), value | 1);
  value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
  return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
}

function clampProgress(progress?: number) {
  if (progress === undefined) return undefined;
  return Math.min(100, Math.max(0, Math.round(progress)));
}

export function generateHeatCells({
  seed,
  variant,
  density = "medium",
  progress,
  intensity = 0.5,
}: PixelHeatInput): PixelHeatCell[] {
  const total = variant === "matrix" ? 48 : 32;
  const activeRatio = {
    low: 0.3,
    medium: 0.5,
    high: 0.72,
  }[density];
  const normalizedProgress = clampProgress(progress);
  const hash = hashSeed(`${seed}|${variant}|${density}`);

  return Array.from({ length: total }, (_, index) => {
    const value = pseudoRandom(hash, index);
    const position = (index + 1) / total;
    const completed =
      normalizedProgress === undefined
        ? value < activeRatio
        : position <= normalizedProgress / 100;
    const active = completed || value < activeRatio * (0.6 + intensity * 0.4);
    const highlighted =
      active &&
      (value < 0.06 + intensity * 0.04 ||
        (normalizedProgress !== undefined &&
          Math.abs(position - normalizedProgress / 100) < 1 / total));
    const level: PixelHeatCell["level"] = highlighted
      ? 3
      : completed
        ? 2
        : active
          ? 1
          : 0;

    return { level, active, completed, highlighted };
  });
}

function getInitials(title: string) {
  const words = title
    .split(/[^a-z0-9]+/i)
    .filter(Boolean)
    .filter((word) => !["website", "tool", "system", "project"].includes(word.toLowerCase()));

  if (words.length === 1) {
    return words[0].slice(0, 3).toUpperCase();
  }

  return words
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function generateCoverCode({
  kind,
  title,
  seed,
  date,
}: {
  kind: CoverKind;
  title: string;
  seed: string;
  date?: string;
}) {
  if (kind === "archive" && date) {
    return date.replaceAll("-", ".");
  }

  if (kind === "project") {
    return getInitials(title) || "PX";
  }

  const serial = String(hashSeed(seed) % 1000).padStart(3, "0");

  if (kind === "note") {
    return `N${serial}`;
  }

  return `L-${serial}`;
}

export function normalizeCoverMeta({
  kind,
  title,
  seed,
  date,
  status = "",
  tagCount = 0,
  coverMeta = {},
}: {
  kind: CoverKind;
  title: string;
  seed: string;
  date?: string;
  status?: string;
  tagCount?: number;
  coverMeta?: CoverMeta;
}): CoverRecipe {
  const normalizedStatus = status.toLowerCase();
  const density =
    coverMeta.density ??
    (tagCount >= 4 ? "high" : tagCount <= 1 ? "low" : "medium");
  const progress =
    clampProgress(coverMeta.progress) ??
    progressByStatus[normalizedStatus] ??
    (kind === "note" ? Math.min(86, 28 + tagCount * 12) : 50);

  return {
    variant: coverMeta.variant ?? variantByKind[kind],
    code:
      coverMeta.code ??
      generateCoverCode({
        kind,
        title,
        seed,
        date,
      }),
    accent: coverMeta.accent ?? accentByKind[kind],
    progress,
    density,
    seed: coverMeta.seed ?? seed,
    showHeat: coverMeta.showHeat ?? true,
  };
}
