import { getCollection, getEntry, type CollectionEntry } from "astro:content";

export type ProjectStatusValue = "WIP" | "Done" | "Prototype" | "Paused";

export type ProjectLinksValue = {
  github?: string;
  demo?: string;
  docs?: string;
};

export type ProjectItem = {
  slug: string;
  href: string;
  title: string;
  description: string;
  status: ProjectStatusValue;
  category: string;
  tags: string[];
  techStack: string[];
  featured: boolean;
  cover?: string;
  links?: ProjectLinksValue;
  startDate?: string;
  endDate?: string | null;
  relatedNotes: string[];
  relatedArchive: string[];
};

function getProjectSlug(entry: CollectionEntry<"projects">) {
  return entry.id.replace(/\.(md|mdx)$/, "");
}

function toProjectItem(entry: CollectionEntry<"projects">): ProjectItem {
  const slug = getProjectSlug(entry);

  return {
    slug,
    href: `/projects/${slug}/`,
    title: entry.data.title,
    description: entry.data.description,
    status: entry.data.status,
    category: entry.data.category,
    tags: entry.data.tags,
    techStack: entry.data.techStack,
    featured: entry.data.featured,
    cover: entry.data.cover,
    links: entry.data.links,
    startDate: entry.data.startDate,
    endDate: entry.data.endDate,
    relatedNotes: entry.data.relatedNotes ?? [],
    relatedArchive: entry.data.relatedArchive ?? [],
  };
}

function sortProjects(projects: ProjectItem[]) {
  return projects.toSorted((a, b) => {
    if (a.featured !== b.featured) {
      return Number(b.featured) - Number(a.featured);
    }

    return a.title.localeCompare(b.title, "en");
  });
}

export async function getAllProjects(): Promise<ProjectItem[]> {
  const entries = await getCollection("projects");
  return sortProjects(entries.map(toProjectItem));
}

export async function getFeaturedProjects(): Promise<ProjectItem[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectItem | undefined> {
  const entry = await getEntry("projects", slug);
  return entry ? toProjectItem(entry) : undefined;
}
