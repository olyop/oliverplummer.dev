import { clsx } from "clsx";
import { ReactNode } from "react";

const baseIconClassName = "size-6";

export function Button({
	id,
	isTransparent = false,
	isSubmit = false,
	leftIcon,
	text,
	ariaLabel,
	rightIcon,
	onClick,
	tabIndex,
	className,
	spanClassName,
	iconClassName,
	leftIconClassName,
	rightIconClassName,
	textClassName,
	disabled,
}: ButtonProps) {
	return (
		<button
			id={id}
			onClick={onClick}
			disabled={disabled}
			tabIndex={tabIndex}
			aria-label={ariaLabel}
			type={isSubmit ? "submit" : "button"}
			title={text && typeof text === "string" ? text : ariaLabel}
			className={clsx(
				"flex cursor-pointer select-none items-center justify-center gap-2 border transition-colors duration-200 hover:bg-primary focus:bg-primary",
				isTransparent
					? "border-primary bg-transparent hover:border-primary-accent focus:border-primary-accent"
					: "border border-primary-accent bg-hover hover:bg-primary focus:bg-primary",
				text === undefined && (leftIcon !== undefined || rightIcon !== undefined)
					? "size-9 rounded-xl p-2 sm:rounded-full"
					: "h-10 rounded-xl px-4",
				className,
			)}
		>
			{leftIcon &&
				leftIcon(
					clsx(baseIconClassName, spanClassName, iconClassName, leftIconClassName),
				)}
			{text && (
				<b
					className={clsx(
						"block text-base uppercase leading-4",
						spanClassName,
						textClassName,
					)}
				>
					{text}
				</b>
			)}
			{rightIcon &&
				rightIcon(
					clsx(baseIconClassName, spanClassName, iconClassName, rightIconClassName),
				)}
		</button>
	);
}

export interface ButtonProps {
	id?: string;
	isTransparent?: boolean;
	isSubmit?: boolean;
	text?: ReactNode | undefined;
	ariaLabel: string;
	leftIcon?: ((className: string) => ReactNode) | undefined;
	rightIcon?: ((className: string) => ReactNode) | undefined;
	onClick?: (() => void) | undefined;
	className?: string | undefined;
	spanClassName?: string | undefined;
	iconClassName?: string | undefined;
	leftIconClassName?: string;
	rightIconClassName?: string;
	textClassName?: string;
	disabled?: boolean;
	tabIndex?: number | undefined;
}
