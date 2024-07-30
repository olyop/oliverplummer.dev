import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";
import CheckIcon from "@heroicons/react/20/solid/CheckIcon";
import ClipboardIcon from "@heroicons/react/20/solid/ClipboardIcon";
import ExclamationTriangleIcon from "@heroicons/react/20/solid/ExclamationTriangleIcon";
import ShareIcon from "@heroicons/react/20/solid/ShareIcon";
import Button from "components/button";
import { useShare } from "hooks/use-share";
import { FC } from "react";

const HeaderShareButton: FC<HeaderShareButtonProps> = ({ url }) => {
	const [handleShare, { hasShared, hasCopiedShared, hasError }] = useShare(url);

	return (
		<Button
			isTransparent
			className="!size-12"
			iconClassName="!size-6"
			onClick={handleShare}
			leftIcon={className =>
				hasShared === null ? (
					<ShareIcon className={className} />
				) : hasShared ? (
					hasCopiedShared ? (
						hasError ? (
							<ExclamationTriangleIcon className={className} />
						) : (
							<ClipboardIcon className={className} />
						)
					) : (
						<CheckIcon className={className} />
					)
				) : (
					<ArrowPathIcon className={className} />
				)
			}
			ariaLabel={
				hasShared === null
					? "Share"
					: hasShared
						? hasCopiedShared
							? hasError
								? "Error"
								: "Copied!"
							: "Shared!"
						: "Sharing"
			}
		/>
	);
};

export interface HeaderShareButtonProps {
	url: string;
}

export default HeaderShareButton;
