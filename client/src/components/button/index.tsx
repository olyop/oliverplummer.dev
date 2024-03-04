import { FC, ReactNode } from "react";

const baseIconClassName = "h-5 w-5";

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
		className={`flex cursor-pointer select-none items-center justify-center gap-2 text-sm font-bold uppercase transition-all duration-200 ease-in-out ${
			text === undefined && (leftIcon !== undefined || rightIcon !== undefined)
				? "h-9 w-9 rounded-full p-2"
				: "h-9 rounded-xl px-4"
		} ${
			isTransparent
				? "bg-transparent text-black hover:bg-gray-200"
				: "shadow-primary-light/30 bg-primary hover:bg-primary-light text-white shadow-lg hover:shadow-xl"
		}  ${className ?? ""}`}
	>
		{leftIcon &&
			(typeof leftIcon === "string" ? (
				<img
					alt={ariaLabel}
					src={leftIcon}
					className={`${baseIconClassName} ${spanClassName ?? ""} ${iconClassName ?? ""} ${leftIconClassName ?? ""}`}
				/>
			) : (
				leftIcon(`${baseIconClassName} ${spanClassName ?? ""} ${iconClassName ?? ""} ${leftIconClassName ?? ""}`)
			))}
		{text && <span className={`${spanClassName} ${textClassName}`}>{text}</span>}
		{rightIcon &&
			(typeof rightIcon === "string" ? (
				<img
					alt={ariaLabel}
					src={rightIcon}
					className={`${baseIconClassName} ${spanClassName ?? ""} ${iconClassName ?? ""} ${rightIconClassName ?? ""}`}
				/>
			) : (
				rightIcon(`${baseIconClassName} ${spanClassName ?? ""} ${iconClassName ?? ""} ${rightIconClassName ?? ""}`)
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
