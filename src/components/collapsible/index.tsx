import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import { useFocus } from "hooks/use-focus";
import { useHover } from "hooks/use-hover";
import { FC, ReactEventHandler, ReactNode } from "react";

const Collapsible: FC<PropTypes> = ({ isOpen, onToggle, title, imageNode, content, className, contentClassName }) => {
	const [focusRef, isFocused] = useFocus<HTMLElement>();
	const [hoverRef, isHovering] = useHover<HTMLDetailsElement>();

	const handleToggle: ReactEventHandler<HTMLElement> = event => {
		event.preventDefault();
		onToggle(!isOpen);
	};

	const isFocusedOrHovering = !isOpen && (isFocused || isHovering);

	return (
		<details
			title={title}
			open={isOpen}
			ref={hoverRef}
			className={`transition-all border-2 rounded-2xl overflow-hidden shadow-md ${
				isFocusedOrHovering ? "bg-secondary border-primary shadow-lg" : ""
			} ${isOpen ? "bg-primary border-primary shadow-2xl" : ""} ${className ?? ""}`}
		>
			<summary
				ref={focusRef}
				onClick={handleToggle}
				className="flex items-center justify-between px-6 py-4 transition-all duration-300 ease-in-out cursor-pointer select-none"
			>
				<div className="flex items-center gap-5">
					{imageNode(isOpen ? "text-white" : "")}
					<p className={`text-3xl ${isOpen ? "text-white" : ""}`}>{title}</p>
				</div>
				<div className="flex items-center gap-2">
					<p className={`uppercase ${isOpen ? "text-white" : ""}`}>{isOpen ? "Collapse" : "Expand"}</p>
					<ChevronDownIcon
						className={`w-6 h-6 transition-all duration-300 ease-in-out ${isOpen ? "rotate-180 text-white" : ""}`}
					/>
				</div>
			</summary>
			{isOpen && <div className={`p-5 bg-white ${contentClassName}`}>{content}</div>}
		</details>
	);
};

interface PropTypes {
	isOpen: boolean;
	onToggle: (value: boolean) => void;
	title: string;
	imageNode: (className: string) => ReactNode;
	content: ReactNode;
	className?: string;
	contentClassName: string;
}

export default Collapsible;
