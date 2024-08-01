import apolloServerFastifyLogoPath from "assets/projects/apollo-server-fastify/logo.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import directoryToSpotifyLogoPath from "assets/projects/directory-to-spotify/logo.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import directoryToSpotifyScreenCastOne from "assets/projects/directory-to-spotify/screencast-1.webm";
import directoryToSpotifyScreenShotOneLogoPath from "assets/projects/directory-to-spotify/screenshot-1.png";
import directoryToSpotifyScreenShotTwoLogoPath from "assets/projects/directory-to-spotify/screenshot-2.png";
import directoryToSpotifyScreenShotThreeLogoPath from "assets/projects/directory-to-spotify/screenshot-3.png";
import directoryToSpotifyScreenShotFourLogoPath from "assets/projects/directory-to-spotify/screenshot-4.png";
import directoryToSpotifyScreenShotFiveLogoPath from "assets/projects/directory-to-spotify/screenshot-5.png";
import directoryToSpotifyScreenShotSixLogoPath from "assets/projects/directory-to-spotify/screenshot-6.png";
import goWarriorsLogoPath from "assets/projects/go-warriors/logo.webp?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import goWarriorsScreenShotOneLogoPath from "assets/projects/go-warriors/screenshot-1.png";
import goWarriorsScreenShotTwoLogoPath from "assets/projects/go-warriors/screenshot-2.png";
import goWarriorsScreenShotThreeLogoPath from "assets/projects/go-warriors/screenshot-3.png";
import goWarriorsScreenShotFourLogoPath from "assets/projects/go-warriors/screenshot-4.png";
import xtremeHipHopLogoPath from "assets/projects/xtremehiphop/logo.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import xtremeHipHopScreenShotOneLogoPath from "assets/projects/xtremehiphop/screenshot-1.png";
import xtremeHipHopScreenShotTwoLogoPath from "assets/projects/xtremehiphop/screenshot-2.png";
import xtremeHipHopScreenShotFourLogoPath from "assets/projects/xtremehiphop/screenshot-4.png";
import xtremeHipHopScreenShotFiveLogoPath from "assets/projects/xtremehiphop/screenshot-5.png";
import xtremeHipHopScreenShotSixLogoPath from "assets/projects/xtremehiphop/screenshot-6.png";
import apolloGraphQLImagePath from "assets/skills/back-end/apollo-graphql.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import fastifyImagePath from "assets/skills/back-end/fastify.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import goImagePath from "assets/skills/back-end/go.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import graphqlImagePath from "assets/skills/back-end/graphql.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import javaImagePath from "assets/skills/back-end/java.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import nextImagePath from "assets/skills/back-end/next-js.svg?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import nodeImagePath from "assets/skills/back-end/node.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import springImagePath from "assets/skills/back-end/spring.svg?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import auth0ImagePath from "assets/skills/cloud/auth0.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import lambdaImagePath from "assets/skills/cloud/lambda.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import stripeImagePath from "assets/skills/cloud/stripe.svg?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import postgresqlImagePath from "assets/skills/database/postgresql.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import viteImagePath from "assets/skills/dev-ops/vite.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import reactImagePath from "assets/skills/front-end/react.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import tailwindImagePath from "assets/skills/front-end/tailwind.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import typescriptImagePath from "assets/skills/front-end/typescript.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import webWorkerImagePath from "assets/skills/front-end/web-worker.webp?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";

import { Project } from "./types";

export const projects: Project[] = [
	{
		code: "xtremehiphop",
		label: "Xtreme Hip-Hop",
		text: "An application for booking gym classes and buying merchandise.",
		image: xtremeHipHopLogoPath,
		url: "https://xtremehiphopwithtash.com",
		sourceCodeUrl: "https://github.com/olyop/xtremehiphopwithtash",
		screencasts: [],
		screenshots: [
			xtremeHipHopScreenShotOneLogoPath,
			xtremeHipHopScreenShotTwoLogoPath,
			xtremeHipHopScreenShotFourLogoPath,
			xtremeHipHopScreenShotFiveLogoPath,
			xtremeHipHopScreenShotSixLogoPath,
		],
		description: `
			Xtreme Hip-Hop with Tash is a web application that allows people to book classes by browsing a schedule,
			buy merchandise in a interactive single-page style web application.
			I built the system from the ground up across the stack with only  delegating authentication to Auth0.
			Over 200 users booking classes with an efficient payment system using Stripe. 
		`,
		features: [
			"Browse classes using a calendar",
			"Book and pay for classes card or cash",
			"Merchandise store",
			"Admin dashboard",
			"Responsive mobile-first design",
			"Progessive Web App (PWA) support",
			"Account management dashboard",
			"Refunds and cancellations",
			"Spam protected using Google reCAPTCHA",
			"Seamless account setup with Auth0 integration",
			"Stripe integration",
		],
		technologies: [
			{
				code: "next-js",
				label: "Next.js",
				image: nextImagePath,
			},
			{
				code: "react-js",
				label: "React.js",
				image: reactImagePath,
			},
			{
				code: "typescript",
				label: "TypeScript",
				image: typescriptImagePath,
			},
			{
				code: "tailwind-css",
				label: "TailwindCSS",
				image: tailwindImagePath,
			},
			{
				code: "vite",
				label: "Vite",
				image: viteImagePath,
			},
			{
				code: "graphql",
				label: "GraphQL",
				image: graphqlImagePath,
			},
			{
				code: "java",
				label: "Java",
				image: javaImagePath,
			},
			{
				code: "spring",
				label: "Spring Boot",
				image: springImagePath,
			},
			{
				code: "postgresql",
				label: "PostgreSQL",
				image: postgresqlImagePath,
			},
			{
				code: "auth0",
				label: "Auth0",
				image: auth0ImagePath,
			},
			{
				code: "stripe",
				label: "Stripe",
				image: stripeImagePath,
			},
			{
				code: "lambda",
				label: "AWS Lambda",
				image: lambdaImagePath,
			},
		],
	},

	{
		code: "go-warriors",
		label: "Go Warriors",
		text: "An application for viewing NBA games and statistics.",
		image: goWarriorsLogoPath,
		description: `
			I developed this application to learn new web technologies Next.js App Router and Go as a backend API.
			The front end is written in React Server Components (RSC) and I really tried to write the code for the
			application in the 'App Router' way so I could understand how this technology works and the pros & cons
			of this approach. I also really wanted to learn Go and to see what it was like writing a HTTP API in Go.  
		`,
		url: "https://go-warriors.vercel.app/",
		sourceCodeUrl: "https://github.com/olyop/go-warriors",
		screencasts: [],
		screenshots: [
			goWarriorsScreenShotOneLogoPath,
			goWarriorsScreenShotTwoLogoPath,
			goWarriorsScreenShotThreeLogoPath,
			goWarriorsScreenShotFourLogoPath,
		],
		features: [
			"View NBA games and statistics",
			"View NBA player statistics",
			"View NBA team statistics",
			"View NBA game statistics",
			"Dark mode",
			"Responsive mobile-first design",
			"Server-side rendering",
			"Caching at the page level using RSC",
			"Super fast API written in Go",
		],
		technologies: [
			{
				code: "next-js",
				label: "Next.js",
				image: nextImagePath,
			},
			{
				code: "react-js",
				label: "React.js",
				image: reactImagePath,
			},
			{
				code: "typescript",
				label: "TypeScript",
				image: typescriptImagePath,
			},
			{
				code: "tailwind-css",
				label: "TailwindCSS",
				image: tailwindImagePath,
			},
			{
				code: "vite",
				label: "Vite",
				image: viteImagePath,
			},
			{
				code: "go",
				label: "Go",
				image: goImagePath,
			},
			{
				code: "lambda",
				label: "AWS Lambda",
				image: lambdaImagePath,
			},
		],
	},
	{
		code: "directorytospotify",
		label: "Directory to Spotify",
		features: [
			"Scan a directory of music files.",
			"Add songs to liked songs or playlists on Spotify with the click of a button.",
			"Preview songs before adding them.",
			"Visualize the scanning process.",
			"100% client-side, no server required.",
			"Responsive mobile-first design.",
			"Dark mode.",
		],
		technologies: [
			{
				code: "web-worker",
				label: "Web Worker",
				image: webWorkerImagePath,
			},
			{
				code: "react-js",
				label: "React.js",
				image: reactImagePath,
			},
			{
				code: "typescript",
				label: "TypeScript",
				image: typescriptImagePath,
			},
			{
				code: "tailwind-css",
				label: "TailwindCSS",
				image: tailwindImagePath,
			},
			{
				code: "vite",
				label: "Vite",
				image: viteImagePath,
			},
		],
		image: directoryToSpotifyLogoPath,
		screencasts: [directoryToSpotifyScreenCastOne],
		screenshots: [
			directoryToSpotifyScreenShotOneLogoPath,
			directoryToSpotifyScreenShotTwoLogoPath,
			directoryToSpotifyScreenShotThreeLogoPath,
			directoryToSpotifyScreenShotFourLogoPath,
			directoryToSpotifyScreenShotFiveLogoPath,
			directoryToSpotifyScreenShotSixLogoPath,
		],
		sourceCodeUrl: "https://github.com/olyop/directory-to-spotify",
		text: "A web application that allows users to scan a directory of music files and add them to their liked songs or playlists on Spotify.",
		url: "https://directorytospotify.com/",
		description: `
			I developed this web application as a personal project to learn about various new web technologies.

			One of the main challenges was to scan a directory of music files and extract metadata from them.
			I used web workers to offload the scanning process from the main thread to prevent the UI from freezing.
			
			To match the songs I had to normalize the metadata text and the search results. I then used a fuzzy search algorithm to find the best match.
			Exact matches are chosen first, then matches with the same artist, then matches with the same album, and finally matches with the same title.
			Every match is ranked from a match score from 0 to 1 to further refine the results.

			This application is 100% client-side and does not require a server to run.
			It uses the Spotify Web API to add songs to the user's library and playlists.
		`,
	},
	{
		code: "apollo-server-fastify",
		label: "Apollo Server Fastify",
		features: [],
		text: "This is a simple package that easily allows you to connect your own Fastify server implementation to an Apollo Server instance.",
		technologies: [
			{
				code: "node-js",
				label: "Node.js",
				image: nodeImagePath,
			},
			{
				code: "graphql",
				label: "GraphQL",
				image: graphqlImagePath,
			},
			{
				code: "fastify",
				label: "Fastify",
				image: fastifyImagePath,
			},
			{
				code: "apollo-graphql",
				label: "Apollo",
				image: apolloGraphQLImagePath,
			},
		],
		image: apolloServerFastifyLogoPath,
		screencasts: [],
		screenshots: [],
		sourceCodeUrl:
			"https://github.com/apollo-server-integrations/apollo-server-integration-fastify",
		url: "https://www.npmjs.com/package/@as-integrations/fastify",
		description: `
			A while back I built a simple service layer in between Node.js and Apollo Server. The package 
			translates an incoming request to an internal GraphQL query then returns the JSON with 
			streaming. After I built the package I contacted the Apollo foundation and they added it to 
			their official integrations list. Currently it gets nearly 50,000 weekly downloads
		`,
	},
];

export const isProjectCodeValid = (value: string) =>
	projects.some(({ code }) => code === value);
