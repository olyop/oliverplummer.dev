import { ReactNode } from "react";

export interface ContentItem extends ContentItemCode {
	image: ContentTypeImage;
	imageDark?: ContentTypeImage;
}

export interface ContentItemCode {
	code: string;
	label: string;
}

export type ContentTypeImage = (className: string) => ReactNode;
