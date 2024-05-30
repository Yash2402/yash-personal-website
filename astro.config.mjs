import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkObsidian from 'remark-obsidian';
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
// import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [tailwind(), icon(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: "houston",
      defaultColor: false
    },
    remarkPlugins: [remarkObsidian],
    rehypePlugins: [rehypeMathjax],
    gfm: true
  }),],
});