// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tut2.netlify.app",
  integrations: [preact(), purgecss()]
});