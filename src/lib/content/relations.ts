import { getEntry } from "astro:content";

export type RelatedRecordLink = {
  href: string;
  title: string;
};

async function resolveEntries(
  slugs: string[],
  resolver: (slug: string) => Promise<RelatedRecordLink | undefined>,
) {
  const entries = await Promise.all(slugs.map(resolver));
  return entries.filter((entry) => entry !== undefined);
}

export function resolveProjectLinks(
  slugs: string[],
): Promise<RelatedRecordLink[]> {
  return resolveEntries(slugs, async (slug) => {
    const entry = await getEntry("projects", slug);
    return entry
      ? { href: `/projects/${slug}/`, title: entry.data.title }
      : undefined;
  });
}

export function resolvePublishedNoteLinks(
  slugs: string[],
): Promise<RelatedRecordLink[]> {
  return resolveEntries(slugs, async (slug) => {
    const entry = await getEntry("notes", slug);
    return entry && !entry.data.draft
      ? { href: `/notes/${slug}/`, title: entry.data.title }
      : undefined;
  });
}

export function resolveArchiveLinks(
  slugs: string[],
): Promise<RelatedRecordLink[]> {
  return resolveEntries(slugs, async (slug) => {
    const entry = await getEntry("archive", slug);
    return entry
      ? { href: `/archive/#${slug}`, title: entry.data.title }
      : undefined;
  });
}
