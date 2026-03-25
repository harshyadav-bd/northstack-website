import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://northstacklabs.ca',
  output: 'static',
  trailingSlash: 'never',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [sitemap()],
});
