/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useFocus } from "hooks/use-focus";
import { useHasMounted } from "hooks/use-has-mounted";
import { useHover } from "hooks/use-hover";
import { FC, ReactEventHandler, ReactNode, useEffect, useRef } from "react";

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
	const hasMounted = useHasMounted();
	const detailsRef = useRef<HTMLDetailsElement>(null);
	const [focusRef, isFocused] = useFocus<HTMLElement>();
	const [hoverRef, isHovering] = useHover<HTMLDetailsElement>();

	const handleToggle: ReactEventHandler<HTMLElement> = event => {
		event.preventDefault();
		onToggle(!isOpen);
	};

	const isFocusedOrHovering = isOpen ? false : isFocused || isHovering;

	useEffect(() => {
		if (!hasMounted) return;
		if (!isOpen) return;
		if (!detailsRef.current) return;

		detailsRef.current.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
		});
	}, [isOpen]);

	return (
		<details
			open={isOpen}
			ref={node => {
				hoverRef(node);
				// @ts-expect-error
				detailsRef.current = node;
			}}
			className={clsx(
				"sm:scroll-mt-[var(--header-height)+2rem)] scroll-mt-[calc(10rem+2rem)] rounded-2xl border transition-all duration-200",
				isOpen
					? "bg-primary border-primary-accent shadow-lg"
					: "bg-elevated border-primary overflow-hidden",
				isFocusedOrHovering && "bg-hover border-primary shadow-lg",
				className,
			)}
		>
			<summary
				title={title}
				ref={focusRef}
				onClick={handleToggle}
				className={clsx(
					"grid cursor-pointer select-none grid-cols-[1fr,3rem] gap-4 rounded-2xl px-4 py-4 sm:px-6",
					text === undefined ? "items-center" : "items-start",
				)}
			>
				<div className="flex items-center gap-3 sm:items-start sm:gap-6">
					{imageNode("size-7 sm:size-10")}
					<div className="flex flex-col gap-1 sm:gap-2">
						<h2 className="text-2xl sm:text-3xl">
							<b>{title}</b>
						</h2>
						{text && (
							<p className={clsx("sm:text text-sm font-light", textClassName)}>{text}</p>
						)}
					</div>
				</div>
				<div className="mt-1.5 flex flex-col items-center rounded-2xl">
					<p className="sm:text text-xs uppercase" id={id}>
						{isOpen ? "Close" : "Open"}
					</p>
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
