import { SelectOption } from "@/components/input";

import { Skill as SkillType } from "./types";

export type SortByDirection = "asc" | "desc";

export type SortByKey = keyof Pick<SkillType, "level" | "label" | "dateStarted">;

const skillsSortByDirections = ["asc", "desc"] as unknown as Array<SortByDirection>;
const skillsSortByFields = [
	"level",
	"label",
	"dateStarted",
] as unknown as Array<SortByKey>;

const sortByLabel: Parameters<Array<SkillType>["sort"]>[0] = (a, b) =>
	b.level - a.level || a.label.localeCompare(b.label);

const sortByDateStarted: Parameters<Array<SkillType>["sort"]>[0] = (a, b) =>
	b.dateStarted.getTime() - a.dateStarted.getTime() || a.label.localeCompare(b.label);

const sortByLevel: Parameters<Array<SkillType>["sort"]>[0] = (a, b) =>
	b.level - a.level || a.label.localeCompare(b.label);

export const skillsSortByComparator =
	(
		sortByKey: SortByKey,
		sortByDirection: SortByDirection,
	): Parameters<Array<SkillType>["sort"]>[0] =>
	(a, b) => {
		if (sortByKey === "level") {
			return sortByDirection === "asc" ? sortByLevel(a, b) : sortByLevel(b, a);
		} else if (sortByKey === "label") {
			return sortByDirection === "asc" ? sortByLabel(a, b) : sortByLabel(b, a);
		} else {
			return sortByDirection === "asc"
				? sortByDateStarted(a, b)
				: sortByDateStarted(b, a);
		}
	};

export const skillsSortBySelectOptions = skillsSortByFields.map<SelectOption>(key => {
	let label: string;

	if (key === "dateStarted") {
		label = "Date Started";
	} else if (key === "level") {
		label = "Level";
	} else {
		label = "Name";
	}

	return {
		optionID: key,
		description: label,
	};
});

export const skillsSortByDirection = skillsSortByDirections.map<SelectOption>(key => {
	let label: string;

	if (key === "asc") {
		label = "Ascending";
	} else {
		label = "Descending";
	}

	return {
		optionID: key,
		description: label,
	};
});
