import { RefCallback, useCallback, useRef, useState } from "react";

export const useHover = <T extends HTMLElement>() => {
	const previousNode = useRef<T | null>(null);

	const [hovering, setHovering] = useState(false);

	const handleEnter = useCallback(() => {
		setHovering(true);
	}, []);

	const handleLeave = useCallback(() => {
		setHovering(false);
	}, []);

	const ref = useCallback<RefCallback<T>>(
		node => {
			if (previousNode.current?.nodeType === Node.ELEMENT_NODE) {
				previousNode.current.removeEventListener("focus", handleEnter);
				previousNode.current.removeEventListener("blur", handleLeave);
				previousNode.current.removeEventListener("mouseenter", handleEnter);
				previousNode.current.removeEventListener("mouseleave", handleLeave);
			}

			if (node?.nodeType === Node.ELEMENT_NODE) {
				node.addEventListener("focus", handleEnter);
				node.addEventListener("blur", handleLeave);
				node.addEventListener("mouseenter", handleEnter);
				node.addEventListener("mouseleave", handleLeave);
			}

			previousNode.current = node;
		},
		[handleEnter, handleLeave],
	);

	return [ref, hovering] as const;
};
