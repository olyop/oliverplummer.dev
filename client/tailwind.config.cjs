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
				"header": "5rem",
				"sidebar": "20rem",
			},
			height: {
				"header": "5rem",
			},
			margin: {
				"header": "5rem",
			},
			width: {
				"sidebar": "20rem",
			},
		},
	},
	plugins: [scrollbar({ noncompatible: false })],
};
