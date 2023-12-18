import { ContentItem } from "types";

export interface Project extends ContentItem {
	description: string;
	url: string;
	screenshots: string[];
}
