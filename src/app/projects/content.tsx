import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import apolloServerFastifyLogo from "@/assets/projects/apollo-server-fastify/logo.png";
import directoryToSpotifyLogo from "@/assets/projects/directory-to-spotify/logo.png";
import directoryToSpotifyScreenShotOneLogo from "@/assets/projects/directory-to-spotify/screenshot-1.png";
import directoryToSpotifyScreenShotTwoLogo from "@/assets/projects/directory-to-spotify/screenshot-2.png";
import directoryToSpotifyScreenShotThreeLogo from "@/assets/projects/directory-to-spotify/screenshot-3.png";
import directoryToSpotifyScreenShotFourLogo from "@/assets/projects/directory-to-spotify/screenshot-4.png";
import directoryToSpotifyScreenShotFiveLogo from "@/assets/projects/directory-to-spotify/screenshot-5.png";
import directoryToSpotifyScreenShotSixLogo from "@/assets/projects/directory-to-spotify/screenshot-6.png";
import goWarriorsLogo from "@/assets/projects/go-warriors/logo.webp";
import goWarriorsScreenShotOneLogo from "@/assets/projects/go-warriors/screenshot-1.png";
import goWarriorsScreenShotTwoLogo from "@/assets/projects/go-warriors/screenshot-2.png";
import goWarriorsScreenShotThreeLogo from "@/assets/projects/go-warriors/screenshot-3.png";
import goWarriorsScreenShotFourLogo from "@/assets/projects/go-warriors/screenshot-4.png";
import xtremeHipHopLogo from "@/assets/projects/xtremehiphop/logo.png";
import xtremeHipHopScreenShotOneLogo from "@/assets/projects/xtremehiphop/screenshot-1.png";
import xtremeHipHopScreenShotTwoLogo from "@/assets/projects/xtremehiphop/screenshot-2.png";
import xtremeHipHopScreenShotThreeLogo from "@/assets/projects/xtremehiphop/screenshot-3.png";
import xtremeHipHopScreenShotFourLogo from "@/assets/projects/xtremehiphop/screenshot-4.png";
import xtremeHipHopScreenShotFiveLogo from "@/assets/projects/xtremehiphop/screenshot-5.png";
import apolloGraphQLLogo from "@/assets/skills/back-end/apollo-graphql.png";
import fastifyLogo from "@/assets/skills/back-end/fastify.png";
import goLogo from "@/assets/skills/back-end/go.png";
import graphqlLogo from "@/assets/skills/back-end/graphql.png";
import javaLogo from "@/assets/skills/back-end/java.png";
import nextDarkLogo from "@/assets/skills/back-end/next-js-dark.png";
import nextLogo from "@/assets/skills/back-end/next-js.png";
import nodeLogo from "@/assets/skills/back-end/node.png";
import springLogo from "@/assets/skills/back-end/spring.png";
import tomcatLogo from "@/assets/skills/back-end/tomcat.png";
import auth0Logo from "@/assets/skills/cloud/auth0.png";
import azureLogo from "@/assets/skills/cloud/azure.png";
import lambdaLogo from "@/assets/skills/cloud/lambda.png";
import stripeLogo from "@/assets/skills/cloud/stripe.png";
import postgresqlLogo from "@/assets/skills/database/postgresql.png";
import sqlServerLogo from "@/assets/skills/database/sql-server.png";
import octopusDeployLogo from "@/assets/skills/dev-ops/octopus-deploy.png";
import powershellLogo from "@/assets/skills/dev-ops/powershell.png";
import viteLogo from "@/assets/skills/dev-ops/vite.png";
import reactLogo from "@/assets/skills/front-end/react.png";
import tailwindLogo from "@/assets/skills/front-end/tailwind.png";
import typescriptLogo from "@/assets/skills/front-end/typescript.png";
import vueLogo from "@/assets/skills/front-end/vue.png";
import webWorkerDarkLogo from "@/assets/skills/front-end/web-worker-dark.png";
import webWorkerLogo from "@/assets/skills/front-end/web-worker.png";
import { removeNewLines } from "@/helpers";

import { Project } from "./types";

export const projects: Project[] = [
	{
		code: "readycase",
		label: "Ready Case",
		text: "Modular platform for managing, reporting, and processing judicial cases. Used by courts, commissioners, and tribunals.",
		image: className => <BuildingLibraryIcon className={className} />,
		url: "https://www.readytech.com.au/what-we-do/justice/products/ready-case/",
		sourceCodeUrl: null,
		screencasts: [],
		screenshots: [],
		description: removeNewLines`
			Working at Ready Tech, I was a key contributor to their flagship legal case management software, used by UK and Australian courts.
			Developed new features and maintained code on both the front-end and back-end. Optimized database performance.
			Rolled out CI/CD tooling and contributed to improving
			quality and to maintenance releases. 
		`,
		features: null,
		technologies: [
			{
				code: "java",
				label: "Java",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Java logo"
						src={javaLogo}
					/>
				),
			},
			{
				code: "tomcat",
				label: "Apache Tomcat",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Tomcat logo"
						src={tomcatLogo}
					/>
				),
			},
			{
				code: "vue",
				label: "Vue.js",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Vue.js logo"
						src={vueLogo}
					/>
				),
			},
			{
				code: "azure",
				label: "Azure",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Azure logo"
						src={azureLogo}
					/>
				),
			},
			{
				code: "sql-server",
				label: "SQL Server",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="SQL Server logo"
						src={sqlServerLogo}
					/>
				),
			},
			{
				code: "powershell",
				label: "PowerShell",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="PowerShell logo"
						src={powershellLogo}
					/>
				),
			},
			{
				code: "octopus-deploy",
				label: "Octopus Deploy",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Octopus Deploy logo"
						src={octopusDeployLogo}
					/>
				),
			},
		],
	},
	{
		code: "xtremehiphop",
		label: "Xtreme Hip-Hop",
		text: "An application for booking gym classes and buying merchandise.",
		image: className => (
			<Image
				width={40}
				height={40}
				className={className}
				alt="Xtreme Hip-Hop logo"
				src={xtremeHipHopLogo}
			/>
		),
		url: "https://xtremehiphopwithtash.com",
		sourceCodeUrl: "https://github.com/olyop/xtremehiphopwithtash",
		screencasts: [],
		screenshots: [
			className => (
				<Image
					width={1438}
					className={className}
					alt="Xtreme Hip-Hop screenshot one"
					src={xtremeHipHopScreenShotOneLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Xtreme Hip-Hop screenshot two"
					src={xtremeHipHopScreenShotTwoLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Xtreme Hip-Hop screenshot three"
					src={xtremeHipHopScreenShotThreeLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Xtreme Hip-Hop screenshot four"
					src={xtremeHipHopScreenShotFourLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Xtreme Hip-Hop screenshot five"
					src={xtremeHipHopScreenShotFiveLogo}
				/>
			),
		],
		description: removeNewLines`
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
				code: "react-js",
				label: "React.js",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="React.js logo"
						src={reactLogo}
					/>
				),
			},
			{
				code: "typescript",
				label: "TypeScript",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="TypeScript logo"
						src={typescriptLogo}
					/>
				),
			},
			{
				code: "tailwind-css",
				label: "TailwindCSS",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="TailwindCSS logo"
						src={tailwindLogo}
					/>
				),
			},
			{
				code: "vite",
				label: "Vite",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Vite logo"
						src={viteLogo}
					/>
				),
			},
			{
				code: "graphql",
				label: "GraphQL",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="GraphQL logo"
						src={graphqlLogo}
					/>
				),
			},
			{
				code: "java",
				label: "Java",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Java logo"
						src={javaLogo}
					/>
				),
			},
			{
				code: "spring",
				label: "Spring Boot",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Spring logo"
						src={springLogo}
					/>
				),
			},
			{
				code: "postgresql",
				label: "PostgreSQL",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="PostgreSQL logo"
						src={postgresqlLogo}
					/>
				),
			},
			{
				code: "auth0",
				label: "Auth0",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Auth0 logo"
						src={auth0Logo}
					/>
				),
			},
			{
				code: "stripe",
				label: "Stripe",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Stripe logo"
						src={stripeLogo}
					/>
				),
			},
			{
				code: "lambda",
				label: "AWS Lambda",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Lambda logo"
						src={lambdaLogo}
					/>
				),
			},
		],
	},

	{
		code: "go-warriors",
		label: "Go Warriors",
		text: "An application for viewing NBA games and statistics.",
		image: className => (
			<Image
				width={40}
				height={40}
				className={className}
				alt="Go Warriors logo"
				src={goWarriorsLogo}
			/>
		),
		description: removeNewLines`
			I developed this application to learn new web technologies Next.js App Router and Go as a backend API.
			The front end is written in React Server Components (RSC) and I really tried to write the code for the
			application in the 'App Router' way so I could understand how this technology works and the pros & cons
			of this approach. I also really wanted to learn Go and to see what it was like writing a HTTP API in Go.  
			`,
		url: "https://go-warriors.vercel.app/",
		sourceCodeUrl: "https://github.com/olyop/go-warriors",
		screencasts: [],
		screenshots: [
			className => (
				<Image
					width={1438}
					className={className}
					alt="Go Warriors screenshot one"
					src={goWarriorsScreenShotOneLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Go Warriors screenshot two"
					src={goWarriorsScreenShotTwoLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Go Warriors screenshot three"
					src={goWarriorsScreenShotThreeLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Go Warriors screenshot four"
					src={goWarriorsScreenShotFourLogo}
				/>
			),
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
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Next.js logo"
						src={nextLogo}
					/>
				),
				imageDark: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Next.js logo"
						src={nextDarkLogo}
					/>
				),
			},
			{
				code: "react-js",
				label: "React.js",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="React.js logo"
						src={reactLogo}
					/>
				),
			},
			{
				code: "typescript",
				label: "TypeScript",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="TypeScript logo"
						src={typescriptLogo}
					/>
				),
			},
			{
				code: "tailwind-css",
				label: "TailwindCSS",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="TailwindCSS logo"
						src={tailwindLogo}
					/>
				),
			},
			{
				code: "vite",
				label: "Vite",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Vite logo"
						src={viteLogo}
					/>
				),
			},
			{
				code: "go",
				label: "Go",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Go logo"
						src={goLogo}
					/>
				),
			},
			{
				code: "lambda",
				label: "AWS Lambda",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="AWS Lambda logo"
						src={lambdaLogo}
					/>
				),
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
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Web Worker logo"
						src={webWorkerLogo}
					/>
				),
				imageDark: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Web Worker logo"
						src={webWorkerDarkLogo}
					/>
				),
			},
			{
				code: "react-js",
				label: "React.js",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="React.js logo"
						src={reactLogo}
					/>
				),
			},
			{
				code: "typescript",
				label: "TypeScript",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="TypeScript logo"
						src={typescriptLogo}
					/>
				),
			},
			{
				code: "tailwind-css",
				label: "TailwindCSS",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="TailwindCSS logo"
						src={tailwindLogo}
					/>
				),
			},
			{
				code: "vite",
				label: "Vite",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Vite logo"
						src={viteLogo}
					/>
				),
			},
		],
		image: className => (
			<Image
				width={40}
				height={40}
				className={className}
				alt="Directory to Spotify logo"
				src={directoryToSpotifyLogo}
			/>
		),
		screencasts: ["/directory-to-spotify.webm"],
		screenshots: [
			className => (
				<Image
					width={1438}
					className={className}
					alt="Directory to Spotify screenshot one"
					src={directoryToSpotifyScreenShotOneLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Directory to Spotify screenshot two"
					src={directoryToSpotifyScreenShotTwoLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Directory to Spotify screenshot three"
					src={directoryToSpotifyScreenShotThreeLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Directory to Spotify screenshot four"
					src={directoryToSpotifyScreenShotFourLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Directory to Spotify screenshot five"
					src={directoryToSpotifyScreenShotFiveLogo}
				/>
			),
			className => (
				<Image
					width={1438}
					className={className}
					alt="Directory to Spotify screenshot six"
					src={directoryToSpotifyScreenShotSixLogo}
				/>
			),
		],
		sourceCodeUrl: "https://github.com/olyop/directory-to-spotify",
		text: "A web application that allows users to scan a directory of music files and add them to their liked songs or playlists on Spotify.",
		url: "https://directorytospotify.com/",
		description: removeNewLines`
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
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Node.js logo"
						src={nodeLogo}
					/>
				),
			},
			{
				code: "graphql",
				label: "GraphQL",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="GraphQL logo"
						src={graphqlLogo}
					/>
				),
			},
			{
				code: "fastify",
				label: "Fastify",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Fastify logo"
						src={fastifyLogo}
					/>
				),
			},
			{
				code: "apollo-graphql",
				label: "Apollo",
				image: className => (
					<Image
						width={16}
						height={16}
						className={className}
						alt="Apollo GraphQL logo"
						src={apolloGraphQLLogo}
					/>
				),
			},
		],
		image: className => (
			<Image
				width={40}
				height={40}
				className={className}
				alt="Apollo Server Fastify logo"
				src={apolloServerFastifyLogo}
			/>
		),
		screencasts: [],
		screenshots: [],
		sourceCodeUrl:
			"https://github.com/apollo-server-integrations/apollo-server-integration-fastify",
		url: "https://www.npmjs.com/package/@as-integrations/fastify",
		description: removeNewLines`
			A while back I built a simple service layer in between Node.js and Apollo Server. The package 
			translates an incoming request to an internal GraphQL query then returns the JSON with 
			streaming. After I built the package I contacted the Apollo foundation and they added it to 
			their official integrations list. Currently it gets nearly 50,000 weekly downloads
			`,
	},
];

export const isProjectCodeValid = (value: string) =>
	projects.some(({ code }) => code === value);
