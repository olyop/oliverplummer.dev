/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const scrollbar = require("tailwind-scrollbar");

module.exports = {
	darkMode: "selector",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"background": "#ecfccb",
				"background-dark": "#1c1917",
				"elevated": "#f7fee7",
				"elevated-dark": "#292524",
				"hover": "#d9f99d",
				"hover-dark": "#431407",
				"primary": "#bef264",
				"primary-dark": "#9a3412",
				"primary-accent": "#65a30d",
				"primary-accent-dark": "#ea580c",
			},
			textColor: {
				"text": "#1a2e05",
				"text-dark": "#ffedd5",
			},
			borderColor: {
				"hover": "#d9f99d",
				"hover-dark": "#431407",
				"primary": "#bef264",
				"primary-dark": "#9a3412",
				"primary-accent": "#65a30d",
				"primary-accent-dark": "#ea580c",
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
