import BriefcaseIcon from "@heroicons/react/20/solid/BriefcaseIcon";
import BuildingLibraryIcon from "@heroicons/react/20/solid/BuildingLibraryIcon";
import CodeBracketIcon from "@heroicons/react/20/solid/CodeBracketIcon";
import FaceSmileIcon from "@heroicons/react/20/solid/FaceSmileIcon";
import UserIcon from "@heroicons/react/20/solid/UserIcon";
import LifebuoyIcon from "@heroicons/react/24/outline/LifebuoyIcon";
import auroraHotelImagePath from "assets/experience/aurora-hotel.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import readyTechImagePath from "assets/experience/readytech.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import wheelEasyImagePath from "assets/experience/wheeleasy.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";

import { Experience } from "./types";

export const content: Experience[] = [
	{
		code: "readytech",
		label: "Ready Tech",
		image: readyTechImagePath,
		dateStarted: new Date(2022, 6, 1),
		dateEnded: null,
		role: "Software Developer",
		roleIcon: className => <CodeBracketIcon className={className} />,
		industry: "Justice",
		industryIcon: className => <BuildingLibraryIcon className={className} />,
		description: [
			`
				Working at Ready Tech as a Software Developer, I was responsible for developing and maintaining their
				legacy case management system. This involved working with a variety of technologies including Java,
				Java EE, Apache Tomcat, Microsoft SQL Server, and Octopus Deploy.
			`,
			`
				As part of my role, I was responsible for developing new features, fixing bugs, and maintaining the
				infrastructure. I was also responsible for providing support to the users of the system, which
				involved investigating issues and providing solutions.
			`,
			`
				I was solely responsible for the development and maintenance of our CD system using Octopus Deploy.
				This involved creating and maintaining the deployment process, and the infrastructure that it ran on.
			`,
		],
		responsibilities: [
			{
				code: "developing-applications",
				label: "Developing Applications",
				description: `
					Developing new features and fixing bugs in the legacy case management system.
				`,
			},
			{
				code: "developing-apis",
				label: "Developing APIs",
				description: `
					Developing API's for external systems to integrate with the legacy case management system.
				`,
			},
			{
				code: "dev-ops",
				label: "Dev Ops",
				description: `
					Developing and maintaining the automation of the deployment process using Octopus Deploy.
					Managing our branch strategy and release process with their custom branching strategy.
				`,
			},
		],
		skillsLearned: [
			{
				code: "java",
				label: "Java",
				description: `
					I had never used Java before, so I had to learn the language and the ecosystem around it.
					This included learning the language, the build tools, and the frameworks.
				`,
			},
			{
				code: "octopus-deploy",
				label: "Octopus Deploy",
				description: `
					I had the opportunity to learn Octopus Deploy, which is a tool for automating deployments.
				`,
			},
			{
				code: "vue-js",
				label: "Vue.js",
				description: `
					Learnt Vue.js, which is a framework they use for building modern user interfaces.
				`,
			},
		],
	},
	{
		code: "wheeleasy",
		label: "Wheel Easy",
		image: wheelEasyImagePath,
		dateStarted: new Date(2022, 2, 1),
		dateEnded: new Date(2022, 6, 1),
		role: "Software Developer",
		roleIcon: className => <CodeBracketIcon className={className} />,
		industry: "Disability Services",
		industryIcon: className => <LifebuoyIcon className={className} />,
		description: [
			`
				At Wheel Easy, I took part in developing their web application. This involved
				working with a variety of technologies including React, TypeScript, and Next.js.
			`,
			`
				I worked with the other developer to develop new features and fix bugs.
			`,
		],
		responsibilities: [
			{
				code: "developing-applications",
				label: "Developing Applications",
				description: `
					Developing new features and fixing bugs in their Next.js web application and their API.
				`,
			},
			{
				code: "front-end",
				label: "Front End",
				description: `
					Developing the front end of the web application using React and TypeScript.
				`,
			},
		],
		skillsLearned: [
			{
				code: "next-js",
				label: "Next.js",
				description: `
					I had the opportunity to learn Next.js, which is a framework for building React applications.
					This was the first time I had used a framework for building React applications.
				`,
			},
		],
	},
	{
		code: "bar-tender",
		label: "Aurora Rooftop",
		image: auroraHotelImagePath,
		dateStarted: new Date(2019, 5, 1),
		dateEnded: new Date(2023, 0, 1),
		role: "Bar Tender",
		roleIcon: className => <FaceSmileIcon className={className} />,
		industry: "Hospitality",
		industryIcon: className => <BriefcaseIcon className={className} />,
		description: ["Test"],
		responsibilities: [],
		skillsLearned: [],
	},
	{
		code: "work-experience",
		label: "Work Experience",
		image: className => <BriefcaseIcon className={className} />,
		dateStarted: new Date(2016, 6, 1),
		dateEnded: new Date(2016, 7, 1),
		role: "Work Experience",
		roleIcon: className => <UserIcon className={className} />,
		industryIcon: className => <BriefcaseIcon className={className} />,
		industry: "Catering",
		description: [
			`
			I worked with a lead website developer of an online food-catering company. During my time there I participated
			in company meetings and assisted in the development of the company’s website. This gave me on-the-job
			training experience.
		`,
		],
		responsibilities: null,
		skillsLearned: null,
	},
];

export const isExperienceCodeValid = (experience: string) => content.map(({ code }) => code).includes(experience);
