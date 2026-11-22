import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config.ts';

export default defineConfig({
  site: SITE.url,
  base: SITE.base,
  integrations: [sitemap()],
});
