import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const dateString = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const tags = z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/));

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["WIP", "Done", "Prototype", "Paused"]),
    category: z.string(),
    tags,
    techStack: z.array(z.string()),
    featured: z.boolean(),
    startDate: dateString.optional(),
    updatedDate: dateString.optional(),
    endDate: dateString.nullable().optional(),
    cover: z.string().startsWith("/images/projects/").optional(),
    links: z
      .object({
        github: z.url().optional(),
        demo: z.url().optional(),
        docs: z.url().optional(),
      })
      .optional(),
    relatedNotes: z.array(z.string()).optional(),
    relatedArchive: z.array(z.string()).optional(),
  }),
});

const notes = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/notes",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    type: z.enum(["Article", "Log", "Note"]),
    category: z.string(),
    tags,
    date: dateString,
    updated: dateString.optional(),
    cover: z.string().startsWith("/images/notes/").optional(),
    draft: z.boolean(),
    relatedProjects: z.array(z.string()).optional(),
    relatedArchive: z.array(z.string()).optional(),
  }),
});

const archive = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/archive",
  }),
  schema: z.object({
    title: z.string(),
    date: dateString,
    type: z.enum(["save-point", "milestone", "project-log"]),
    description: z.string(),
    relatedProject: z.string().optional(),
    relatedNote: z.string().optional(),
  }),
});

const lab = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/lab",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(["pixel", "ui", "minecraft", "image", "demo", "other"]),
    tags,
    status: z.enum(["idea", "prototype", "done"]),
    cover: z.string().startsWith("/images/lab/").optional(),
    date: dateString.optional(),
    links: z
      .object({
        demo: z.url().optional(),
        source: z.url().optional(),
        note: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  projects,
  notes,
  archive,
  lab,
};
