import { getAllLabItems } from "./lab";
import { getPublishedNotes } from "./notes";
import { getAllProjects } from "./projects";

export type TopicKind = "tag" | "category";
export type DiscoveryKind = "Project" | "Note" | "Lab";

export type DiscoveryItem = {
  kind: DiscoveryKind;
  title: string;
  description: string;
  href: string;
  category: string;
  tags: string[];
  date?: string;
};

export type TopicSummary = {
  kind: TopicKind;
  label: string;
  slug: string;
  href: string;
  count: number;
};

export function slugifyTopic(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getDiscoveryItems(): Promise<DiscoveryItem[]> {
  const [projects, notes, labItems] = await Promise.all([
    getAllProjects(),
    getPublishedNotes(),
    getAllLabItems(),
  ]);

  return [
    ...projects.map((project) => ({
      kind: "Project" as const,
      title: project.title,
      description: project.description,
      href: project.href,
      category: project.category,
      tags: project.tags,
      date: project.startDate,
    })),
    ...notes.map((note) => ({
      kind: "Note" as const,
      title: note.title,
      description: note.description ?? "Published note",
      href: note.href,
      category: note.category,
      tags: note.tags,
      date: note.date,
    })),
    ...labItems.map((item) => ({
      kind: "Lab" as const,
      title: item.title,
      description: item.description,
      href: item.href,
      category: item.type,
      tags: item.tags,
      date: item.date,
    })),
  ];
}

export async function getTopicSummaries(): Promise<TopicSummary[]> {
  const items = await getDiscoveryItems();
  const topics = new Map<string, TopicSummary>();

  for (const item of items) {
    const values: Array<[TopicKind, string]> = [
      ["category", item.category],
      ...item.tags.map((tag) => ["tag", tag] as [TopicKind, string]),
    ];

    for (const [kind, label] of values) {
      const slug = slugifyTopic(label);

      if (!slug) {
        continue;
      }

      const key = `${kind}:${slug}`;
      const topic = topics.get(key);

      if (topic) {
        topic.count += 1;
      } else {
        topics.set(key, {
          kind,
          label,
          slug,
          href: `/topics/${kind}/${slug}/`,
          count: 1,
        });
      }
    }
  }

  return [...topics.values()].toSorted(
    (a, b) => b.count - a.count || a.label.localeCompare(b.label, "en"),
  );
}

export async function getTopicItems(
  kind: TopicKind,
  slug: string,
): Promise<DiscoveryItem[]> {
  const items = await getDiscoveryItems();

  return items.filter((item) => {
    if (kind === "category") {
      return slugifyTopic(item.category) === slug;
    }

    return item.tags.some((tag) => slugifyTopic(tag) === slug);
  });
}
