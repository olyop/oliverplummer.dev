import CheckCircleIcon from "@heroicons/react/20/solid/CheckCircleIcon";
import { initializeSearchParams, syncSearchParams } from "helpers";
import { FC, Fragment, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "../container";
import { skillCategories } from "./content";
import SkillCategory from "./skill-category";
import {
	SortByDirection,
	SortByKey,
	isSkillCategoryValid,
	isSortByDirectionValid,
	isSortByFieldValid,
} from "./sort-by";

const OPEN_SECTION_PARAM_NAME = "open-section";
const SORT_BY_FIELD_PARAM_NAME = "sort-by-field";
const SORT_BY_DIRECTION_PARAM_NAME = "sort-by-direction";

const SkillsPage: FC = () => {
	const [urlSearchParams, setUrlSearchParams] = useSearchParams();

	const openSectionInitialValue = initializeSearchParams<string | null>(
		OPEN_SECTION_PARAM_NAME,
		urlSearchParams,
		setUrlSearchParams,
		null,
		isSkillCategoryValid,
	);

	const sortByFieldInitialValue: SortByKey = initializeSearchParams<SortByKey>(
		SORT_BY_FIELD_PARAM_NAME,
		urlSearchParams,
		setUrlSearchParams,
		"level",
		isSortByFieldValid,
	);

	const sortByDirectionInitialValue: SortByDirection =
		initializeSearchParams<SortByDirection>(
			SORT_BY_DIRECTION_PARAM_NAME,
			urlSearchParams,
			setUrlSearchParams,
			"asc",
			isSortByDirectionValid,
		);

	const [openSection, setOpenSection] = useState(openSectionInitialValue);
	const [sortByField, setSortByField] = useState(sortByFieldInitialValue);
	const [sortByDirection, setSortByDirection] = useState(sortByDirectionInitialValue);

	const handleSectionToggle = (code: string) => (value: boolean) => {
		const newOpenSection = value ? code : null;

		syncSearchParams(SORT_BY_FIELD_PARAM_NAME, sortByField, setUrlSearchParams);
		syncSearchParams(SORT_BY_DIRECTION_PARAM_NAME, sortByDirection, setUrlSearchParams);
		syncSearchParams(OPEN_SECTION_PARAM_NAME, newOpenSection, setUrlSearchParams);

		setOpenSection(newOpenSection);
	};

	const handleSortByFieldChange = (value: SortByKey) => {
		syncSearchParams(SORT_BY_FIELD_PARAM_NAME, value, setUrlSearchParams);

		setSortByField(value);
	};

	const handleSortByDirectionChange = (value: SortByDirection) => {
		syncSearchParams(SORT_BY_DIRECTION_PARAM_NAME, value, setUrlSearchParams);

		setSortByDirection(value);
	};

	return (
		<Container
			title="Skills"
			icon={iconClassName => <CheckCircleIcon className={iconClassName} />}
			text={
				<Fragment>
					A complete list of all the <b>skills & technologies</b> I have experience with..
				</Fragment>
			}
			childrenClassName="flex flex-col gap-8"
		>
			{skillCategories.map(skillCategory => (
				<SkillCategory
					key={skillCategory.code}
					skillCategory={skillCategory}
					isOpen={openSection === skillCategory.code}
					sortByField={sortByField}
					sortByDirection={sortByDirection}
					onToggle={handleSectionToggle(skillCategory.code)}
					onSortByFieldChange={handleSortByFieldChange}
					onSortByDirectionChange={handleSortByDirectionChange}
				/>
			))}
		</Container>
	);
};

export default SkillsPage;
