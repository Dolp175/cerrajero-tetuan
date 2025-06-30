import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cerrajerotetuan.com',
  trailingSlash: 'never', 
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('gracias'), 
    }),
  ],
});

