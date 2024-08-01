/* eslint-disable jsx-a11y/interactive-supports-focus */
import clsx from "clsx";
import Modal from "components/modal";
import { useModal } from "hooks/use-modal";
import { FC, useEffect, useRef, useState } from "react";

import CarouselButton from "./button";

const Carousel: FC<CarouselProps> = ({ images, className }) => {
	const [viewIndex, setViewIndex] = useState(0);
	const [isModalOpen, openModal, closeModal] = useModal(false);

	const containerRef = useRef<HTMLDivElement | null>(null);
	const imagesRef = useRef<HTMLDivElement | null>(null);

	const handleBack = () => {
		setViewIndex(prevState => (prevState === 0 ? images.length - 1 : prevState - 1));
	};

	const handleNext = () => {
		setViewIndex(prevState => (prevState === images.length - 1 ? 0 : prevState + 1));
	};

	useEffect(
		() => () => {
			setViewIndex(0);
		},
		[],
	);

	return (
		<div
			ref={containerRef}
			className={clsx(
				"group relative cursor-pointer overflow-hidden rounded-2xl",
				className,
			)}
		>
			<div
				role="button"
				onClick={openModal}
				onKeyDown={openModal}
				className="absolute top-0 z-10 block h-full w-full bg-[rgba(0,0,0,0.1)] sm:hidden"
			/>
			<Modal
				hideTitle
				isOpen={isModalOpen}
				onClose={closeModal}
				contentClassName="flex flex-col gap-4 p-4 sm:gap-16 sm:p-16"
				modalClassName="!top-6 !h-[calc(100vh-6rem)] !max-h-[calc(100vh-6rem)] !w-[calc(100vw-4rem)] !max-w-[calc(100vw-4rem)] overflow-x-hidden overflow-y-scroll sm:!top-1/2"
			>
				{images.map(image => (
					<img key={image} alt={image} src={image} className="w-full" />
				))}
			</Modal>
			<div
				ref={imagesRef}
				className="absolute top-0 m-0 grid h-full gap-0 transition-all duration-500"
				style={{
					left: containerRef.current
						? containerRef.current.clientWidth * viewIndex * -1
						: undefined,
					gridTemplateColumns: containerRef.current
						? `repeat(${String(images.length)}, ${String(containerRef.current.clientWidth)}px)`
						: undefined,
				}}
			>
				{images.map((image, index) => (
					<img
						key={image}
						src={image}
						alt={images[index]}
						className="h-full object-cover"
						style={{
							width: containerRef.current ? containerRef.current.clientWidth : undefined,
						}}
					/>
				))}
			</div>
			<CarouselButton left="left" onClick={handleBack} />
			<CarouselButton left="right" onClick={handleNext} />
		</div>
	);
};

interface CarouselProps {
	images: string[];
	className?: string | undefined;
	imageClassName?: string | undefined;
}

export default Carousel;
