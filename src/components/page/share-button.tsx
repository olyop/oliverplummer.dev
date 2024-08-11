"use client";

import {
	ArrowPathIcon,
	CheckIcon,
	ClipboardIcon,
	ExclamationTriangleIcon,
	ShareIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/button";
import { Breakpoint, useBreakpoint } from "@/hooks/use-breakpoint";
import { useShare } from "@/hooks/use-share";

export function ShareButton({ url }: ShareButtonProps) {
	const breakpoint = useBreakpoint();

	const [handleShare, { hasShared, hasCopiedShared, hasError }] = useShare(url);

	const shouldCollapse = !(
		breakpoint === Breakpoint.EXTRA_LARGE || breakpoint === Breakpoint.MEDIUM
	);

	return (
		<Button
			isTransparent
			onClick={handleShare}
			iconClassName="!size-6"
			text={shouldCollapse ? undefined : "Share"}
			className={shouldCollapse ? "!size-12" : "!h-12"}
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
}

interface ShareButtonProps {
	url: string;
}
