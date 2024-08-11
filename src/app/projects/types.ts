import { ContentItem, ContentTypeImage } from "@/types";

export interface Project extends ContentItem {
	text: string;
	url: string | null;
	sourceCodeUrl: string | null;
	description: string;
	features: string[];
	technologies: ProjectTechnology[];
	screenshots: ContentTypeImage[];
	screencasts: string[];
}

export interface ProjectTechnology extends ContentItem {}
