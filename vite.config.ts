import { readFileSync } from "node:fs";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		imagetools(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: "eslint './src/**/*.{ts,tsx}'",
			},
		}),
	],
	server: {
		host: true,
		https: {
			cert: readFileSync("/home/op/.certificates/localhost.pem"),
			key: readFileSync("/home/op/.certificates/localhost-key.pem"),
		},
	},
});
