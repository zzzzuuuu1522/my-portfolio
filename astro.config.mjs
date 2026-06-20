import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // TODO: 部署前替换为正式域名，并同步修改 src/config.ts 与 public/robots.txt。
  site: 'https://TODO-REPLACE-ME.example.com',
  integrations: [mdx(), tailwind()]
});
