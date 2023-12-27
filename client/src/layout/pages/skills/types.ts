import { ContentItem } from "types";

export type SkillBase = ContentItem;

export interface Skill extends SkillBase {
	level: 2 | 3 | 4 | 5;
	description: string | null;
	dateStarted: Date;
}

export interface SkillCategory extends SkillBase {
	skills: Skill[];
}
