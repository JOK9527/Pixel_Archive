import type { ArchiveItem } from "./archive";
import type { NoteItem } from "./notes";
import type { ProjectItem } from "./projects";

export type TaxonomyItem = {
  label: string;
  value: string;
  count: number;
};

export type TaxonomyGroup = {
  label: string;
  kind: string;
  items: TaxonomyItem[];
};

export function getYearMonth(date?: string) {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return "Undated";
  }

  return date.slice(0, 7).replace("-", ".");
}

export function toTaxonomyValue(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(
    /(^-|-$)/g,
    "",
  );
}

function buildTaxonomyItems(values: string[], sort: "label" | "date" = "label") {
  const counts = new Map<string, { label: string; count: number }>();

  for (const label of values) {
    const value = toTaxonomyValue(label);
    const current = counts.get(value);
    counts.set(value, {
      label,
      count: (current?.count ?? 0) + 1,
    });
  }

  return Array.from(counts, ([value, item]) => ({
    value,
    ...item,
  })).sort((a, b) =>
    sort === "date"
      ? b.label.localeCompare(a.label)
      : a.label.localeCompare(b.label, "en"),
  );
}

export function getProjectTaxonomy(projects: ProjectItem[]): TaxonomyGroup[] {
  return [
    {
      label: "Type",
      kind: "type",
      items: buildTaxonomyItems(projects.map((project) => project.type)),
    },
    {
      label: "Status",
      kind: "status",
      items: buildTaxonomyItems(projects.map((project) => project.status)),
    },
    {
      label: "Year.Month",
      kind: "year",
      items: buildTaxonomyItems(
        projects.map((project) =>
          getYearMonth(
            project.startDate ?? project.updatedDate ?? project.endDate ?? undefined,
          ),
        ),
        "date",
      ),
    },
    {
      label: "Tech",
      kind: "tech",
      items: buildTaxonomyItems(projects.flatMap((project) => project.techStack)),
    },
  ].filter((group) => group.items.length > 0);
}

export function getNoteTaxonomy(notes: NoteItem[]): TaxonomyGroup[] {
  return [
    {
      label: "Category",
      kind: "category",
      items: buildTaxonomyItems(notes.map((note) => note.category)),
    },
    {
      label: "Year.Month",
      kind: "year",
      items: buildTaxonomyItems(
        notes.map((note) => getYearMonth(note.updated ?? note.date)),
        "date",
      ),
    },
  ].filter((group) => group.items.length > 0);
}

export function getArchiveTaxonomy(entries: ArchiveItem[]): TaxonomyGroup[] {
  return [
    {
      label: "Year.Month",
      kind: "year",
      items: buildTaxonomyItems(
        entries.map((entry) => getYearMonth(entry.date)),
        "date",
      ),
    },
    {
      label: "Type",
      kind: "type",
      items: buildTaxonomyItems(entries.map((entry) => entry.type)),
    },
  ].filter((group) => group.items.length > 0);
}
