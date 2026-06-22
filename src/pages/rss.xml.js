import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";
import createSlug from "../lib/createSlug";
import withBase from "../lib/withBase";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: new URL(import.meta.env.BASE_URL, import.meta.env.SITE),
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: new URL(withBase(`/blog/${createSlug(post.data.title, post.slug)}/`), import.meta.env.SITE).href,
    })),
  });
}
