import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import type { CoverMeta } from "../visual/pixel-cover-system";

export type LabTypeValue =
  | "pixel"
  | "ui"
  | "minecraft"
  | "image"
  | "demo"
  | "other";

export type LabStatusValue = "idea" | "prototype" | "done";

export type LabItem = {
  slug: string;
  href: string;
  title: string;
  description: string;
  type: LabTypeValue;
  tags: string[];
  status: LabStatusValue;
  cover?: string;
  coverMeta?: CoverMeta;
  date?: string;
};

function getLabSlug(entry: CollectionEntry<"lab">) {
  return entry.id.replace(/\.(md|mdx)$/, "");
}

function toLabItem(entry: CollectionEntry<"lab">): LabItem {
  const slug = getLabSlug(entry);

  return {
    slug,
    href: `/lab/${slug}/`,
    title: entry.data.title,
    description: entry.data.description,
    type: entry.data.type,
    tags: entry.data.tags,
    status: entry.data.status,
    cover: entry.data.cover,
    coverMeta: entry.data.coverMeta,
    date: entry.data.date,
  };
}

export async function getAllLabItems(): Promise<LabItem[]> {
  const entries = await getCollection("lab");
  return entries
    .map(toLabItem)
    .toSorted(
      (a, b) =>
        (b.date ?? "").localeCompare(a.date ?? "") ||
        a.title.localeCompare(b.title),
    );
}

export async function getLabBySlug(
  slug: string,
): Promise<LabItem | undefined> {
  const entry = await getEntry("lab", slug);
  return entry ? toLabItem(entry) : undefined;
}
