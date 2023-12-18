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
			className={`transition-all border-2 rounded-2xl overflow-hidden shadow-md ${
				isFocusedOrHovering ? "bg-secondary border-primary shadow-lg" : ""
			} ${isOpen ? "bg-primary border-primary shadow-2xl" : ""} ${className ?? ""}`}
		>
			<summary
				title={title}
				ref={focusRef}
				onClick={handleToggle}
				className="flex items-start justify-between px-6 py-4 transition-all duration-300 ease-in-out cursor-pointer select-none"
			>
				<div className="flex items-start gap-6">
					{imageNode(`${isOpen ? "text-white" : ""} mt-[0.4rem]`)}
					<div className="flex flex-col gap-2">
						<h1 className={`text-3xl ${isOpen ? "text-white" : ""}`}>{title}</h1>
						{text && <div>{text}</div>}
					</div>
				</div>
				<div className="flex items-center gap-2 mt-[0.4rem]">
					<h1 className={`uppercase ${isOpen ? "text-white" : ""}`} id={id}>
						{isOpen ? "Collapse" : "Expand"}
					</h1>
					<ChevronDownIcon
						className={`w-6 h-6 transition-all duration-300 ease-in-out ${isOpen ? "rotate-180 text-white" : ""}`}
					/>
				</div>
			</summary>
			<div className={`p-4 md:p-6 bg-white ${contentClassName ?? ""}`}>{content}</div>
		</details>
	);
};

interface Props {
	id: string;
	isOpen: boolean;
	onToggle: (value: boolean) => void;
	title: string;
	text?: ReactNode;
	imageNode: (className: string) => ReactNode;
	content: ReactNode;
	className?: string;
	contentClassName?: string;
}

export default Collapsible;
