"use client";

import { useEffect, useRef, useState } from "react";

export function ShowMoreLess({ text, className }: Props) {
	const ref = useRef<HTMLParagraphElement | null>(null);

	const [showMore, setShowMore] = useState(false);
	const [showButton, setShowButton] = useState(false);

	const handleShowMore = () => {
		setShowMore(prevState => !prevState);
	};

	useEffect(() => {
		if (ref.current) {
			setShowButton(isTextClampled(ref.current));
		}
	}, []);

	const buttonText = showMore ? "Show less" : "Show more";

	return (
		<div>
			<p
				ref={ref}
				className={`${showMore ? "" : "line-clamp-3"} ${className ?? ""} sm:text text-sm`}
			>
				{text}
			</p>
			{showButton && (
				<button
					type="button"
					className="text-primary-accent hover:text-primary hover:underline"
					onClick={handleShowMore}
					title={buttonText}
				>
					{buttonText}
				</button>
			)}
		</div>
	);
}

function isTextClampled(paragraph: HTMLParagraphElement) {
	return paragraph.scrollHeight > paragraph.clientHeight;
}

interface Props {
	text: string;
	className?: string;
}
