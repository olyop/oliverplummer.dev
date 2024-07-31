import { ClipboardIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import Button from "components/button";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { useShare } from "hooks/use-share";
import { FC, ReactNode, useEffect, useState } from "react";

const ContactShareButton: FC<ButtonProps> = ({ text }) => {
	const [handleShare, { hasShared, hasCopiedShared, hasError }] = useShare(text);
	return (
		<Button
			isTransparent
			onClick={handleShare}
			className="w-28 border"
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
};

const ContactActionButton: FC<ContactActionButtonProps> = ({
	text,
	scheme,
	schemeIcon,
	schemeDescription,
}) => (
	<a href={`${scheme}:${text}`}>
		<Button
			className="w-28"
			ariaLabel={schemeDescription}
			leftIcon={className => schemeIcon(className)}
			text={schemeDescription}
		/>
	</a>
);

interface ContactActionButtonProps extends ButtonsProps {
	schemeIcon: (className: string) => ReactNode;
	schemeDescription: string;
}

const ContactCopyButton: FC<ButtonProps> = ({ text }) => {
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
			className="w-28 border"
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
};

interface ButtonProps {
	text: string;
}

export const ContactCopyButtons: FC<ButtonsProps> = ({ text, scheme }) => {
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
};

interface ButtonsProps extends ButtonProps {
	scheme: "tel" | "mailto" | "sms";
}
