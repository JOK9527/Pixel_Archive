import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || undefined,
  integrations: [mdx()],
  adapter: cloudflare(),
});