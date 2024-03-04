/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import { useFocus } from "hooks/use-focus";
import { useHover } from "hooks/use-hover";
import { FC, ReactEventHandler, ReactNode } from "react";

const Collapsible: FC<Props> = ({
	id,
	isOpen,
	onToggle,
	title,
	text,
	imageNode,
	content,
	className,
	textClassName,
	contentClassName,
}) => {
	const [focusRef, isFocused] = useFocus<HTMLElement>();
	const [hoverRef, isHovering] = useHover<HTMLDetailsElement>();

	const handleToggle: ReactEventHandler<HTMLElement> = event => {
		event.preventDefault();
		onToggle(!isOpen);
	};

	const isFocusedOrHovering = !isOpen && (isFocused || isHovering);

	return (
		<details
			open={isOpen}
			ref={hoverRef}
			className={`overflow-hidden rounded-2xl border-2 shadow-md transition-all ${
				isFocusedOrHovering ? "bg-secondary border-primary shadow-lg" : ""
			} ${isOpen ? "bg-primary border-primary shadow-2xl" : ""} ${className ?? ""}`}
		>
			<summary
				title={title}
				ref={focusRef}
				onClick={handleToggle}
				className="flex cursor-pointer select-none items-start justify-between px-4 py-3 transition-all duration-300 ease-in-out sm:px-6 sm:py-4"
			>
				<div className="flex items-start gap-3 sm:gap-6">
					{imageNode(`${isOpen ? "text-white" : ""} mt-[0.2rem] sm:mt-[0.4rem]`)}
					<div className="flex flex-col gap-1 sm:gap-2">
						<h1 className={`text-xl sm:text-3xl ${isOpen ? "text-white" : ""}`}>
							<b>{title}</b>
						</h1>
						{text && (
							<p className={`${isOpen ? "text-white" : ""} text-xs font-light sm:text-sm ${textClassName ?? ""}`}>
								{text}
							</p>
						)}
					</div>
				</div>
				<div className="mt-[0.2rem] flex items-center gap-2 sm:mt-[0.4rem]">
					{!isOpen && (
						<h1 className="text-xs uppercase sm:text-lg" id={id}>
							Expand
						</h1>
					)}
					<ChevronDownIcon
						className={`h-6 w-6 transition-all duration-300 ease-in-out ${isOpen ? "rotate-180 text-white" : ""}`}
					/>
				</div>
			</summary>
			<div className={`bg-white p-4 md:p-6 ${contentClassName ?? ""}`}>{content}</div>
		</details>
	);
};

interface Props {
	id: string;
	isOpen: boolean;
	onToggle: (value: boolean) => void;
	title: string;
	text?: ReactNode;
	textClassName?: string;
	imageNode: (className: string) => ReactNode;
	content: ReactNode;
	className?: string;
	contentClassName?: string;
}

export default Collapsible;
