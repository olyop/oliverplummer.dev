import { ReactNode } from "react";

import { ContentItem, ContentItemBase } from "@/types";

export interface ExperienceItem extends ContentItemBase {
	label: string;
	description: string;
}

export interface Experience extends ContentItem {
	dateStarted: Date;
	dateEnded: Date | null;
	role: string;
	roleIcon: (className: string) => ReactNode;
	industry: string;
	industryIcon: (className: string) => ReactNode;
	description: string[];
	responsibilities: ExperienceItem[] | null;
	skillsLearned: ExperienceItem[] | null;
}
