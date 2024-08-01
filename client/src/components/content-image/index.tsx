import clsx from "clsx";
import { FC } from "react";
import { ContentItem } from "types";

const ContentImage: FC<Props> = ({ contentItem, className }) => (
	<>
		{typeof contentItem.image === "string" ? (
			<img src={contentItem.image} alt={contentItem.label} className={className} />
		) : (
			contentItem.image(clsx(className))
		)}
	</>
);

interface Props {
	contentItem: ContentItem;
	className?: string;
}

export default ContentImage;
