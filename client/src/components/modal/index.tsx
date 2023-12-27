import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { useKeyPress } from "hooks/use-key-press";
import { FC, PropsWithChildren, ReactNode, useEffect } from "react";

import Button from "../button";

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const isMobile = "userAgentData" in navigator ? (navigator.userAgentData.mobile as boolean) : false;

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
			className={`inset-0 w-screen h-screen fixed z-[100] transition-opacity overflow-hidden ${
				isOpen ? "opacity-100 visible" : "opacity-0 invisible"
			} ${className ?? ""}`}
		>
			<div
				aria-hidden
				onClick={disableCloseOnEscape ? undefined : onClose}
				className={`inset-0 cursor-pointer absolute z-[110] bg-gray-900 transition-opacity ${
					isOpen ? "opacity-50 visible" : "opacity-0 invisible"
				} ${backgroundClassName ?? ""}`}
			/>
			{isOpen && (
				<div
					className={`flex gap-4 flex-col shadow-lg rounded-md p-4 top-8 md:top-1/2 left-1/2 z-[120] absolute md:w-[35rem] w-[calc(100vw_-_3rem)] max-h-[calc(100vh_-_5rem)] -translate-x-1/2 md:-translate-y-1/2 bg-white ${
						modalClassName ?? ""
					}`}
				>
					{!disableCloseOnEscape && !hideCloseButton && onClose && title && (
						<Button
							onClick={onClose}
							ariaLabel={`Close ${title}`}
							className="absolute -top-4 -right-4 opacity-90 hover:opacity-100"
							leftIcon={c => <XMarkIcon className={c} />}
							text={
								isMobile ? (
									"Close"
								) : (
									<div className="flex items-center gap-2">
										<span>Close</span>
										<span className="py-0.5 px-1 text-xs rounded border">ESC</span>
									</div>
								)
							}
						/>
					)}
					{!hideTitle && icon && (
						<div
							className={`flex gap-2 -mt-1 ${subTitle === undefined ? "items-center" : "items-start"} ${
								centerTitle ? "justify-center" : "justify-start"
							} pb-2 border-b border-b-gray-200`}
						>
							{icon(`h-5 w-5 ${subTitle === undefined ? "mt-0.5" : "mt-1.5"} select-none`)}
							<div className="flex flex-col gap-1">
								<h1 className="text-xl md:text-2xl">{title}</h1>
								{titleContent}
								{subTitle && <h2 className="text-sm text-gray-500">{subTitle}</h2>}
							</div>
						</div>
					)}
					<div className={`overflow-auto py-2 ${contentClassName ?? ""}`}>{children}</div>
					{buttons && <div className={`flex gap-2 ${buttonClassName ?? ""}`}>{buttons}</div>}
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
