import { getCollection, type CollectionEntry } from "astro:content";

export type ArchiveTypeValue = "save-point" | "milestone" | "project-log";

export type ArchiveItem = {
  slug: string;
  title: string;
  date: string;
  type: ArchiveTypeValue;
  description: string;
  relatedProject?: string;
  relatedNote?: string;
  relatedHref?: string;
};

export type ArchiveMonthGroup = {
  month: string;
  entries: ArchiveItem[];
};

export type ArchiveYearGroup = {
  year: string;
  months: ArchiveMonthGroup[];
};

function getArchiveSlug(entry: CollectionEntry<"archive">) {
  return entry.id.replace(/\.(md|mdx)$/, "");
}

function toArchiveItem(entry: CollectionEntry<"archive">): ArchiveItem {
  const relatedHref = entry.data.relatedProject
    ? `/projects/${entry.data.relatedProject}/`
    : entry.data.relatedNote
      ? `/notes/${entry.data.relatedNote}/`
      : undefined;

  return {
    slug: getArchiveSlug(entry),
    title: entry.data.title,
    date: entry.data.date,
    type: entry.data.type,
    description: entry.data.description,
    relatedProject: entry.data.relatedProject,
    relatedNote: entry.data.relatedNote,
    relatedHref,
  };
}

export async function getAllArchiveEntries(): Promise<ArchiveItem[]> {
  const entries = await getCollection("archive");
  return entries
    .map(toArchiveItem)
    .toSorted((a, b) => b.date.localeCompare(a.date));
}

export function groupArchiveEntries(
  entries: ArchiveItem[],
): ArchiveYearGroup[] {
  const years = new Map<string, Map<string, ArchiveItem[]>>();

  for (const entry of entries) {
    const [year, month] = entry.date.split("-");
    const months = years.get(year) ?? new Map<string, ArchiveItem[]>();
    const monthEntries = months.get(month) ?? [];
    monthEntries.push(entry);
    months.set(month, monthEntries);
    years.set(year, months);
  }

  return [...years.entries()].map(([year, months]) => ({
    year,
    months: [...months.entries()].map(([month, monthEntries]) => ({
      month,
      entries: monthEntries,
    })),
  }));
}

export async function getArchiveGroups(): Promise<ArchiveYearGroup[]> {
  const entries = await getAllArchiveEntries();
  return groupArchiveEntries(entries);
}
