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
		className={`font-bold select-none transition-all ease-in-out duration-200 text-sm uppercase flex items-center justify-center gap-2 cursor-pointer ${
			text === undefined && (leftIcon !== undefined || rightIcon !== undefined)
				? "p-2 rounded-full w-9 h-9"
				: "px-4 rounded-xl h-9"
		} ${
			isTransparent
				? "text-black bg-transparent hover:bg-gray-200"
				: "shadow-lg hover:shadow-xl shadow-primary-light/30 text-white bg-primary hover:bg-primary-light"
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
