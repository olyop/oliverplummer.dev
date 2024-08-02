import clsx from "clsx";
import { FC } from "react";
import { ContentItem } from "types";

const ContentImage: FC<Props> = ({ contentItem, className }) => (
	<>
		{typeof contentItem.image === "string" ? (
			<>
				<img
					src={contentItem.image}
					alt={contentItem.label}
					className={clsx(
						typeof contentItem.imageDark === "string" ? "dark:hidden" : null,
						className,
					)}
				/>
				{typeof contentItem.imageDark === "string" && (
					<img
						src={contentItem.imageDark}
						alt={contentItem.label}
						className={clsx("hidden dark:block", className)}
					/>
				)}
			</>
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
