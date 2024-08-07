import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

import Page from "../page";
import { content } from "./content";
import ExperienceItem from "./experience";

const ExperiencePage: FC = () => (
	<Page
		title="Experience"
		url="https://oliverplummer.com.au/experience"
		icon={iconClassName => <BriefcaseIcon className={iconClassName} />}
		text="I have worked in a variety of roles across different industries. Here are some of the highlights."
		childrenClassName="space-y-8"
	>
		{content.map(item => (
			<ExperienceItem item={item} key={item.code} />
		))}
	</Page>
);

export default ExperiencePage;
