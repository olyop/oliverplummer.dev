"use client";

/* eslint-disable jsx-a11y/interactive-supports-focus */
import clsx from "clsx";
import { Fragment, useEffect, useRef, useState } from "react";

import { Modal } from "@/components/modal";
import { useModal } from "@/hooks/use-modal";
import { ContentTypeImage } from "@/types";

import { CarouselButton } from "./button";

export function Carousel({ images, className }: CarouselProps) {
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

	const showLeft = viewIndex !== 0;
	const showRight = viewIndex !== images.length - 1;

	return (
		<div
			ref={containerRef}
			className={clsx(
				"group relative cursor-pointer overflow-hidden rounded-2xl shadow-xl",
				className,
			)}
		>
			<div
				role="button"
				onClick={openModal}
				onKeyDown={openModal}
				className="absolute top-0 z-10 block h-full w-full bg-[rgba(0,0,0,0.1)] sm:hidden"
			/>
			<CarouselButton
				left="left"
				onClick={handleBack}
				className={clsx("opacity-0", showLeft ? "opacity-100" : "opacity-0")}
			/>
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
					<Fragment key={index}>{image("w-full h-full object-cover")}</Fragment>
				))}
			</div>
			<CarouselButton
				left="right"
				onClick={handleNext}
				className={clsx("opacity-0", showRight ? "opacity-100" : "opacity-0")}
			/>
			<Modal
				hideTitle
				isOpen={isModalOpen}
				onClose={closeModal}
				contentClassName="flex flex-col gap-4 p-4 sm:gap-16 sm:p-16"
				modalClassName="!top-6 !h-[calc(100vh-6rem)] !max-h-[calc(100vh-6rem)] !w-[calc(100vw-4rem)] !max-w-[calc(100vw-4rem)] overflow-x-hidden overflow-y-scroll sm:!top-1/2"
			/>
		</div>
	);
}

interface CarouselProps {
	images: ContentTypeImage[];
	className?: string | undefined;
	imageClassName?: string | undefined;
}
