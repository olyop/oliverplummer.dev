import { ReactNode } from "react";

export interface ContentItemCode {
	code: string;
}

export interface ContentItem extends ContentItemCode {
	label: string;
	image: string | ((className: string) => ReactNode);
}
