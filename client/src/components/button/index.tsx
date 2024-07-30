import { clsx } from "clsx";
import { FC, ReactNode } from "react";

const baseIconClassName = "size-6";

const Button: FC<ButtonProps> = ({
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
}) => (
	<button
		id={id}
		onClick={onClick}
		disabled={disabled}
		tabIndex={tabIndex}
		aria-label={ariaLabel}
		type={isSubmit ? "submit" : "button"}
		title={text && typeof text === "string" ? text : ariaLabel}
		className={clsx(
			"flex cursor-pointer select-none items-center justify-center gap-2 text-sm font-bold uppercase transition-colors duration-200",
			isTransparent
				? "hover:bg-hover focus:bg-hover border-primary hover:border-primary-accent focus:border-primary-accent border bg-transparent"
				: "bg-primary hover:bg-hover focus:bg-hover shadow",
			text === undefined && (leftIcon !== undefined || rightIcon !== undefined)
				? "size-9 rounded-xl p-2 sm:rounded-full"
				: "h-9 rounded-xl px-4",
			className,
		)}
	>
		{leftIcon &&
			(typeof leftIcon === "string" ? (
				<img
					alt={ariaLabel}
					src={leftIcon}
					className={clsx(
						baseIconClassName,
						spanClassName,
						iconClassName,
						leftIconClassName,
					)}
				/>
			) : (
				leftIcon(clsx(baseIconClassName, spanClassName, iconClassName, leftIconClassName))
			))}
		{text && <span className={clsx(spanClassName, textClassName)}>{text}</span>}
		{rightIcon &&
			(typeof rightIcon === "string" ? (
				<img
					alt={ariaLabel}
					src={rightIcon}
					className={clsx(
						baseIconClassName,
						spanClassName,
						iconClassName,
						rightIconClassName,
					)}
				/>
			) : (
				rightIcon(
					clsx(baseIconClassName, spanClassName, iconClassName, rightIconClassName),
				)
			))}
	</button>
);

export interface ButtonProps {
	id?: string;
	isTransparent?: boolean;
	isSubmit?: boolean;
	text?: ReactNode | undefined;
	ariaLabel: string;
	leftIcon?: ((className: string) => ReactNode) | string | undefined;
	rightIcon?: ((className: string) => ReactNode) | string | undefined;
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

export default Button;
