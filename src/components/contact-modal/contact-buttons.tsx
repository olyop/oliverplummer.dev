import {
	ArrowPathIcon,
	CheckIcon,
	ClipboardIcon,
	EnvelopeOpenIcon,
	ExclamationTriangleIcon,
	PhoneIcon,
	ShareIcon,
} from "@heroicons/react/24/outline";
import { ReactNode, useEffect, useState } from "react";

import { Button } from "@/components/button";
import { Breakpoint, useBreakpoint } from "@/hooks/use-breakpoint";
import { useShare } from "@/hooks/use-share";

export function ContactCopyButtons({ text, scheme }: ButtonsProps) {
	const breakpoint = useBreakpoint();

	const actionButtonNode = (
		<ContactActionButton
			text={text}
			scheme={scheme}
			schemeDescription={scheme === "tel" ? "Phone" : "Mail"}
			schemeIcon={className =>
				scheme === "tel" ? (
					<PhoneIcon className={className} />
				) : (
					<EnvelopeOpenIcon className={className} />
				)
			}
		/>
	);

	return (
		<div className="flex flex-col items-center gap-4 py-2">
			<a
				href={`${scheme}:${text}`}
				className="text tracking-wider hover:underline sm:text-lg"
			>
				<u>
					<b>{text}</b>
				</u>
			</a>
			<div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-2">
				{(breakpoint === Breakpoint.TINY || breakpoint === Breakpoint.SMALL) &&
					actionButtonNode}
				<ContactShareButton text={text} />
				{breakpoint !== Breakpoint.TINY &&
					breakpoint !== Breakpoint.SMALL &&
					actionButtonNode}
				<ContactCopyButton text={text} />
			</div>
		</div>
	);
}

function ContactShareButton({ text }: ContactButtonProps) {
	const [handleShare, { hasShared, hasCopiedShared, hasError }] = useShare(text);
	return (
		<Button
			isTransparent
			onClick={handleShare}
			ariaLabel={`Copy ${text} to clipboard`}
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
		/>
	);
}

function ContactActionButton({
	text,
	scheme,
	schemeIcon,
	schemeDescription,
}: ContactActionButtonProps) {
	return (
		<a href={`${scheme}:${text}`}>
			<Button
				ariaLabel={schemeDescription}
				leftIcon={className => schemeIcon(className)}
				text={schemeDescription}
			/>
		</a>
	);
}

interface ContactActionButtonProps extends ButtonsProps {
	schemeIcon: (className: string) => ReactNode;
	schemeDescription: string;
}

function ContactCopyButton({ text }: ContactButtonProps) {
	const [hasCopied, setHasCopied] = useState<boolean | null>(null);

	const [hasError, setHasError] = useState(false);

	const copy = async (value: string) => {
		setHasCopied(false);

		try {
			await navigator.clipboard.writeText(value);
		} catch {
			setHasError(true);
		} finally {
			setHasCopied(true);
		}
	};

	const handleCopy = () => {
		void copy(text);
	};

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;

		if (hasCopied) {
			timeout = setTimeout(() => {
				setHasCopied(null);
				setHasError(false);
			}, 2000);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [hasCopied]);

	return (
		<Button
			isTransparent
			onClick={handleCopy}
			ariaLabel={`Copy ${text} to clipboard`}
			text={
				hasCopied === null
					? "Copy"
					: hasCopied
						? hasError
							? "Error"
							: "Copied!"
						: "Copying"
			}
			leftIcon={className =>
				hasCopied === null ? (
					<ClipboardIcon className={className} />
				) : hasCopied ? (
					hasError ? (
						<ExclamationTriangleIcon className={className} />
					) : (
						<CheckIcon className={className} />
					)
				) : (
					<ArrowPathIcon className={className} />
				)
			}
		/>
	);
}

interface ContactButtonProps {
	text: string;
}

interface ButtonsProps extends ContactButtonProps {
	scheme: "tel" | "mailto" | "sms";
}
