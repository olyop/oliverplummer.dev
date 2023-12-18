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
	textClassName,
	disabled,
	childrenNode,
}) => (
	<button
		id={id}
		type={isSubmit ? "submit" : "button"}
		title={text ?? ariaLabel}
		disabled={disabled}
		aria-label={ariaLabel}
		onClick={onClick}
		tabIndex={tabIndex}
		className={`font-bold select-none transition-all ease-in-out duration-200 text-sm uppercase flex items-center justify-center gap-2 cursor-pointer ${
			text === undefined && (leftIcon !== undefined || rightIcon !== undefined)
				? "p-2 rounded-full w-9 h-9"
				: "px-4 rounded-xl h-9"
		} ${
			isTransparent
				? "text-black bg-isTransparent hover:bg-gray-200"
				: "shadow-lg hover:shadow-xl shadow-primary-light/30 text-white bg-primary hover:bg-primary-light"
		}  ${className ?? ""}`}
	>
		{leftIcon && leftIcon(`${spanClassName ?? ""} ${baseIconClassName} ${iconClassName ?? ""}`)}
		{text && <span className={`${spanClassName} ${textClassName}`}>{text}</span>}
		{rightIcon && rightIcon(`${spanClassName ?? ""} ${baseIconClassName} ${iconClassName ?? ""}`)}
		{childrenNode}
	</button>
);

export interface ButtonProps {
	id?: string;
	isTransparent?: boolean;
	isSubmit?: boolean;
	leftIcon?: (className: string) => ReactNode;
	text?: string | undefined;
	ariaLabel: string;
	childrenNode?: ReactNode;
	rightIcon?: (className: string) => ReactNode;
	onClick?: (() => void) | undefined;
	className?: string | undefined;
	spanClassName?: string | undefined;
	iconClassName?: string | undefined;
	textClassName?: string;
	disabled?: boolean;
	tabIndex?: number;
}

export default Button;
