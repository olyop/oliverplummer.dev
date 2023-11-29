import { FC, ReactNode } from "react";

const baseIconClassName = "h-5 w-5";

const Button: FC<ButtonPropTypes> = ({
	id,
	transparent = false,
	isSubmit = false,
	leftIcon,
	text,
	ariaLabel,
	rightIcon,
	onClick,
	tabIndex,
	className,
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
		className={`${
			text === undefined && (leftIcon !== undefined || rightIcon !== undefined)
				? "p-2 rounded-full w-9 h-9"
				: "px-2 h-9"
		} font-bold rounded-xl ${
			transparent
				? "text-black bg-transparent hover:bg-gray-200 focus-visible:bg-gray-200"
				: disabled
				  ? "cursor-not-allowed text-gray-500 bg-gray-200 !shadow-none"
				  : "cursor-pointer text-secondary bg-primary-dark hover:bg-primary focus-visible:bg-primary shadow !shadow-black"
		} text-sm uppercase flex items-center justify-center gap-2 ${transparent ? "" : "shadow-sm"} ${
			disabled ? "" : "hover:shadow-lg focus-visible:shadow-lg"
		} select-none transition-all ease-in-out duration-300 items-center ${className ?? ""}`}
	>
		{leftIcon && leftIcon(`${baseIconClassName} ${iconClassName ?? ""}`)}
		{text &&
			(textClassName ? (
				<span className={` transition-all ease-in-out duration-300 ${textClassName}`}>{text}</span>
			) : (
				text
			))}
		{rightIcon && rightIcon(`${baseIconClassName} ${iconClassName ?? ""}`)}
		{childrenNode}
	</button>
);

export interface ButtonPropTypes {
	id?: string;
	transparent?: boolean;
	isSubmit?: boolean;
	leftIcon?: (className: string) => ReactNode;
	text?: string | undefined;
	ariaLabel: string;
	childrenNode?: ReactNode;
	rightIcon?: (className: string) => ReactNode;
	onClick?: (() => void) | undefined;
	className?: string | undefined;
	iconClassName?: string | undefined;
	textClassName?: string;
	disabled?: boolean;
	tabIndex?: number;
}

export default Button;
