import { getCollection, getEntry, type CollectionEntry } from "astro:content";

export type NoteTypeValue = "Article" | "Log" | "Note";

export type NoteItem = {
  slug: string;
  href: string;
  title: string;
  description?: string;
  type: NoteTypeValue;
  category: string;
  tags: string[];
  date: string;
  updated?: string;
  cover?: string;
  draft: boolean;
};

function getNoteSlug(entry: CollectionEntry<"notes">) {
  return entry.id.replace(/\.(md|mdx)$/, "");
}

function toNoteItem(entry: CollectionEntry<"notes">): NoteItem {
  const slug = getNoteSlug(entry);

  return {
    slug,
    href: `/notes/${slug}/`,
    title: entry.data.title,
    description: entry.data.description,
    type: entry.data.type,
    category: entry.data.category,
    tags: entry.data.tags,
    date: entry.data.date,
    updated: entry.data.updated,
    cover: entry.data.cover,
    draft: entry.data.draft,
  };
}

function sortNotes(notes: NoteItem[]) {
  return notes.toSorted(
    (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title),
  );
}

export async function getAllNotes(): Promise<NoteItem[]> {
  const entries = await getCollection("notes");
  return sortNotes(entries.map(toNoteItem));
}

export async function getPublishedNotes(): Promise<NoteItem[]> {
  const notes = await getAllNotes();
  return notes.filter((note) => !note.draft);
}

export async function getNoteBySlug(
  slug: string,
): Promise<NoteItem | undefined> {
  const entry = await getEntry("notes", slug);
  return entry ? toNoteItem(entry) : undefined;
}

export async function getNotesByType(
  type: NoteTypeValue,
): Promise<NoteItem[]> {
  const notes = await getPublishedNotes();
  return notes.filter((note) => note.type === type);
}
