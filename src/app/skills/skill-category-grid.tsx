import { useState } from "react";

import { Input, InputType } from "@/components/input";
import { InputValue } from "@/components/input/types";

import { Skill } from "./skill";
import {
	SortByDirection,
	SortByKey,
	skillsSortByComparator,
	skillsSortByDirection,
	skillsSortBySelectOptions,
} from "./sort-by";
import { Skill as SkillType } from "./types";

export function SkillCategoryGrid({ skills }: SkillCategoryInnerProps) {
	const [sortByField, setSortByField] = useState<SortByKey>("level");
	const [sortByDirection, setSortByDirection] = useState<SortByDirection>("asc");

	const handleSortByFieldChange = (value: InputValue) => {
		setSortByField(value as SortByKey);
	};

	const handleSortByDirectionChange = (value: InputValue) => {
		setSortByDirection(value as SortByDirection);
	};

	const skillsSorted = [...skills].sort(
		skillsSortByComparator(sortByField, sortByDirection),
	);

	return (
		<>
			<div className="flex w-full items-center justify-stretch gap-4 self-end md:justify-end">
				<Input
					id="skills-sort-by-key"
					name="Sort By"
					type={InputType.SELECT}
					value={sortByField}
					hideEmptySelectOptions
					className="w-full md:w-44"
					onChange={handleSortByFieldChange}
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
				{skillsSorted.map(skill => (
					<Skill key={skill.label} skill={skill} />
				))}
			</div>
		</>
	);
}

interface SkillCategoryInnerProps {
	skills: SkillType[];
}
