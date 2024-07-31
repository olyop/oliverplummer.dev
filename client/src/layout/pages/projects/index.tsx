import { NumberedListIcon } from "@heroicons/react/24/outline";
import { initializeSearchParams, syncSearchParams } from "helpers";
import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Page from "../page";
import { isProjectCodeValid, projects } from "./content";
import Project from "./project";

const OPEN_SECTION_PARAM_NAME = "open-section";

const ProjectsPage: FC = () => {
	const [urlSearchParams, setUrlSearchParams] = useSearchParams();

	const openSectionInitialValue = initializeSearchParams<string | null>(
		OPEN_SECTION_PARAM_NAME,
		urlSearchParams,
		setUrlSearchParams,
		null,
		isProjectCodeValid,
	);

	const [openSection, setOpenSection] = useState(openSectionInitialValue);

	const handleSectionToggle = (code: string) => (value: boolean) => {
		const newOpenSection = value ? code : null;

		syncSearchParams(OPEN_SECTION_PARAM_NAME, newOpenSection, setUrlSearchParams);

		setOpenSection(newOpenSection);
	};

	return (
		<Page
			title="Projects"
			url="https://oliverplummer.com.au/projects"
			icon={iconClassName => <NumberedListIcon className={iconClassName} />}
			childrenClassName="space-y-8"
			text="I have worked on a variety of projects, ranging from small personal projects to large commercial projects. Here are some of the highlights."
		>
			{projects.map(project => (
				<Project
					key={project.code}
					item={project}
					isOpen={openSection === project.code}
					onToggle={handleSectionToggle(project.code)}
				/>
			))}
		</Page>
	);
};

export default ProjectsPage;
