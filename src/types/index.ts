import { ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

export interface ContentItemBase {
	code: string;
	label: string;
}

export interface ContentItem extends ContentItemBase {
	image: ContentTypeImage;
	imageDark?: ContentTypeImage;
}

export type ContentTypeImage = (className: string) => ReactNode;
