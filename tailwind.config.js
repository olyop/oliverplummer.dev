/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			"mono": ["Sono", "monospace"],
		},
		extend: {
			colors: {
				"primary": "#1e293b",
				"primary-light": "#334155",
				"primary-dark": "#0f172a",
				"secondary": "#67e8f9",
				"secondary-light": "#a5f3fc",
				"secondary-dark": "#22d3ee",

				// other
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
