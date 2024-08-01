/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { useKeyPress } from "hooks/use-key-press";
import { FC, MouseEvent, PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "../button";

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
	hideTitle = false,
	centerTitle = false,
	hideCloseButton = false,
	disableCloseOnEscape = false,
}) => {
	const breakpoint = useBreakpoint();
	const escapePress = useKeyPress("Escape");
	const dialogRef = useRef<HTMLDialogElement>(null);

	const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
		if (event.target !== dialogRef.current) return;

		if (onClose) {
			onClose();
		}
	};

	useEffect(() => {
		if (escapePress && onClose) {
			onClose();
		}
	}, [escapePress]);

	return createPortal(
		<dialog
			open={isOpen}
			ref={dialogRef}
			onMouseDown={handleDialogClick}
			className={clsx(
				"duration-400 pointer-events-none fixed inset-0 z-[100] m-0 h-screen w-screen max-w-none overflow-y-hidden overscroll-contain bg-transparent opacity-0 backdrop-blur-2xl transition-all",
				"open:pointer-events-auto open:visible open:opacity-100",
				className,
			)}
		>
			{isOpen && (
				<div
					className={clsx(
						"bg-elevated relative left-1/2 top-20 max-h-[calc(100vh-10rem)] w-auto min-w-0 max-w-[calc(100vw-var(--header-height))] -translate-x-1/2 rounded-2xl shadow-lg sm:top-1/2 sm:max-h-[calc(100vh-var(--header-height))] sm:max-w-[40rem] sm:-translate-y-1/2",
						modalClassName,
					)}
				>
					{!disableCloseOnEscape && !hideCloseButton && onClose && title && (
						<Button
							onClick={onClose}
							ariaLabel={`Close ${title}`}
							className="bg-primary hover:bg-hover absolute -right-2 -top-2 !h-12 shadow-2xl sm:-right-4 sm:-top-6"
							leftIcon={iconClassName =>
								breakpoint === Breakpoint.TINY ||
								breakpoint === Breakpoint.SMALL ? undefined : (
									<XMarkIcon className={iconClassName} />
								)
							}
							rightIcon={iconClassName =>
								breakpoint === Breakpoint.SMALL || breakpoint === Breakpoint.TINY ? (
									<XMarkIcon className={iconClassName} />
								) : undefined
							}
							textClassName="ml-1 mt-0.5 sm:mt-0 sm:pl-0"
							text={
								breakpoint === Breakpoint.SMALL || breakpoint === Breakpoint.TINY ? (
									"Close"
								) : (
									<div className="flex items-center gap-3">
										<span className="mt-[2px]">Close</span>
										<span className="border-primary-accent rounded border px-1 py-0.5 text-xs">
											ESC
										</span>
									</div>
								)
							}
						/>
					)}
					{!hideTitle && icon && (
						<div
							className={clsx(
								"border-b-primary flex gap-2 border-b px-6 py-4",
								subTitle === undefined ? "items-center" : "items-start",
								centerTitle ? "justify-center" : "justify-start",
							)}
						>
							{icon(`size-5 ${subTitle === undefined ? "mt-0.5" : "mt-1.5"} select-none`)}
							<div className="flex flex-col gap-1">
								<h1 className="text-xl md:text-2xl">{title}</h1>
								{titleContent}
								{subTitle && <h2 className="text-sm">{subTitle}</h2>}
							</div>
						</div>
					)}
					<div className={`overflow-auto py-8 ${contentClassName ?? ""}`}>{children}</div>
					{buttons && (
						<div className={`flex gap-2 ${buttonClassName ?? ""}`}>{buttons}</div>
					)}
				</div>
			)}
		</dialog>,
		document.body,
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
	hideTitle?: boolean;
	centerTitle?: boolean;
	disableCloseOnEscape?: boolean;
	hideCloseButton?: boolean;
}

export default Modal;
