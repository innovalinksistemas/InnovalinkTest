import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  output: 'server',
  site: 'https://innovalinkcr.com',
  integrations: [tailwind(), react()],
  adapter: netlify({
    cacheOnDemandPages: true,
  }),
});