import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { FC } from "react";

const CarouselButton: FC<CarouselButtonProps> = ({ left, onClick }) => (
	<button
		type="button"
		onClick={onClick}
		className={clsx(
			"bg-primary absolute top-1/2 hidden -translate-y-1/2 transform px-1 py-4 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 sm:block",
			left === "left" ? "left-0" : "right-0",
		)}
	>
		{left === "left" ? (
			<ChevronLeftIcon className="size-8" />
		) : (
			<ChevronRightIcon className="size-8" />
		)}
	</button>
);

interface CarouselButtonProps {
	left: "left" | "right";
	onClick: () => void;
}

export default CarouselButton;
