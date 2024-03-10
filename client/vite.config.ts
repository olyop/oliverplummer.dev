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
		handler: (value: string): string => value.replaceAll(/{{ (.*?) }}/g, (match, p1) => variables[p1] ?? match),
	},
});

const determineContentSecurityPolicy = (mode: string) => {
	const isProduction = mode === "production";

	return contentSecurityPolicyBuilder({
		directives: {
			defaultSrc: ["'self'"],
			scriptSrc: [
				"'self'",
				"https://*.google.com",
				"https://*.gstatic.com",
				"https://*.googleapis.com",
				isProduction ? "" : "'unsafe-inline'",
			],
			styleSrc: ["'self'", isProduction ? "" : "'unsafe-inline'", " https://*.googleapis.com"],
			objectSrc: ["'none'"],
			connectSrc: ["'self'", "https://api.oliverplummer.com.au/contact-details"],
			fontSrc: ["'self'", "https://*.gstatic.com"],
			frameSrc: ["'self'", "https://*.google.com"],
			imgSrc: ["'self'", "data:"],
			manifestSrc: ["'none'"],
			mediaSrc: ["'none'"],
			workerSrc: ["'none'"],
		},
	});
};

export default defineConfig(async ({ mode }) => ({
	plugins: [
		reactSwc(),
		tsconfigPaths(),
		html({ "VITE_CONTENT_SECURITY_POLICY": determineContentSecurityPolicy(mode) }),
		imagetools(),
	],
	server: {
		https: {
			cert: await readFile("/home/op/.mkcert/localhost.pem"),
			key: await readFile("/home/op/.mkcert/localhost-key.pem"),
		},
	},
}));
