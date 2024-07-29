/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import clsx from "clsx";
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

	const isFocusedOrHovering = isOpen ? false : isFocused || isHovering;

	return (
		<details
			open={isOpen}
			ref={hoverRef}
			className={clsx(
				"rounded-2xl border transition-all",
				isOpen
					? "bg-primary dark:bg-primary-dark border-primary-accent dark:border-primary-accent-dark dark:border"
					: "bg-elevated dark:bg-elevated-dark border-primary dark:border-primary-dark overflow-hidden",
				isFocusedOrHovering && "bg-hover dark:bg-hover-dark border-primary",
				className,
			)}
		>
			<summary
				title={title}
				ref={focusRef}
				onClick={handleToggle}
				style={{ transitionProperty: "background-color, border-radius, border-color" }}
				className="flex cursor-pointer select-none items-center justify-between px-6 py-4 duration-200 ease-in-out md:px-8"
			>
				<div className="flex items-start gap-3 sm:gap-6">
					{imageNode("mt-[0.2rem] sm:mt-[0.4rem]")}
					<div className="flex flex-col gap-1 sm:gap-2">
						<h1 className="text-2xl sm:text-3xl">
							<b>{title}</b>
						</h1>
						{text && <p className={`font-light ${textClassName ?? ""}`}>{text}</p>}
					</div>
				</div>
				<div className="flex items-center gap-2">
					<h1 className="mt-1 text-xs uppercase sm:text-lg" id={id}>
						{isOpen ? "Close" : "Open"}
					</h1>
					<ChevronDownIcon
						className={`size-8 transition-all duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
					/>
				</div>
			</summary>
			<div
				className={clsx(
					"border-t",
					isOpen
						? "border-primary-accent dark:border-primary-accent-dark"
						: "border-primary dark:border-primary-dark",
				)}
			>
				{isOpen && (
					<div
						className={`bg-elevated dark:bg-elevated-dark rounded-b-2xl p-4 md:p-8 ${contentClassName ?? ""}`}
					>
						{content}
					</div>
				)}
			</div>
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
