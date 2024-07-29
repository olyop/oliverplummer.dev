import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import clsx from "clsx";
import { useKeyPress } from "hooks/use-key-press";
import { FC, PropsWithChildren, ReactNode, useEffect } from "react";

import Button from "../button";

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const isMobile =
	"userAgentData" in navigator ? (navigator.userAgentData.mobile as boolean) : false;

const Modal: FC<PropsWithChildren<ModalPropTypes>> = ({
	title,
	titleContent,
	subTitle,
	icon,
	isOpen,
	buttons,
	onClose,
	children,
	className,
	modalClassName,
	contentClassName,
	buttonClassName,
	backgroundClassName,
	isLarge = false,
	hideTitle = false,
	centerTitle = false,
	hideCloseButton = false,
	disableCloseOnEscape = false,
}) => {
	const escapePress = useKeyPress("Escape");

	useEffect(() => {
		if (escapePress && onClose) {
			onClose();
		}
	}, [escapePress]);

	return (
		<div
			data-test={isLarge}
			className={`fixed inset-0 z-[100] h-screen w-screen overflow-hidden backdrop-blur-2xl transition-opacity ${
				isOpen ? "visible opacity-100" : "invisible opacity-0"
			} ${className ?? ""}`}
		>
			<div
				aria-hidden
				onClick={disableCloseOnEscape ? undefined : onClose}
				className={`absolute inset-0 z-[110] cursor-pointer transition-opacity ${backgroundClassName ?? ""}`}
			/>
			{isOpen && (
				<div
					className={clsx(
						"bg-elevated dark:bg-elevated-dark absolute left-1/2 top-8 z-[120] flex max-h-[calc(100vh_-_5rem)] w-[calc(100vw_-_3rem)] -translate-x-1/2 flex-col gap-4 rounded-md p-4 shadow-lg md:top-1/2 md:w-[35rem] md:-translate-y-1/2",
						modalClassName,
					)}
				>
					{!disableCloseOnEscape && !hideCloseButton && onClose && title && (
						<Button
							onClick={onClose}
							ariaLabel={`Close ${title}`}
							className="bg-primary hover:bg-hover dark:hover:bg-hover-dark absolute -right-4 -top-4"
							leftIcon={c => <XMarkIcon className={c} />}
							text={
								isMobile ? (
									"Close"
								) : (
									<div className="flex items-center gap-2">
										<span className="mt-[2px]">Close</span>
										<span className="border-primary-accent dark:border-primary-accent-dark rounded border px-1 py-0.5 text-xs">
											ESC
										</span>
									</div>
								)
							}
						/>
					)}
					{!hideTitle && icon && (
						<div
							className={`-mt-1 flex gap-2 ${subTitle === undefined ? "items-center" : "items-start"} ${
								centerTitle ? "justify-center" : "justify-start"
							} border-b border-b-gray-200 pb-2`}
						>
							{icon(
								`h-5 w-5 ${subTitle === undefined ? "mt-0.5" : "mt-1.5"} select-none`,
							)}
							<div className="flex flex-col gap-1">
								<h1 className="text-xl md:text-2xl">{title}</h1>
								{titleContent}
								{subTitle && <h2 className="text-sm">{subTitle}</h2>}
							</div>
						</div>
					)}
					<div className={`overflow-auto py-2 ${contentClassName ?? ""}`}>{children}</div>
					{buttons && (
						<div className={`flex gap-2 ${buttonClassName ?? ""}`}>{buttons}</div>
					)}
				</div>
			)}
		</div>
	);
};

interface ModalPropTypes {
	isOpen: boolean;
	title?: string;
	titleContent?: ReactNode;
	subTitle?: ReactNode;
	icon?: (className: string) => ReactNode;
	onClose?: () => void;

	buttons?: ReactNode;
	className?: string | undefined;
	modalClassName?: string;
	contentClassName?: string;
	buttonClassName?: string;
	backgroundClassName?: string;
	hideTitle?: boolean;
	centerTitle?: boolean;
	disableCloseOnEscape?: boolean;
	isLarge?: boolean;
	hideCloseButton?: boolean;
}

export default Modal;
