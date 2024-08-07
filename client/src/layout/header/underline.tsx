import { CSSProperties, FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HeaderUnderline: FC = () => {
	const location = useLocation();

	const [style, setStyle] = useState<CSSProperties | null>(null);

	useEffect(() => {
		setStyle(calculateStyle(location.pathname));
	}, [location.pathname]);

	if (!style) return null;

	return (
		<div
			style={style}
			className="bg-primary-accent lg:page:block absolute -bottom-1 hidden h-2"
		/>
	);
};

function calculateStyle(path: string): CSSProperties | null {
	if (path === "/") {
		const element = document.getElementById("nav-");

		return {
			left: 0,
			width: element?.clientWidth,
		};
	} else if (path === "/skills") {
		const element = document.getElementById("nav-skills");

		return {
			left: element?.offsetLeft,
			width: element?.clientWidth,
		};
	} else if (path === "/experience") {
		const element = document.getElementById("nav-experience");

		return {
			left: element?.offsetLeft,
			width: element?.clientWidth,
		};
	} else if (path === "/projects") {
		const element = document.getElementById("nav-projects");

		return {
			left: element?.offsetLeft,
			width: element?.clientWidth,
		};
	} else {
		return null;
	}
}

export default HeaderUnderline;
