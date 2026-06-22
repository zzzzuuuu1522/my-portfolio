import { getCollection } from "astro:content";
import createSlug from "../lib/createSlug";
import withBase from "../lib/withBase";

export async function GET({ site }) {
  const posts = await getCollection("blog");
  const paths = [
    "/",
    "/projects/",
    "/blog/",
    "/cv/",
    ...posts.map((post) => `/blog/${createSlug(post.data.title, post.slug)}/`),
  ];
  const urls = paths.map((path) => new URL(withBase(path), site).href);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
