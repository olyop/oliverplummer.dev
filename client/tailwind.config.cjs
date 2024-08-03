/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

module.exports = {
	// eslint-disable-next-line @typescript-eslint/quotes
	darkMode: ["selector", '[data-theme="dark"]'],
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"background": "var(--background)",
				"elevated": "var(--elevated)",
				"elevated-hsla": "var(--elevated-hsla)",
				"hover": "var(--hover)",
				"primary": "var(--primary)",
				"primary-accent": "var(--primary-accent)",
			},
			borderColor: {
				"background": "var(--background)",
				"elevated": "var(--elevated)",
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
