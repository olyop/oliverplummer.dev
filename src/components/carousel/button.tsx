import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import { Button } from "@/components/button";

export function CarouselButton({ left, onClick, className }: CarouselButtonProps) {
	return (
		<Button
			onClick={onClick}
			ariaLabel={left === "left" ? "Previous" : "Next"}
			className={clsx(
				"absolute top-1/2 z-30 hidden !h-20 !w-auto -translate-y-1/2 !rounded-none px-2 py-4 shadow-2xl sm:block",
				left === "left" ? "left-0" : "right-0",
				className,
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
}

interface CarouselButtonProps {
	left: "left" | "right";
	onClick: () => void;
	className: string;
}
