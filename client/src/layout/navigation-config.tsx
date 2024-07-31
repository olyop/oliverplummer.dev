import {
	BriefcaseIcon,
	CheckCircleIcon,
	InformationCircleIcon,
	NumberedListIcon,
} from "@heroicons/react/24/outline";

import { NavigationPage } from "./navigation";
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
		icon: className => <CheckCircleIcon className={className} />,
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
		icon: className => <NumberedListIcon className={className} />,
		element: <ProjectsPage />,
	},
];
