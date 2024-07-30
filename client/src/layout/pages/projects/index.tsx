import { Bars3CenterLeftIcon } from "@heroicons/react/20/solid";
import { initializeSearchParams, syncSearchParams } from "helpers";
import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "../container";
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
		<Container
			title="Projects"
			url="https://oliverplummer.com.au/projects"
			icon={iconClassName => <Bars3CenterLeftIcon className={iconClassName} />}
			text="Professional and personal projects that I have developed"
			childrenClassName="space-y-8"
		>
			{projects.map(project => (
				<Project
					key={project.code}
					item={project}
					isOpen={openSection === project.code}
					onToggle={handleSectionToggle(project.code)}
				/>
			))}
		</Container>
	);
};

export default ProjectsPage;
