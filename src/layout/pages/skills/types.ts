import { ReactNode } from "react";

export interface SkillBase {
	label: string;
	image: string | ((className: string) => ReactNode);
}

export interface Skill extends SkillBase {
	level: 2 | 3 | 4 | 5;
	description: string;
}

export interface SkillCategory extends SkillBase {
	skills: Skill[];
}
