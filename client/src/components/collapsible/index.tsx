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
				"rounded-2xl border transition-colors duration-200",
				isOpen
					? "bg-primary border-primary-accent"
					: "bg-elevated border-primary overflow-hidden",
				isFocusedOrHovering && "bg-hover border-primary",
				className,
			)}
		>
			<summary
				title={title}
				ref={focusRef}
				onClick={handleToggle}
				className="grid cursor-pointer select-none grid-cols-[1fr,3rem] items-center gap-4 px-4 py-4 sm:px-8"
			>
				<div className="flex items-start gap-3 sm:gap-6">
					{imageNode("mt-[0.2rem] sm:mt-[0.4rem]")}
					<div className="flex flex-col gap-1 sm:gap-2">
						<h2 className="text-xl sm:text-3xl">
							<b>{title}</b>
						</h2>
						{text && (
							<p className={clsx("sm:text text-sm font-light", textClassName)}>{text}</p>
						)}
					</div>
				</div>
				<div className="-mt-1 flex flex-col-reverse items-center">
					<h1 className="text-xs uppercase sm:text-lg" id={id}>
						{isOpen ? "Close" : "Open"}
					</h1>
					<ChevronDownIcon className={clsx("size-6", isOpen && "rotate-180")} />
				</div>
			</summary>
			<div
				className={clsx(
					"border-t transition-colors duration-200",
					isOpen ? "border-primary-accent" : "border-primary",
				)}
			>
				{isOpen && (
					<div
						className={`bg-elevated rounded-b-2xl p-4 md:p-8 ${contentClassName ?? ""}`}
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
