import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMath from 'remark-math';
import katex from "rehype-katex";
import remarkObsidianCallout from "remark-obsidian-callout";
// import Obsidian from 'remark-obsidian'

// https://astro.build/config
export default defineConfig({
// experimental: { viewTransitions: true, },
  output: "static",
  adapter: vercel(),
  integrations: [tailwind(), icon(), mdx({syntaxHighlight: 'shiki',
    shikiConfig: {
      // themes:{lightMode:'github-light', darkDM:'github-dark'},
      theme: "material-theme-darker",
      defaultColor: false
    },
    gfm: true,
    remarkPlugins: [
        remarkMath, remarkObsidianCallout
    ],
    rehypePlugins: [
      katex,
    ],})],
});
