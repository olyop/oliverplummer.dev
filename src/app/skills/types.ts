import { ContentItem } from "@/types";

export interface Skill extends ContentItem {
	level: 2 | 3 | 4 | 5;
	description: string | null;
	dateStarted: Date;
}

export interface SkillCategory extends ContentItem {
	skills: Skill[];
}
