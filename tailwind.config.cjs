/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

/**
 * @type {import('tailwindcss').Config}
 * */
module.exports = {
	// eslint-disable-next-line @typescript-eslint/quotes
	darkMode: ["selector", '[data-theme="dark"]'],
	content: ["./src/**/*.{ts,tsx}"],
	plugins: [
		plugin(({ addVariant }) => {
			addVariant("page", "&:where([data-page='true'], [data-page='true'] *)");
			addVariant("sidebar", "&:where([data-sidebar='true'], [data-sidebar='true'] *)");
		}),
	],
	theme: {
		extend: {
			fontFamily: {
				"sans": ["var(--font-sans)"],
			},
			colors: {
				"background": "var(--background)",
				"elevated": "var(--elevated)",
				"elevated-hsla": "var(--elevated-hsla)",
				"elevated-hsla-low": "var(--elevated-hsla-low)",
				"hover": "var(--hover)",
				"primary": "var(--primary)",
				"primary-accent": "var(--primary-accent)",
			},
			borderColor: {
				"background": "var(--background)",
				"elevated": "var(--elevated)",
				"elevated-hsla": "var(--elevated-hsla)",
				"elevated-hsla-low": "var(--elevated-hsla-low)",
				"hover": "var(--hover)",
				"primary": "var(--primary)",
				"primary-accent": "var(--primary-accent)",
			},
			spacing: {
				"header": "var(--header-height)",
				"sidebar": "var(--sidebar-width)",
				"scrollbar": "var(--scrollbar-width)",
			},
			height: {
				"header": "var(--header-height)",
			},
			margin: {
				"header": "var(--header-height)",
				"scrollbar": "var(--scrollbar-width)",
			},
			width: {
				"sidebar": "var(--sidebar-width)",
			},
		},
	},
};
