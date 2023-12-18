import { FC } from "react";
import { ContentItem } from "types";

const ContentImage: FC<Props> = ({ contentItem, className }) => {
	const classNameWithProp = `w-6 h-6 ${className ?? ""}`;
	return (
		<>
			{typeof contentItem.image === "string" ? (
				<img src={contentItem.image} alt={contentItem.label} className={classNameWithProp} />
			) : (
				contentItem.image(classNameWithProp)
			)}
		</>
	);
};

interface Props {
	contentItem: ContentItem;
	className?: string;
}

export default ContentImage;
