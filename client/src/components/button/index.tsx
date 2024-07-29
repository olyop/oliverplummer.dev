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
		type={isSubmit ? "submit" : "button"}
		disabled={disabled}
		aria-label={ariaLabel}
		onClick={onClick}
		tabIndex={tabIndex}
		title={text && typeof text === "string" ? text : ariaLabel}
		className={clsx(
			"flex cursor-pointer select-none items-center justify-center gap-2 text-sm font-bold uppercase transition-all duration-200 ease-in-out",
			isTransparent
				? "hover:bg-hover dark:hover:bg-hover-dark focus:bg-hover dark:focus:bg-hover-dark border-primary dark:border-primary-dark hover:border-primary-accent dark:hover:border-primary-accent-dark focus:border-primary-accent dark:focus:border-primary-accent-dark border bg-transparent"
				: "bg-primary dark:bg-primary-dark hover:bg-hover dark:hover:bg-hover-dark focus:bg-hover dark:focus:bg-hover-dark shadow",
			text === undefined && (leftIcon !== undefined || rightIcon !== undefined)
				? "size-9 rounded-full p-2"
				: "h-9 rounded-xl px-4",
			className,
		)}
	>
		{leftIcon &&
			(typeof leftIcon === "string" ? (
				<img
					alt={ariaLabel}
					src={leftIcon}
					className={`${baseIconClassName} ${spanClassName ?? ""} ${iconClassName ?? ""} ${leftIconClassName ?? ""}`}
				/>
			) : (
				leftIcon(
					`${baseIconClassName} ${spanClassName ?? ""} ${iconClassName ?? ""} ${leftIconClassName ?? ""}`,
				)
			))}
		{text && (
			<span className={`${spanClassName ?? ""} ${textClassName ?? ""}`}>{text}</span>
		)}
		{rightIcon &&
			(typeof rightIcon === "string" ? (
				<img
					alt={ariaLabel}
					src={rightIcon}
					className={`${baseIconClassName} ${spanClassName ?? ""} ${iconClassName ?? ""} ${rightIconClassName ?? ""}`}
				/>
			) : (
				rightIcon(
					`${baseIconClassName} ${spanClassName ?? ""} ${iconClassName ?? ""} ${rightIconClassName ?? ""}`,
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
