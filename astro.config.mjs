import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://wdsevilla.github.io',
  base:'',
  output: "InnovalinkTest",
  integrations: [tailwind()]
});