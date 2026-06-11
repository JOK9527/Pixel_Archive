import type { APIRoute } from "astro";
import { getAllLabItems } from "../lib/content/lab";
import { getPublishedNotes } from "../lib/content/notes";
import { getAllProjects } from "../lib/content/projects";
import { getTopicSummaries } from "../lib/content/topics";

export const prerender = true;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = async ({ site }) => {
  const [projects, notes, labItems, topics] = await Promise.all([
    getAllProjects(),
    getPublishedNotes(),
    getAllLabItems(),
    getTopicSummaries(),
  ]);
  const paths = [
    "/",
    "/projects/",
    "/notes/",
    "/archive/",
    "/lab/",
    "/about/",
    "/topics/",
    "/rss.xml",
    ...projects.map((project) => project.href),
    ...notes.map((note) => note.href),
    ...topics.map((topic) => topic.href),
  ];
  const latestLabDate = labItems
    .map((item) => item.date)
    .filter((date) => date !== undefined)
    .toSorted()
    .at(-1);
  const lastModified = latestLabDate ?? notes[0]?.date;
  const urls = [...new Set(paths)]
    .map((path) => {
      const location = site ? new URL(path, site).toString() : path;
      const modified = lastModified
        ? `\n    <lastmod>${lastModified}</lastmod>`
        : "";

      return `  <url>\n    <loc>${escapeXml(location)}</loc>${modified}\n  </url>`;
    })
    .join("\n");
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

