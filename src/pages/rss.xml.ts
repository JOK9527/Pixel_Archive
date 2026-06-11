import type { APIRoute } from "astro";
import { site as siteConfig } from "../data/site";
import { getPublishedNotes } from "../lib/content/notes";

export const prerender = true;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absoluteUrl(path: string, origin?: URL) {
  return origin ? new URL(path, origin).toString() : path;
}

export const GET: APIRoute = async ({ site }) => {
  const notes = await getPublishedNotes();
  const channelUrl = absoluteUrl("/notes/", site);
  const items = notes
    .map((note) => {
      const link = absoluteUrl(note.href, site);
      const published = new Date(`${note.date}T00:00:00Z`).toUTCString();

      return [
        "    <item>",
        `      <title>${escapeXml(note.title)}</title>`,
        `      <link>${escapeXml(link)}</link>`,
        `      <guid isPermaLink="false">${escapeXml(note.slug)}</guid>`,
        `      <pubDate>${published}</pubDate>`,
        `      <description>${escapeXml(note.description ?? "")}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "  <channel>",
    `    <title>${escapeXml(siteConfig.name)} Notes</title>`,
    `    <link>${escapeXml(channelUrl)}</link>`,
    `    <description>${escapeXml(siteConfig.description)}</description>`,
    "    <language>zh-CN</language>",
    items,
    "  </channel>",
    "</rss>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};

