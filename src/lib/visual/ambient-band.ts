export type AmbientBandSection = "projects" | "notes" | "archive" | "lab";

export type AmbientBandVariant =
  | "auto"
  | "diagonal-up"
  | "diagonal-down"
  | "side-arc"
  | "corner-sweep"
  | "low-cross"
  | "gutter-split";

export type ResolvedAmbientBandVariant = Exclude<AmbientBandVariant, "auto">;

export type AmbientBandIntensity = "low" | "medium";

export type AmbientBandPlacement =
  | "article-detail"
  | "project-detail"
  | "lab-detail";

type Point = {
  x: number;
  y: number;
};

type VariantPreset = {
  main: Point[];
  facet: Point[];
  secondary?: Point[];
  nodes: Point[];
  gradient: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
};

export type AmbientBandNode = Point & {
  size: number;
  hot: boolean;
};

export type AmbientBandModel = {
  variant: ResolvedAmbientBandVariant;
  mainPoints: string;
  facetPoints: string;
  secondaryPoints?: string;
  nodes: AmbientBandNode[];
  gradient: VariantPreset["gradient"];
};

export const ambientBandVariants: ResolvedAmbientBandVariant[] = [
  "diagonal-up",
  "diagonal-down",
  "side-arc",
  "corner-sweep",
  "low-cross",
  "gutter-split",
];

const presets: Record<ResolvedAmbientBandVariant, VariantPreset> = {
  "diagonal-up": {
    main: [
      { x: 0, y: 244 },
      { x: 0, y: 188 },
      { x: 560, y: 34 },
      { x: 560, y: 102 },
    ],
    facet: [
      { x: 182, y: 176 },
      { x: 338, y: 102 },
      { x: 418, y: 80 },
      { x: 348, y: 126 },
    ],
    nodes: [
      { x: 80, y: 202 },
      { x: 142, y: 190 },
      { x: 390, y: 88 },
      { x: 470, y: 70 },
      { x: 520, y: 94 },
    ],
    gradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
  },
  "diagonal-down": {
    main: [
      { x: 0, y: 42 },
      { x: 0, y: 108 },
      { x: 560, y: 266 },
      { x: 560, y: 202 },
    ],
    facet: [
      { x: 132, y: 96 },
      { x: 286, y: 146 },
      { x: 370, y: 192 },
      { x: 284, y: 166 },
    ],
    nodes: [
      { x: 54, y: 82 },
      { x: 116, y: 106 },
      { x: 342, y: 182 },
      { x: 430, y: 214 },
      { x: 510, y: 232 },
    ],
    gradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
  },
  "side-arc": {
    main: [
      { x: 226, y: 0 },
      { x: 326, y: 0 },
      { x: 422, y: 72 },
      { x: 354, y: 130 },
      { x: 504, y: 212 },
      { x: 560, y: 208 },
      { x: 560, y: 286 },
      { x: 494, y: 292 },
      { x: 278, y: 164 },
      { x: 344, y: 102 },
    ],
    facet: [
      { x: 344, y: 102 },
      { x: 422, y: 72 },
      { x: 354, y: 130 },
      { x: 278, y: 164 },
    ],
    nodes: [
      { x: 294, y: 24 },
      { x: 382, y: 72 },
      { x: 330, y: 144 },
      { x: 462, y: 214 },
      { x: 520, y: 258 },
    ],
    gradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
  },
  "corner-sweep": {
    main: [
      { x: 0, y: 0 },
      { x: 286, y: 0 },
      { x: 392, y: 78 },
      { x: 332, y: 134 },
      { x: 184, y: 62 },
      { x: 0, y: 92 },
    ],
    facet: [
      { x: 184, y: 62 },
      { x: 286, y: 0 },
      { x: 392, y: 78 },
      { x: 332, y: 134 },
    ],
    secondary: [
      { x: 392, y: 222 },
      { x: 560, y: 184 },
      { x: 560, y: 238 },
      { x: 420, y: 270 },
    ],
    nodes: [
      { x: 46, y: 50 },
      { x: 122, y: 40 },
      { x: 266, y: 36 },
      { x: 352, y: 92 },
      { x: 468, y: 224 },
    ],
    gradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
  },
  "low-cross": {
    main: [
      { x: 0, y: 194 },
      { x: 118, y: 162 },
      { x: 250, y: 184 },
      { x: 370, y: 142 },
      { x: 560, y: 172 },
      { x: 560, y: 238 },
      { x: 372, y: 208 },
      { x: 252, y: 246 },
      { x: 112, y: 224 },
      { x: 0, y: 252 },
    ],
    facet: [
      { x: 250, y: 184 },
      { x: 370, y: 142 },
      { x: 372, y: 208 },
      { x: 252, y: 246 },
    ],
    nodes: [
      { x: 74, y: 210 },
      { x: 142, y: 190 },
      { x: 286, y: 212 },
      { x: 414, y: 184 },
      { x: 510, y: 204 },
    ],
    gradient: { x1: 0, y1: 0.5, x2: 1, y2: 0.5 },
  },
  "gutter-split": {
    main: [
      { x: 0, y: 76 },
      { x: 170, y: 34 },
      { x: 242, y: 68 },
      { x: 180, y: 122 },
      { x: 0, y: 142 },
    ],
    facet: [
      { x: 126, y: 52 },
      { x: 170, y: 34 },
      { x: 242, y: 68 },
      { x: 180, y: 122 },
    ],
    secondary: [
      { x: 330, y: 184 },
      { x: 420, y: 150 },
      { x: 560, y: 172 },
      { x: 560, y: 242 },
      { x: 410, y: 220 },
    ],
    nodes: [
      { x: 52, y: 92 },
      { x: 116, y: 76 },
      { x: 202, y: 82 },
      { x: 398, y: 190 },
      { x: 488, y: 202 },
    ],
    gradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
  },
};

export function createSeededRandom(seed: string) {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return () => {
    hash += hash << 13;
    hash ^= hash >>> 7;
    hash += hash << 3;
    hash ^= hash >>> 17;
    hash += hash << 5;
    return ((hash >>> 0) % 10000) / 10000;
  };
}

function toPoints(points: Point[]) {
  return points.map(({ x, y }) => `${Math.round(x)},${Math.round(y)}`).join(" ");
}

function jitterPoints(points: Point[], random: () => number, amount: number) {
  return points.map(({ x, y }) => ({
    x: Math.max(0, Math.min(560, x + (random() - 0.5) * amount)),
    y: Math.max(0, Math.min(300, y + (random() - 0.5) * amount)),
  }));
}

export function resolveAmbientBandVariant(
  seed: string,
  variant: AmbientBandVariant = "auto",
): ResolvedAmbientBandVariant {
  if (variant !== "auto") return variant;

  const random = createSeededRandom(seed);
  return ambientBandVariants[Math.floor(random() * ambientBandVariants.length)];
}

export function generateAmbientBandModel({
  seed,
  variant = "auto",
}: {
  seed: string;
  variant?: AmbientBandVariant;
}): AmbientBandModel {
  const resolvedVariant = resolveAmbientBandVariant(seed, variant);
  const preset = presets[resolvedVariant];
  const random = createSeededRandom(`${seed}:${resolvedVariant}`);
  const jitter = resolvedVariant === "side-arc" ? 8 : 12;
  const hotNodeIndex = Math.floor(random() * preset.nodes.length);

  return {
    variant: resolvedVariant,
    mainPoints: toPoints(jitterPoints(preset.main, random, jitter)),
    facetPoints: toPoints(jitterPoints(preset.facet, random, jitter * 0.65)),
    secondaryPoints: preset.secondary
      ? toPoints(jitterPoints(preset.secondary, random, jitter * 0.75))
      : undefined,
    nodes: preset.nodes.map(({ x, y }, index) => ({
      x: Math.round(x + (random() - 0.5) * 14),
      y: Math.round(y + (random() - 0.5) * 14),
      size: random() > 0.72 ? 8 : 6,
      hot: index === hotNodeIndex,
    })),
    gradient: preset.gradient,
  };
}
