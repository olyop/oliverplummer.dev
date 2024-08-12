import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { ReactNode } from "react";

export function Collapsible({
	title,
	text,
	imageNode,
	content,
	className,
	textClassName,
	contentClassName,
}: CollapsibleProps) {
	return (
		<details
			open
			className={clsx(
				"sm:scroll-mt-[var(--header-height)+2rem)] group scroll-mt-[calc(10rem+2rem)] overflow-hidden rounded-2xl border border-primary bg-hover shadow-lg transition-colors duration-200 open:border-primary-accent open:!bg-hover hover:border-primary-accent hover:bg-primary",
				className,
			)}
		>
			<summary
				title={title}
				className={clsx(
					"flex cursor-pointer select-none justify-between gap-2 px-4 py-4 sm:gap-4 sm:px-6",
					text === undefined ? "items-center" : "items-start",
				)}
			>
				<div
					className={clsx(
						"flex gap-2 sm:gap-6",
						text === undefined ? "items-center" : "items-start",
					)}
				>
					{imageNode(clsx("size-7 sm:size-10", text !== undefined && "mt-1"))}
					<div className="flex flex-col gap-1 sm:gap-2">
						<h2 className="text-2xl sm:text-3xl">
							<b>{title}</b>
						</h2>
						{text && (
							<p className={clsx("sm:text text-sm font-light", textClassName)}>{text}</p>
						)}
					</div>
				</div>
				<div
					className={clsx("flex flex-col items-center", text !== undefined && "mt-1.5")}
				>
					<p className="sm:text text-xs uppercase">
						<span className="block group-open:hidden">Open</span>
						<span className="hidden group-open:block">Close</span>
					</p>
					<ChevronDownIcon className="size-6 group-open:rotate-180" />
				</div>
			</summary>
			<div
				className={clsx(
					"border-t border-primary-accent bg-elevated transition-colors duration-200",
				)}
			>
				<div className={`rounded-b-2xl bg-elevated p-4 md:p-8 ${contentClassName ?? ""}`}>
					{content}
				</div>
			</div>
		</details>
	);
}

interface CollapsibleProps {
	id: string;
	title: string;
	text?: ReactNode;
	textClassName?: string;
	imageNode: (className: string) => ReactNode;
	content: ReactNode;
	className?: string;
	contentClassName?: string;
}
