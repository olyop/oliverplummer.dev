import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Button from "components/button";
import { FC } from "react";

const CarouselButton: FC<CarouselButtonProps> = ({ left, onClick }) => (
	<Button
		onClick={onClick}
		ariaLabel={left === "left" ? "Previous" : "Next"}
		className={clsx(
			"absolute top-1/2 hidden !h-20 !w-auto -translate-y-1/2 !rounded-none px-2 py-4 opacity-100 shadow-2xl sm:block",
			left === "left" ? "left-0" : "right-0",
		)}
		leftIcon={iconClassName =>
			left === "left" ? (
				<ChevronLeftIcon className={clsx(iconClassName, "size-8")} />
			) : (
				<ChevronRightIcon className={clsx(iconClassName, "size-8")} />
			)
		}
	/>
);

interface CarouselButtonProps {
	left: "left" | "right";
	onClick: () => void;
}

export default CarouselButton;
