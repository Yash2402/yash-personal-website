/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      // Common
      Logo: "#0B7DA5",

      // Light Mode
      "LM-Theme-Toggler": "#000000",
      "LM-Background": "#EEEEEE",
      "LM-Secondary": "#dadada",
      "LM-Nav-Unselected": "#67A0B5",
      "LM-Nav-Selected": "#416572",
      "LM-Nav-Hover": "#007099",
      "LM-Title": "#000000",
      "LM-Para": "#585858",
      "LM-Title-Bar": "#D9D9D950",
      "LM-Link": "#0B7DA5",

      // Dark Mode
      "DM-Theme-Toggler": "#ffffff",
      "DM-Background": "#1B1B1B",
      "DM-Secondary": "#303030",
      "DM-Nav-Unselected": "#6DAAC0",
      "DM-Nav-Selected": "#89E1FF",
      "DM-Nav-Hover": "#0086B7",
      "DM-Title": "#FFFFFF",
      "DM-Para": "#c4c4c4",
      "DM-Title-Bar": "#262626",
      "DM-Link": "#85CDE6",
    },
    fontFamily: {
	    "title":'IBM Plex Sans Hebrew', /*"ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"*/
      "crumbs":'Comfortaa Variable',
      "para":"Newsreader Variable",
      "home":'Playfair Display Variable', /*"ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"*/
    },

    //   sans: [
    //     "IBM Plex Sans Hebrew",
    //     "ui-sans-serif",
    //     "system-ui",
    //     "sans-serif",
    //     "Apple Color Emoji",
    //     "Segoe UI Emoji",
    //     "Segoe UI Symbol",
    //     "Noto Color Emoji",
    //   ],
    //   serif: [
    //     "Playfiar Display Variable",
    //     "ui-serif",
    //     "Georgia",
    //     "Cambria",
    //     "Times New Roman",
    //     "Times",
    //     "serif",
    //   ],
    //   mono: [
    //     "JetBrains Mono Variable",
    //     "ui-monospace",
    //     "SFMono-Regular",
    //     "Menlo",
    //     "Monaco",
    //     "Consolas",
    //     "Liberation Mono",
    //     "Courier New",
    //     "monospace",
    //   ],
    // },
    extend: {
      spacing: {
        "6.5xl": "75rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
   ],
   darkMode: ['selector', '[data-theme="dark"]'],
};
