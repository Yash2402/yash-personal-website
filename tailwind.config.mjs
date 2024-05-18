/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			// Common
			"Logo": "#0B7DA5",

			// Light Mode
			"LM-Background": "#EEEEEE",
			"LM-Nav-Unselected": "#67A0B5",
			"LM-Nav-Selected": "#568697",
			"LM-Nav-Hover": "#007099",
			"LM-Title": "#000000",
			"LM-Para": "#585858",
			"LM-Title-Bar": "#D9D9D950",



			// Dark Mode
			"DM-Background": "#1B1B1B",

		},
		extend: {
			spacing: {
				'6.5xl': '75rem',
			},
		},
	},
}