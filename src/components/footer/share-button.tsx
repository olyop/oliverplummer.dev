"use client";

import {
	ArrowPathIcon,
	CheckIcon,
	ClipboardIcon,
	ExclamationTriangleIcon,
	ShareIcon,
} from "@heroicons/react/24/outline";

import { useShare } from "@/hooks/use-share";

import { FooterButton } from "./button";

const SHARE_URL = "https://oliverplummer.com.au";

export function FooterShareButton() {
	const [handleShare, { hasShared, hasCopiedShared, hasError }] = useShare(SHARE_URL);

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
}
