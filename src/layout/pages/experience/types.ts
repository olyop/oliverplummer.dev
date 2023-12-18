import { ContentItem, ContentItemCode } from "types";

export interface ExperienceItem extends ContentItemCode {
	label: string;
	description: string;
}

export interface Experience extends ContentItem {
	industry: string;
	dateStarted: Date;
	dateEnded: Date | null;
	role: string;
	description: string;
	responsibilities: ExperienceItem[];
	skillsLearned: ExperienceItem[];
}
