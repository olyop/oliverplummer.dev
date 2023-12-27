import { RefCallback, useCallback, useRef, useState } from "react";

export const useFocus = <T extends HTMLElement>() => {
	const [focusing, setFocusing] = useState(false);
	const previousNode = useRef<T | null>(null);

	const handleFocus = useCallback(() => {
		setFocusing(true);
	}, []);

	const handleBlur = useCallback(() => {
		setFocusing(false);
	}, []);

	const customRef = useCallback<RefCallback<T>>(
		node => {
			if (previousNode.current?.nodeType === Node.ELEMENT_NODE) {
				previousNode.current.removeEventListener("focus", handleFocus);
				previousNode.current.removeEventListener("blur", handleBlur);
			}

			if (node?.nodeType === Node.ELEMENT_NODE) {
				node.addEventListener("focus", handleFocus);
				node.addEventListener("blur", handleBlur);
			}

			previousNode.current = node;
		},
		[handleFocus, handleBlur],
	);

	return [customRef, focusing] as const;
};
