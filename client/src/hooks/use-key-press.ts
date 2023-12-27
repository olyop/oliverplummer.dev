import { useEffect, useState } from "react";

export const useKeyPress = (targetKey: KeyboardEvent["key"]) => {
	let prevKey = "";

	const [keyPressed, setKeyPressed] = useState(false);

	const downHandler = (event: KeyboardEvent) => {
		if (prevKey === targetKey) return;
		if (event.key === targetKey) {
			event.preventDefault();
			setKeyPressed(true);
			prevKey = event.key;
		}
	};

	const upHandler = (event: KeyboardEvent) => {
		if (event.key === targetKey) {
			event.preventDefault();
			setKeyPressed(false);
			prevKey = "";
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", downHandler);
		window.addEventListener("keyup", upHandler);
		return () => {
			window.removeEventListener("keydown", downHandler);
			window.removeEventListener("keyup", upHandler);
		};
	}, []);

	return keyPressed;
};
