import {
	ArrowPathIcon,
	CheckIcon,
	ClipboardIcon,
	ExclamationTriangleIcon,
	ShareIcon,
} from "@heroicons/react/24/outline";
import { useShare } from "hooks/use-share";
import { FC } from "react";

import FooterButton from "./footer-button";

const WEBSITE_URL = "https://oliverplummer.com.au";

const FooterShareButton: FC = () => {
	const [handleShare, { hasShared, hasCopiedShared, hasError }] = useShare(WEBSITE_URL);

	return (
		<FooterButton
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
			text={
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

export default FooterShareButton;
