const configuredUrl =
  import.meta.env.PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "";

export const site = {
  name: "Pixel Archive",
  description:
    "A personal archive for projects, notes, save points and experiments.",
  url: configuredUrl,
  author: "",
  github: "",
  defaultImage: "/images/og/pixel-archive-og.svg",
  builtWith: "Astro",
  footerText: "archive online",
};
