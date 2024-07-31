import clsx from "clsx";
import { FC, Fragment, useState } from "react";

import CarouselButton from "./button";

const Carousel: FC<CarouselProps> = ({ images, className }) => {
	const [index, setIndex] = useState(0);

	const handleBack = () => {
		setIndex(prevState => (prevState === 0 ? images.length - 1 : prevState - 1));
	};

	const handleNext = () => {
		setIndex(prevState => (prevState === images.length - 1 ? 0 : prevState + 1));
	};

	return (
		<Fragment>
			<div className={clsx("group relative space-y-2 sm:space-y-4", className)}>
				<img
					src={images[index]}
					alt="carousel"
					className="border-primary group-hover:border-primary-accent cursor-pointer rounded-2xl border transition-all duration-300"
				/>
				<CarouselButton left="left" onClick={handleBack} />
				<CarouselButton left="right" onClick={handleNext} />
			</div>
		</Fragment>
	);
};

interface CarouselProps {
	images: string[];
	className?: string | undefined;
}

export default Carousel;
