import Bars3CenterLeftIcon from "@heroicons/react/20/solid/Bars3CenterLeftIcon";
import BriefcaseIcon from "@heroicons/react/20/solid/BriefcaseIcon";
import CheckBadgeIcon from "@heroicons/react/20/solid/CheckBadgeIcon";
import InformationCircleIcon from "@heroicons/react/20/solid/InformationCircleIcon";
import { ReactNode } from "react";
import { NonIndexRouteObject } from "react-router-dom";

import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";
import ProjectsPage from "./pages/projects";
import SkillsPage from "./pages/skills";

export const navigationPages: NavigationPage[] = [
	{
		text: "About",
		path: "",
		hideText: true,
		icon: className => <InformationCircleIcon className={className} />,
		element: <AboutPage />,
	},
	{
		text: "Skills",
		path: "skills",
		hideText: false,
		icon: className => <CheckBadgeIcon className={className} />,
		element: <SkillsPage />,
	},
	{
		text: "Experience",
		path: "experience",
		hideText: false,
		icon: className => <BriefcaseIcon className={className} />,
		element: <ExperiencePage />,
	},
	{
		text: "Projects",
		path: "projects",
		hideText: false,
		icon: className => <Bars3CenterLeftIcon className={className} />,
		element: <ProjectsPage />,
	},
];

export interface NavigationPage extends NonIndexRouteObject {
	text: string;
	path: string;
	hideText: boolean;
	icon: (className: string) => ReactNode;
}
