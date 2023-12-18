import { initializeSearchParams, syncSearchParams } from "helpers";
import { FC, Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "../container";
import { skillCategories } from "./content";
import SkillCategory from "./skill-category";
import {
	SortByDirection,
	SortByKey,
	isSkillCategorySortByDirectionValid,
	isSkillCategorySortByFieldValid,
	isSkillCategoryValid,
} from "./sort-by";

const OPEN_SECTION_PARAM_NAME = "open-section";
const OPEN_SECTION_SORT_BY_FIELD_PARAM_NAME = "open-section-sort-by-field";
const OPEN_SECTION_SORT_BY_DIRECTION_PARAM_NAME = "open-section-sort-by-direction";

const SkillsPage: FC = () => {
	const [urlSearchParams, setUrlSearchParams] = useSearchParams();

	const [openSection, setOpenSection] = useState<string | null>(null);
	const [openSectionSortByField, setOpenSectionSortByField] = useState<SortByKey>("level");
	const [openSectionSortByDirection, setOpenSectionSortByDirection] = useState<SortByDirection>("asc");

	const handleSectionToggle = (code: string) => (value: boolean) => {
		const newOpenSection = value ? code : null;

		syncSearchParams(OPEN_SECTION_SORT_BY_FIELD_PARAM_NAME, openSectionSortByField, setUrlSearchParams);
		syncSearchParams(OPEN_SECTION_SORT_BY_DIRECTION_PARAM_NAME, openSectionSortByDirection, setUrlSearchParams);
		syncSearchParams(OPEN_SECTION_PARAM_NAME, newOpenSection, setUrlSearchParams);

		setOpenSection(newOpenSection);
	};

	const handleSortByFieldChange = (value: SortByKey) => {
		syncSearchParams(OPEN_SECTION_SORT_BY_FIELD_PARAM_NAME, value, setUrlSearchParams);

		setOpenSectionSortByField(value);
	};

	const handleSortByDirectionChange = (value: SortByDirection) => {
		syncSearchParams(OPEN_SECTION_SORT_BY_DIRECTION_PARAM_NAME, value, setUrlSearchParams);

		setOpenSectionSortByDirection(value);
	};

	useEffect(() => {
		setOpenSection(
			initializeSearchParams(OPEN_SECTION_PARAM_NAME, urlSearchParams, setUrlSearchParams, isSkillCategoryValid),
		);

		setOpenSectionSortByField(
			initializeSearchParams<SortByKey>(
				OPEN_SECTION_SORT_BY_FIELD_PARAM_NAME,
				urlSearchParams,
				setUrlSearchParams,
				isSkillCategorySortByFieldValid,
			) ?? "level",
		);

		setOpenSectionSortByDirection(
			initializeSearchParams<SortByDirection>(
				OPEN_SECTION_SORT_BY_DIRECTION_PARAM_NAME,
				urlSearchParams,
				setUrlSearchParams,
				isSkillCategorySortByDirectionValid,
			) ?? "asc",
		);
	}, []);

	return (
		<Container
			title="Skills"
			text={
				<Fragment>
					A complete list of all the <b>skills & technologies</b> I have experience with..
				</Fragment>
			}
			childrenClassName="flex flex-col gap-10"
		>
			{skillCategories.map((skillCategory, index) => (
				<SkillCategory
					index={index}
					key={skillCategory.code}
					skillCategory={skillCategory}
					isOpen={openSection === skillCategory.code}
					sortByField={openSectionSortByField}
					sortByDirection={openSectionSortByDirection}
					onToggle={handleSectionToggle(skillCategory.code)}
					onSortByFieldChange={handleSortByFieldChange}
					onSortByDirectionChange={handleSortByDirectionChange}
				/>
			))}
		</Container>
	);
};

export default SkillsPage;
