import { BriefcaseIcon } from "@heroicons/react/20/solid";
import { initializeSearchParams, syncSearchParams } from "helpers";
import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "../container";
import { content, isExperienceCodeValid } from "./content";
import ExperienceItem from "./experience";

const OPEN_SECTION_PARAM_NAME = "open-section";

const ExperiencePage: FC = () => {
	const [urlSearchParams, setUrlSearchParams] = useSearchParams();

	const openSectionInitialValue = initializeSearchParams<string | null>(
		OPEN_SECTION_PARAM_NAME,
		urlSearchParams,
		setUrlSearchParams,
		null,
		isExperienceCodeValid,
	);

	const [openSection, setOpenSection] = useState(openSectionInitialValue);

	const handleSectionToggle = (code: string) => (value: boolean) => {
		const newOpenSection = value ? code : null;

		syncSearchParams(OPEN_SECTION_PARAM_NAME, newOpenSection, setUrlSearchParams);

		setOpenSection(newOpenSection);
	};

	return (
		<Container
			title="Experience"
			icon={iconClassName => <BriefcaseIcon className={iconClassName} />}
			text="My professional work experience and occupations.."
			childrenClassName="flex flex-col gap-8"
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
