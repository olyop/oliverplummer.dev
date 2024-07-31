/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const scrollbar = require("tailwind-scrollbar");

module.exports = {
	darkMode: "selector",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
			},
			height: {
				"header": "var(--header-height)",
			},
			margin: {
				"header": "var(--header-height)",
			},
			width: {
				"sidebar": "var(--sidebar-width)",
			},
		},
	},
	plugins: [scrollbar({ noncompatible: true })],
};
