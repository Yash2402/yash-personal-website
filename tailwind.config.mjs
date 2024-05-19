/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			// Common
			"Logo": "#0B7DA5",
			

			// Light Mode
			"LM-Theme-Toggler": "#000000",
			"LM-Background": "#EEEEEE",
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
			"DM-Nav-Unselected": "#6DAAC0",
			"DM-Nav-Selected": "#89E1FF",
			"DM-Nav-Hover": "#0086B7",
			"DM-Title": "#FFFFFF",
			"DM-Para": "#E4E4E4",
			"DM-Title-Bar": "#262626",
			"DM-Link": "#85CDE6",

		},
		extend: {
			spacing: {
				'6.5xl': '75rem',
			},
		},
	},
	darkMode: 'class',
}