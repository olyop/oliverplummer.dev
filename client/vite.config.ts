import { readFile } from "node:fs/promises";

import reactSwc from "@vitejs/plugin-react-swc";
import contentSecurityPolicyBuilder from "content-security-policy-builder";
import { Plugin, defineConfig, loadEnv } from "vite";
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

const determineContentSecurityPolicy = (mode: string, environment: ReturnType<typeof loadEnv>) => {
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
			connectSrc: ["'self'", environment["VITE_GET_CONTACT_DETAILS_URL"]],
			fontSrc: ["'self'", "https://*.gstatic.com"],
			frameSrc: ["'self'", "https://*.google.com"],
			imgSrc: ["'self'", "data:"],
			manifestSrc: ["'none'"],
			mediaSrc: ["'none'"],
			workerSrc: ["'none'"],
		},
	});
};

export default defineConfig(async ({ mode }) => {
	const environment = loadEnv(mode, process.cwd(), "");
	return {
		plugins: [
			reactSwc(),
			tsconfigPaths(),
			html({ ...environment, "VITE_CONTENT_SECURITY_POLICY": determineContentSecurityPolicy(mode, environment) }),
			imagetools(),
		],
		server: {
			host: true,
			https: {
				cert: await readFile("/home/op/.certificates/localhost.pem"),
				key: await readFile("/home/op/.certificates/localhost-key.pem"),
			},
		},
	};
});
