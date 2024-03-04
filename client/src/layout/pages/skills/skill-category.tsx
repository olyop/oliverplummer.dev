import Collapsible from "components/collapsible";
import Input, { InputOnChange, InputType } from "components/input";
import { FC, Fragment } from "react";

import ContentImage from "../../../components/content-image";
import Skill from "./skill";
import {
	SortByDirection,
	SortByKey,
	skillsSortByComparator,
	skillsSortByDirection,
	skillsSortBySelectOptions,
} from "./sort-by";
import { SkillCategory as SkillCategoryType } from "./types";

const SkillCategory: FC<Props> = ({
	skillCategory,
	isOpen,
	sortByField,
	sortByDirection,
	onToggle,
	onSortByFieldChange,
	onSortByDirectionChange,
}) => {
	const handleSortByChange: InputOnChange = value => {
		onSortByFieldChange(value as SortByKey);
	};

	const handleSortByDirectionChange: InputOnChange = value => {
		onSortByDirectionChange(value as SortByDirection);
	};

	const skills = [...skillCategory.skills].sort(skillsSortByComparator(sortByField, sortByDirection));

	return (
		<Collapsible
			isOpen={isOpen}
			onToggle={onToggle}
			id={skillCategory.code}
			title={skillCategory.label}
			imageNode={className => <ContentImage contentItem={skillCategory} className={className} />}
			contentClassName="flex flex-col gap-6"
			content={
				<Fragment>
					<div className="flex w-full items-center justify-stretch gap-4 self-end md:justify-end">
						<Input
							id="skills-sort-by-key"
							name="Sort By"
							type={InputType.SELECT}
							value={sortByField}
							hideEmptySelectOptions
							className="w-full md:w-44"
							onChange={handleSortByChange}
							selectOptions={skillsSortBySelectOptions}
						/>
						<Input
							id="skills-sort-by-direction"
							name="Direction"
							type={InputType.SELECT}
							value={sortByDirection}
							hideEmptySelectOptions
							className="w-full md:w-44"
							onChange={handleSortByDirectionChange}
							selectOptions={skillsSortByDirection}
						/>
					</div>
					<div className="flex flex-col gap-5 sm:grid sm:grid-cols-[repeat(auto-fit,minmax(25rem,1fr))]">
						{skills.map(skill => (
							<Skill key={skill.label} skill={skill} />
						))}
					</div>
				</Fragment>
			}
		/>
	);
};

interface Props {
	skillCategory: SkillCategoryType;
	isOpen: boolean;
	sortByField: SortByKey;
	sortByDirection: SortByDirection;
	onToggle: (value: boolean) => void;
	onSortByFieldChange: (value: SortByKey) => void;
	onSortByDirectionChange: (value: SortByDirection) => void;
}

export default SkillCategory;
