/** @type {import('tailwindcss').Config} */


export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      // Light Mode
      "LM-Logo": "#0B7DA5",
      "LM-Theme-Toggler": "#000000",
      "LM-Background": "#EEEEEE",
      "LM-Secondary": "#dadada",
      "LM-Nav-Unselected": "#67A0B5",
      "LM-Nav-Selected": "#416572",
      "LM-Nav-Hover": "#007099",
      "LM-Title": "#000000",
      "LM-Para": "#585858",
      "LM-Title-Bar": "#E5E5E5",
      "LM-Link": "#0B7DA5",
      "LM-Card": "#DDDDDD23",

      // Dark Mode
      "DM-Logo": "#6DAAC0",
      "DM-Theme-Toggler": "#ffffff",
      "DM-Background": "#1B1B1B",
      "DM-Secondary": "#404040",
      "DM-Nav-Unselected": "#6DAAC0",
      "DM-Nav-Selected": "#89E1FF",
      "DM-Nav-Hover": "#0086B7",
      "DM-Title": "#FFFFFF",
      "DM-Para": "#c4c4c4",
      "DM-Title-Bar": "#262626",
      "DM-Link": "#85CDE6",
      "DM-Card": "#33333340",
    },
    fontFamily: {
	    "title":'IBM Plex Sans Hebrew', /*"ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"*/
      "crumbs":'Comfortaa Variable',
      "para":"Newsreader Variable",
      "home":'Playfair Display Variable', /*"ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"*/
    },

    extend: {
			spacing: {
				// '6.5xl': '75rem',
			},
			typography: (theme) => ({
				DEFALUT: {
					css:
					{
						// Colours
						'--tw-prose-body': theme('colors.LM-Para'),
						'--tw-prose-headings': theme('colors.LM-Title'),
						'--tw-prose-lead': theme('colors.LM-Title'),
						'--tw-prose-links': theme('colors.LM-Link'),
						'--tw-prose-bold': theme('colors.LM-Title'),
						'--tw-prose-counters': theme('colors.LM-Link'),
						'--tw-prose-bullets': theme('colors.LM-Link'),
						'--tw-prose-hr': theme('colors.LM-Title'),
						'--tw-prose-quotes': theme('colors.LM-Title'),
						'--tw-prose-quote-borders': theme('colors.LM-Title'),
						'--tw-prose-captions': theme('colors.LM-Title'),
						'--tw-prose-kbd': theme('colors.LM-Title'),
						'--tw-prose-kbd-shadows': theme('colors.LM-Title'),
						'--tw-prose-code': theme('colors.LM-Title'),
						'--tw-prose-pre-code': theme('colors.LM-Title'),
						'--tw-prose-pre-bg': theme('colors.LM-Title'),
						'--tw-prose-th-borders': theme('colors.LM-Title'),
						'--tw-prose-td-borders': theme('colors.LM-Title'),
						'--tw-prose-invert-body': theme('colors.DM-Para'),
						'--tw-prose-invert-headings': theme('colors.DM-Title'),
						'--tw-prose-invert-lead': theme('colors.DM-Title'),
						'--tw-prose-invert-links': theme('colors.DM-Link'),
						'--tw-prose-invert-bold': theme('colors.DM-Title'),
						'--tw-prose-invert-counters': theme('colors.DM-Link'),
						'--tw-prose-invert-bullets': theme('colors.DM-Link'),
						'--tw-prose-invert-hr': theme('colors.DM-Title'),
						'--tw-prose-invert-quotes': theme('colors.DM-Title'),
						'--tw-prose-invert-quote-borders': theme('colors.DM-Title'),
						'--tw-prose-invert-captions': theme('colors.DM-Title'),
						'--tw-prose-invert-kbd': theme('colors.DM-Title'),
						'--tw-prose-invert-kbd-shadows': theme('colors.DM-Title'),
						'--tw-prose-invert-code': theme('colors.DM-Title'),
						'--tw-prose-invert-pre-code': theme('colors.DM-Title'),
						'--tw-prose-invert-th-borders': theme('colors.DM-Title'),
						'--tw-prose-invert-td-borders': theme('colors.DM-Title'),
					}

				}
			}),
		},
  },
  plugins: [
    require('@tailwindcss/typography'),
   ],
   darkMode: ['selector', '[data-theme="dark"]'],
   
};
