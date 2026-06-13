import { hashSeed } from "./pixel-cover-system";

export type AmbientBandSection = "projects" | "notes" | "archive" | "lab";

export type AmbientBandVariant =
  | "diagonal-up"
  | "diagonal-down"
  | "right-sweep"
  | "low-cross";

export type AmbientBandIntensity = "low" | "medium";
export type AmbientBandReviewStatus = "candidate" | "rejected" | "approved";

export type AmbientBandPixel = {
  x: number;
  y: number;
  size: number;
  tone: 0 | 1 | 2 | 3;
};

export type AmbientBandModel = {
  id: string;
  silhouette: string;
  facets: string[];
  pixels: AmbientBandPixel[];
};

type VariantGeometry = {
  silhouette: string;
  facets: string[];
  pixelAnchors: readonly [number, number][];
};

const geometryByVariant: Record<AmbientBandVariant, VariantGeometry> = {
  "diagonal-up": {
    silhouette:
      "0,238 180,174 365,123 550,69 736,34 860,47 860,106 820,82 615,122 420,178 230,229 42,298 0,290",
    facets: [
      "0,238 180,174 230,229 42,298 0,290",
      "180,174 365,123 420,178 230,229",
      "365,123 550,69 615,122 420,178",
      "550,69 736,34 820,82 615,122",
      "736,34 860,47 860,106 820,82",
    ],
    pixelAnchors: [
      [36, 228],
      [92, 276],
      [205, 165],
      [274, 218],
      [394, 112],
      [476, 160],
      [578, 58],
      [654, 112],
      [750, 25],
      [822, 94],
    ],
  },
  "diagonal-down": {
    silhouette:
      "0,42 146,61 318,103 493,150 675,205 860,236 860,302 674,270 480,214 302,166 126,116 0,104",
    facets: [
      "0,42 146,61 126,116 0,104",
      "146,61 318,103 302,166 126,116",
      "318,103 493,150 480,214 302,166",
      "493,150 675,205 674,270 480,214",
      "675,205 860,236 860,302 674,270",
    ],
    pixelAnchors: [
      [28, 32],
      [90, 108],
      [174, 52],
      [250, 148],
      [342, 91],
      [432, 207],
      [520, 140],
      [612, 248],
      [708, 194],
      [812, 292],
    ],
  },
  "right-sweep": {
    silhouette:
      "226,38 416,64 566,101 718,91 860,50 860,242 730,273 566,246 402,271 250,227 330,163",
    facets: [
      "226,38 416,64 330,163 250,227",
      "416,64 566,101 516,181 330,163",
      "566,101 718,91 684,183 516,181",
      "718,91 860,50 860,146 684,183",
      "684,183 860,146 860,242 730,273 566,246 516,181",
      "330,163 516,181 566,246 402,271 250,227",
    ],
    pixelAnchors: [
      [244, 28],
      [272, 236],
      [388, 54],
      [424, 278],
      [544, 91],
      [586, 254],
      [704, 80],
      [742, 277],
      [824, 42],
      [842, 226],
    ],
  },
  "low-cross": {
    silhouette:
      "0,218 154,190 315,209 476,177 638,198 860,156 860,260 660,291 492,257 326,286 158,254 0,284",
    facets: [
      "0,218 154,190 158,254 0,284",
      "154,190 315,209 326,286 158,254",
      "315,209 476,177 492,257 326,286",
      "476,177 638,198 660,291 492,257",
      "638,198 860,156 860,260 660,291",
    ],
    pixelAnchors: [
      [28, 208],
      [76, 286],
      [178, 180],
      [260, 276],
      [348, 199],
      [438, 266],
      [510, 166],
      [604, 292],
      [690, 188],
      [812, 270],
    ],
  },
};

function pseudoRandom(hash: number, index: number) {
  let value = hash + Math.imul(index + 1, 0x6d2b79f5);
  value = Math.imul(value ^ (value >>> 15), value | 1);
  value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
  return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
}
export function createAmbientBandModel({
  section,
  variant,
  seed,
}: {
  section: AmbientBandSection;
  variant: AmbientBandVariant;
  seed: string;
}): AmbientBandModel {
  const geometry = geometryByVariant[variant];
  const hash = hashSeed(`${section}|${variant}|${seed}`);
  const pixels = geometry.pixelAnchors.map(([anchorX, anchorY], index) => {
    const offsetX = Math.round((pseudoRandom(hash, index * 3) - 0.5) * 18);
    const offsetY = Math.round(
      (pseudoRandom(hash, index * 3 + 1) - 0.5) * 16,
    );
    const sizeIndex = Math.floor(pseudoRandom(hash, index * 3 + 2) * 3);

    return {
      x: anchorX + offsetX,
      y: anchorY + offsetY,
      size: [6, 9, 12][sizeIndex],
      tone: (index % 4) as AmbientBandPixel["tone"],
    };
  });

  return {
    id: `ambient-${hash.toString(16)}`,
    silhouette: geometry.silhouette,
    facets: geometry.facets,
    pixels,
  };
}
