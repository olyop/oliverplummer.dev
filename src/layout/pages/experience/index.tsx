import { initializeSearchParams, syncSearchParams } from "helpers";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "../container";
import { content, isExperienceCodeValid } from "./content";
import ExperienceItem from "./experience";

const OPEN_SECTION_PARAM_NAME = "openSection";

const ExperiencePage: FC = () => {
	const [urlSearchParams, setUrlSearchParams] = useSearchParams();

	const [openSection, setOpenSection] = useState<string | null>(null);

	const handleSectionToggle = (code: string) => (value: boolean) => {
		const newOpenSection = value ? code : null;

		syncSearchParams(OPEN_SECTION_PARAM_NAME, newOpenSection, setUrlSearchParams);

		setOpenSection(newOpenSection);
	};

	useEffect(() => {
		setOpenSection(
			initializeSearchParams(OPEN_SECTION_PARAM_NAME, urlSearchParams, setUrlSearchParams, isExperienceCodeValid),
		);
	}, []);

	return (
		<Container
			title="Experience"
			text="My professional work experience and occupations.."
			childrenClassName="flex flex-col gap-10"
		>
			{content.map(item => (
				<ExperienceItem
					item={item}
					key={item.code}
					isOpen={openSection === item.code}
					onToggle={handleSectionToggle(item.code)}
				/>
			))}
		</Container>
	);
};

export default ExperiencePage;
