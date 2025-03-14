/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    colors: {
      // Light Mode
      "LM-Logo": "#0B7DA5",
      "LM-Theme-Toggler": "#000000",
      "LM-Background": "#eeeeee",
      "LM-Secondary": "#cccccc",
      "LM-Nav-Unselected": "#888888",
      "LM-Nav-Selected": "#2AA9B9",
      "LM-Title": "#000000",
      "LM-Para": "#585858",
      "LM-Title-Bar": "#E9E9E9",
      "LM-Link": "#0B7DA5",

      // Dark Mode
      "DM-Logo": "#6DAAC0",
      "DM-Theme-Toggler": "#EEEEEE",
      "DM-Background": "#1B1B1B",
      "DM-Secondary": "#444444",
      "DM-Nav-Unselected": "#666666",
      "DM-Nav-Selected": "#4CCBDB",
      "DM-Nav-Hover": "#0086B7",
      "DM-Title": "#FFFFFF",
      "DM-Para": "#c4c4c4",
      "DM-Title-Bar": "#1b1b1b",
      "DM-Link": "#4CCBDB",
    },
    fontFamily: {
      title:
        "/fonts/Satoshi-Variable.ttf" /*"ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"*/,
      crumbs: "Comfortaa Variable",
      para: "Newsreader Variable",
      home: "Playfair Display Variable" /*"ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"*/,
    },
    extend: {
      spacing: {
        // '6.5xl': '75rem',
      },
      typography: (theme) => ({
        DEFALUT: {
          css: {
            // Colours
            "--tw-prose-body": theme("colors.LM-Para"),
            "--tw-prose-lead": theme("colors.LM-Title"),
            "--tw-prose-headings": theme("colors.LM-Title"),
            "--tw-prose-links": theme("colors.LM-Link"),
            "--tw-prose-bold": theme("colors.LM-Title"),
            "--tw-prose-counters": theme("colors.LM-Para"),
            "--tw-prose-bullets": theme("colors.LM-Para"),
            "--tw-prose-hr": theme("colors.LM-Para"),
            "--tw-prose-quotes": theme("colors.LM-Title"),
            "--tw-prose-quote-borders": theme("colors.LM-Secondary"),
            "--tw-prose-captions": theme("colors.LM-Title"),
            "--tw-prose-kbd": theme("colors.LM-Title"),
            "--tw-prose-kbd-shadows": theme("colors.LM-Title"),
            "--tw-prose-code": theme("colors.LM-Title"),
            "--tw-prose-pre-code": theme("colors.LM-Title"),
            "--tw-prose-pre-bg": theme("colors.LM-Title"),
            "--tw-prose-th-borders": theme("colors.LM-Title"),
            "--tw-prose-td-borders": theme("colors.LM-Title"),
            "--tw-prose-invert-body": theme("colors.DM-Para"),
            "--tw-prose-invert-headings": theme("colors.DM-Title"),
            "--tw-prose-invert-lead": theme("colors.DM-Title"),
            "--tw-prose-invert-links": theme("colors.DM-Link"),
            "--tw-prose-invert-bold": theme("colors.DM-Title"),
            "--tw-prose-invert-counters": theme("colors.DM-Para"),
            "--tw-prose-invert-bullets": theme("colors.DM-Para"),
            "--tw-prose-invert-hr": theme("colors.DM-Para"),
            "--tw-prose-invert-quotes": theme("colors.DM-Title"),
            "--tw-prose-invert-quote-borders": theme("colors.DM-Title"),
            "--tw-prose-invert-captions": theme("colors.DM-Title"),
            "--tw-prose-invert-kbd": theme("colors.DM-Title"),
            "--tw-prose-invert-kbd-shadows": theme("colors.DM-Title"),
            "--tw-prose-invert-code": theme("colors.DM-Title"),
            "--tw-prose-invert-pre-code": theme("colors.DM-Title"),
            "--tw-prose-invert-th-borders": theme("colors.DM-Title"),
            "--tw-prose-invert-td-borders": theme("colors.DM-Title"),
          },
        },
      }),
    },
  },
  darkMode: ["selector", '[data-theme="dark"]'],
};
