import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

const isTextClampled = (paragraph: HTMLParagraphElement) => paragraph.scrollHeight > paragraph.clientHeight;

const ShowMoreLess: FC<PropsWithChildren<PropTypes>> = ({ children, className }) => {
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

	return (
		<div>
			<p ref={ref} className={`${showMore ? "" : "line-clamp-3"} ${className ?? ""}`}>
				{children}
			</p>
			{showButton && (
				<button className="text-blue-600" onClick={handleShowMore}>
					{showMore ? "Show less" : "Show more"}
				</button>
			)}
		</div>
	);
};

interface PropTypes {
	className?: string;
}

export default ShowMoreLess;
