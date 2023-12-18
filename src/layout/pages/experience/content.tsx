import BriefcaseIcon from "@heroicons/react/20/solid/BriefcaseIcon";
import auroraHotelImagePath from "assets/experience/aurora-hotel.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import readyTechImagePath from "assets/experience/readytech.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import wheelEasyImagePath from "assets/experience/wheeleasy.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";

import { Experience } from "./types";

export const content: Experience[] = [
	{
		code: "readytech",
		label: "Ready Tech",
		image: readyTechImagePath,
		industry: "Justice",
		dateStarted: new Date(2022, 6, 1),
		dateEnded: null,
		role: "Software Developer",
		description: "Job Description and overview..",
		responsibilities: [
			{
				code: "developing-applications",
				label: "Developing Applications",
				description: "Test",
			},
			{
				code: "developing-apis",
				label: "Developing APIs",
				description: "Test",
			},
			{
				code: "dev-ops",
				label: "Dev Ops",
				description: "Test",
			},
		],
		skillsLearned: [
			{
				code: "java",
				label: "Java",
				description: "Java",
			},
			{
				code: "octopus-deploy",
				label: "Octopus Deploy",
				description: "Octopus Deploy",
			},
		],
	},
	{
		code: "wheeleasy",
		label: "Wheel Easy",
		image: wheelEasyImagePath,
		industry: "Disability Services",
		dateStarted: new Date(2022, 2, 1),
		dateEnded: new Date(2022, 6, 1),
		role: "Software Developer",
		description: "Test",
		responsibilities: [],
		skillsLearned: [],
	},
	{
		code: "bar-tender",
		label: "Aurora Rooftop",
		image: auroraHotelImagePath,
		industry: "Hospitality",
		dateStarted: new Date(2019, 5, 1),
		dateEnded: new Date(2023, 0, 1),
		role: "Bar Tender",
		description: "Test",
		responsibilities: [],
		skillsLearned: [],
	},
	{
		code: "work-experience",
		label: "Work Experience",
		image: className => <BriefcaseIcon className={className} />,
		industry: "Catering",
		dateStarted: new Date(2016, 6, 1),
		dateEnded: new Date(2016, 7, 1),
		role: "Software Developer",
		description: "Test",
		responsibilities: [],
		skillsLearned: [],
	},
];

export const isExperienceCodeValid = (experience: string) => content.map(({ code }) => code).includes(experience);
