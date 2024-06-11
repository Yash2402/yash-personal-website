import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkObsidian from 'remark-obsidian';
import remarkMath from 'remark-math';
import mathjax from 'rehype-mathjax';
import katex from "rehype-katex";
import remarkObsidianCallout from "remark-obsidian-callout";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [
    remarkMath, remarkObsidianCallout
    ],
    rehypePlugins: [
    katex
    ]
  },
  integrations: [tailwind(), icon(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // themes:{light:'github-light', dark:'github-dark'},
      theme: "material-theme-darker",
      defaultColor: false
    },
  }),],
});