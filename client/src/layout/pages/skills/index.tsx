import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { FC, useState } from "react";

import Page from "../page";
import { skillCategories } from "./content";
import SkillCategory from "./skill-category";
import { SortByDirection, SortByKey } from "./sort-by";

const SkillsPage: FC = () => {
	const [sortByField, setSortByField] = useState<SortByKey>("level");
	const [sortByDirection, setSortByDirection] = useState<SortByDirection>("asc");

	const handleSortByFieldChange = (value: SortByKey) => {
		setSortByField(value);
	};

	const handleSortByDirectionChange = (value: SortByDirection) => {
		setSortByDirection(value);
	};

	return (
		<Page
			title="Technical Skills"
			childrenClassName="space-y-8"
			url="https://oliverplummer.com.au/skills"
			icon={iconClassName => <CheckCircleIcon className={iconClassName} />}
			text="I have experience with a wide range of technologies, tools, and languages. Here are some of the key ones I have used."
		>
			{skillCategories.map(skillCategory => (
				<SkillCategory
					key={skillCategory.code}
					skillCategory={skillCategory}
					sortByField={sortByField}
					sortByDirection={sortByDirection}
					onSortByFieldChange={handleSortByFieldChange}
					onSortByDirectionChange={handleSortByDirectionChange}
				/>
			))}
		</Page>
	);
};

export default SkillsPage;
