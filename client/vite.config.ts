import { readFile } from "node:fs/promises";

import reactSwc from "@vitejs/plugin-react-swc";
import contentSecurityPolicyBuilder from "content-security-policy-builder";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { createHtmlPlugin } from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";

const configuration = defineConfig(async ({ mode }) => ({
	plugins: [
		reactSwc(),
		tsconfigPaths(),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					contentSecurityPolicy: determineContentSecurityPolicy(mode),
				},
			},
		}),
		imagetools(),
	],
	server: {
		host: true,
		https: {
			cert: await readFile("/home/op/.mkcert/localhost.pem"),
			key: await readFile("/home/op/.mkcert/localhost-key.pem"),
		},
	},
}));

function determineContentSecurityPolicy(mode: string) {
	const isProduction = mode === "production";

	return contentSecurityPolicyBuilder({
		directives: {
			"default-src": ["'self'"],
			"script-src": ["'self'", isProduction ? "" : "'unsafe-inline'"],
			"style-src": ["'self'", "'unsafe-inline'"],
			"font-src": ["'self'"],
			"connect-src": ["'self'"],
			"img-src": ["'self'", "data:"],
			"media-src": ["'self'"],
		},
	});
}

export default configuration;
