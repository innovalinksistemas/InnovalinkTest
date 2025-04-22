import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },

  integrations: [tailwind()],
  adapter: netlify()
});