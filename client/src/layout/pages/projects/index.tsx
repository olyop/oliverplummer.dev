import { NumberedListIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

import Page from "../page";
import { projects } from "./content";
import Project from "./project";

const ProjectsPage: FC = () => (
	<Page
		title="Projects"
		url="https://oliverplummer.com.au/projects"
		icon={iconClassName => <NumberedListIcon className={iconClassName} />}
		childrenClassName="space-y-8"
		text="I have worked on a variety of projects, ranging from small personal projects to large commercial projects. Here are some of the highlights."
	>
		{projects.map(project => (
			<Project key={project.code} item={project} />
		))}
	</Page>
);

export default ProjectsPage;
