import { CircleStackIcon, CloudIcon, CodeBracketIcon, CommandLineIcon, ServerIcon } from "@heroicons/react/20/solid";
import auth0ImagePath from "assets/skills/cloud/auth0.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import awsImagePath from "assets/skills/cloud/aws.jpg?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import azureImagePath from "assets/skills/cloud/azure.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import stripeImagePath from "assets/skills/cloud/stripe.svg?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import postgresqlImagePath from "assets/skills/database/postgresql.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import redisImagePath from "assets/skills/database/redis.svg?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import sqlServerImagePath from "assets/skills/database/sql-server.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import bashImagePath from "assets/skills/dev-ops/bash.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import dockerImagePath from "assets/skills/dev-ops/docker.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import eslintImagePath from "assets/skills/dev-ops/eslint.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import gitImagePath from "assets/skills/dev-ops/git.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import linuxImagePath from "assets/skills/dev-ops/linux.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import octopusDeployImagePath from "assets/skills/dev-ops/octopus-deploy.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import powershellImagePath from "assets/skills/dev-ops/powershell.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import prettierImagePath from "assets/skills/dev-ops/prettier.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import stylelintImagePath from "assets/skills/dev-ops/stylelint.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import svnImagePath from "assets/skills/dev-ops/svn.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import viteImagePath from "assets/skills/dev-ops/vite.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import windowsImagePath from "assets/skills/dev-ops/windows.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import css3ImagePath from "assets/skills/front-end/css3.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import html5ImagePath from "assets/skills/front-end/html5.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import javascriptImagePath from "assets/skills/front-end/javascript.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import reactImagePath from "assets/skills/front-end/react.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import reduxImagePath from "assets/skills/front-end/redux.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import typescriptImagePath from "assets/skills/front-end/typescript.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import vueImagePath from "assets/skills/front-end/vue.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import workboxImagePath from "assets/skills/front-end/workbox.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import javaImagePath from "assets/skills/java/java.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import springImagePath from "assets/skills/java/spring.svg?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import tomcatImagePath from "assets/skills/java/tomcat.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import fastifyImagePath from "assets/skills/node-js/fastify.jpg?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import nextjsImagePath from "assets/skills/node-js/next-js.svg?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import nodeImagePath from "assets/skills/node-js/node.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";

import { SkillCategory } from "./types";

const skillCategories: SkillCategory[] = [
	{
		label: "Front End",
		image: className => <CodeBracketIcon className={className} />,
		skills: [
			{
				label: "HTML5",
				image: html5ImagePath,
				level: 5,
				description: `
					I am very experienced in writing HTML knowledgeable in all areas of the language.
					I use semantic elements and always follow HTML best practices.
				`,
			},
			{
				label: "CSS3",
				image: css3ImagePath,
				level: 5,
				description: `
					I am very experienced in writing CSS. I stay up to date with the latest CSS features and syntax and seek
					to follow best practices and write clean and maintainable CSS.
					I am familiar with using CSS preprocessors such as Sass and Less.
					I have used CSS modules and CSS-in-JS solutions such as Emotion and Styled Components.
					Currently I am using Tailwind CSS in most of my projects mostly for it's developer experience.
				`,
			},
			{
				label: "JavaScript",
				image: javascriptImagePath,
				level: 5,
				description: `
					Very familiar with JavaScript and all of it's concepts.
					This ranges from a deep understanding of how the language works in both the browser and server-side environments.
					I always make use of modern syntax and new features of the language.
					Extensive knowledge of the DOM and how to manipulate it and also how to use the browser APIs.
				`,
			},
			{
				label: "TypeScript",
				image: typescriptImagePath,
				level: 5,
				description: `
					Use TypeScript in all of my projects where JavaScript is used.
					Always in strict mode with most checking flags enabled to take full advantage of the added type safety.
					This helps me catch type errors in development before runtime!
					I am very familiar with creating types and using them throughout a codebase using many different techniques.
				`,
			},
			{
				label: "React",
				image: reactImagePath,
				level: 5,
				description: `
					I am very familiar with React and have used it in many projects.
					My knowledge ranges from single-page applications, static sites, to server-side rendered applications.
					Most projects I have worked on have used React with TypeScript.
					When writing React components I aim to make them functional, re-usable, and composable components whenever possible.
					I strictly use hooks and follow the current standard React conventions.
				`,
			},
			{
				label: "Redux",
				image: reduxImagePath,
				level: 4,
				description: `
					Have used Redux in many projects.
					I am familiar with the core concepts of Redux and how to use it in a React application.
					I have also used Redux with TypeScript and mostly use Redux Toolkit nowdays.
				`,
			},
			{
				label: "WorkBox",
				image: workboxImagePath,
				level: 3,
				description: `
					I have used WorkBox to create service workers for a few projects.
					I am familiar with the core concepts of WorkBox and how to use it to create a service worker that will power a single
					page application in offline mode and cache static assets.
				`,
			},
			{
				label: "Vue",
				image: vueImagePath,
				level: 3,
				description: "Test small description",
			},
		],
	},
	{
		label: "Back End",
		image: className => <ServerIcon className={className} />,
		skills: [
			{
				label: "Node.js",
				image: nodeImagePath,
				level: 3,
				description: `
					Have used Node.js in many of my personal projects to create RESTful APIs and GraphQL APIs.
					Usually either one of the frameworks Express.js, Fastify.js, or Apollo Server.
					Have a good understanding of the event loop and how to write non-blocking code.
					I am also familiar with Streams, Buffers, Promises, and the fetch API.
				`,
			},
			{
				label: "Fastify/Express",
				image: fastifyImagePath,
				level: 4,
				description: `
					Have used both Fastify and Express to create RESTful APIs and GraphQL APIs.
					I am very familiar with creating routes, middleware, and handling requests and responses in both.
					I have also used these frameworks to serve static files and render React applications.
				`,
			},
			{
				label: "Next.js",
				image: nextjsImagePath,
				level: 2,
				description: "",
			},
			{
				label: "Java",
				image: javaImagePath,
				level: 4,
				description: "",
			},
			{
				label: "Spring",
				image: springImagePath,
				level: 3,
				description: "",
			},
			{
				label: "Tomcat",
				image: tomcatImagePath,
				level: 5,
				description: "",
			},
		],
	},
	{
		label: "Cloud",
		image: className => <CloudIcon className={className} />,
		skills: [
			{
				label: "AWS",
				image: awsImagePath,
				level: 3,
				description: `
					I have used AWS to create a few projects.
					I am familiar with the core concepts of AWS and how to use it to launch and manage servers.
					EC2, RDS, S3, CloudFront, Route 53, Virtual Private Cloud, and IAM are some of the services I have used.
					This is a skill I am actively working on improving just need to be exposed to more of the services and use them in projects.
				`,
			},
			{
				label: "Azure",
				image: azureImagePath,
				level: 2,
				description: `
					I have a brief understanding of Azure and how to use it to launch and manage servers. Only used it at one job for basic maintenance tasks.
				`,
			},
			{
				label: "Auth0",
				image: auth0ImagePath,
				level: 3,
				description: "",
			},
			{
				label: "Stripe",
				image: stripeImagePath,
				level: 3,
				description: "",
			},
			{
				label: "Octopus Deploy",
				image: octopusDeployImagePath,
				level: 5,
				description: "",
			},
		],
	},
	{
		label: "Database",
		image: className => <CircleStackIcon className={className} />,
		skills: [
			{
				label: "PostgreSQL",
				image: postgresqlImagePath,
				level: 4,
				description: `
					PostgresSQL is the database I am most familiar with.
					I have used it in many projects and have a good understanding of how to use it.
					Familiar with using PostgreSQL with Node.js and Java/Spring Boot.
				`,
			},
			{
				label: "Microsoft SQL Server",
				image: sqlServerImagePath,
				level: 3,
				description: `
					I have experience using Microsoft SQL Server with Java/Spring Boot.
					I am familiar with using it to create tables, views, stored procedures, functions, indexes, and triggers.
					Sound knowledge of specific SQL server features.
				`,
			},
			{
				label: "Redis",
				image: redisImagePath,
				level: 3,
				description: `
					I have used Redis in a few projects.
					I am familiar with the core concepts of Redis and how to use it to store data.
					Have used it to store session data and cache data.
				`,
			},
		],
	},
	{
		label: "DevOps",
		image: className => <CommandLineIcon className={className} />,
		skills: [
			{
				label: "Docker",
				image: dockerImagePath,
				level: 3,
				description: `
					I have used Docker to containerize a few projects.
					I am familiar with the core concepts of Docker and how to use it to create and manage containers.
					I have used Docker Compose to create multi-container applications.
				`,
			},
			{
				label: "ESLint",
				image: eslintImagePath,
				level: 5,
				description: `
					Use ESLint in all of my projects where JavaScript or TypeScript is used.
					Familiar with the core concepts of ESLint and how to use it to lint JavaScript and TypeScript code.
					Best practices, code style, and code quality are very important to me so I always use ESLint in my projects.
				`,
			},
			{
				label: "Prettier",
				image: prettierImagePath,
				level: 5,
				description: "",
			},
			{
				label: "StyleLint",
				image: stylelintImagePath,
				level: 3,
				description: `
					Use StyleLint in all of my projects where CSS is used.
					Familiar with the core concepts of StyleLint and how to use it to lint CSS.
				`,
			},
			{
				label: "Vite/Webpack",
				image: viteImagePath,
				level: 4,
				description: `
					I have used Vite, ESBuild, and Webpack to bundle JavaScript and TypeScript code.
					I am familiar with the core concepts of each and how to use them to bundle code for production.
					Familiar with the plugin & loader ecosystem for each and how to configure them.
					My preference is Vite for new projects as it is very fast and has a great developer experience but would say I know Webpack the best.
				`,
			},
			{
				label: "Bash",
				image: bashImagePath,
				level: 4,
				description: `
					I have used Bash to write scripts for a few projects.
					I am familiar with the core concepts of Bash and how to use it to write scripts.
					Have used it to automate tasks such as running tests, linting code, and building projects.
				`,
			},
			{
				label: "PowerShell",
				image: powershellImagePath,
				level: 5,
				description: "",
			},
			{
				label: "Git",
				image: gitImagePath,
				level: 3,
				description: "",
			},
			{
				label: "SVN",
				image: svnImagePath,
				level: 4,
				description: "",
			},
			{
				label: "Linux",
				image: linuxImagePath,
				level: 4,
				description: "",
			},
			{
				label: "Windows",
				image: windowsImagePath,
				level: 5,
				description: "",
			},
		],
	},
];

export default skillCategories;
