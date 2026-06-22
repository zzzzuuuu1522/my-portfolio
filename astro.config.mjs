import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://zzzzuuuu1522.github.io',
  base: '/my-portfolio',
  integrations: [mdx(), tailwind()]
});
