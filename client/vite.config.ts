import { readFile } from "node:fs/promises";

import reactSwc from "@vitejs/plugin-react-swc";
import contentSecurityPolicyBuilder from "content-security-policy-builder";
import { Plugin, defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import tsconfigPaths from "vite-tsconfig-paths";

const html = (variables: Record<string, string>): Plugin => ({
	name: "html-transform",
	transformIndexHtml: {
		order: "pre",
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		handler: (value: string): string =>
			value.replaceAll(/{{ (.*?) }}/g, (match, p1) => variables[p1] ?? match),
	},
});

const determineContentSecurityPolicy = (mode: string) => {
	const isProduction = mode === "production";

	return contentSecurityPolicyBuilder({
		directives: {
			"default-src": ["'self'"],
			"script-src": ["'self'", isProduction ? "" : "'unsafe-inline'"],
			"style-src": ["'self'", "'unsafe-inline'"],
			"font-src": ["'self'"],
			"connect-src": ["'self'"],
			"img-src": ["'self'"],
			"media-src": ["'self'"],
		},
	});
};

export default defineConfig(async ({ mode }) => ({
	plugins: [
		reactSwc(),
		tsconfigPaths(),
		html({ "VITE_CSP": determineContentSecurityPolicy(mode) }),
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
