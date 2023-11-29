/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			"mono": ["Sono", "monospace"],
		},
		extend: {
			colors: {
				primary: "#2f5c3e",
				"primary-light": "#7a9c72",
				"primary-dark": "#04331c",
				"primary-black": "#041304",
				secondary: "#f1fdc1",
				"readytech": "#26d07c",
			},
			height: {
				"header-height": "5rem",
				"content-height": "calc(100vh - 5rem)",
			},
			width: {
				"booking-modal": "30rem",
			},
		},
	},
	plugins: [],
};
