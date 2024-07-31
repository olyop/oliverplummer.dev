import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { initializeSearchParams, syncSearchParams } from "helpers";
import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Page from "../page";
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
		<Page
			title="Experience"
			url="https://oliverplummer.com.au/experience"
			icon={iconClassName => <BriefcaseIcon className={iconClassName} />}
			text="I have worked in a variety of roles across different industries. Here are some of the highlights."
			childrenClassName="space-y-8"
		>
			{content.map(item => (
				<ExperienceItem
					item={item}
					key={item.code}
					isOpen={openSection === item.code}
					onToggle={handleSectionToggle(item.code)}
				/>
			))}
		</Page>
	);
};

export default ExperiencePage;
