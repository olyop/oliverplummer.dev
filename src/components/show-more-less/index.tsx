import { FC, useEffect, useRef, useState } from "react";

const isTextClampled = (paragraph: HTMLParagraphElement) => paragraph.scrollHeight > paragraph.clientHeight;

const ShowMoreLess: FC<Props> = ({ text, className }) => {
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
			<p ref={ref} className={`${showMore ? "" : "line-clamp-3"} ${className ?? ""}`}>
				{text}
			</p>
			{showButton && (
				<button
					className="text-blue-600 hover:text-blue-800 hover:underline"
					onClick={handleShowMore}
					title={buttonText}
				>
					{buttonText}
				</button>
			)}
		</div>
	);
};

interface Props {
	text: string;
	className?: string;
}

export default ShowMoreLess;
