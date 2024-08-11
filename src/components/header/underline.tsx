import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";

export function HeaderUnderline() {
	const pathname = usePathname();

	const [style, setStyle] = useState<CSSProperties | null>(null);

	useEffect(() => {
		setStyle(calculateStyle(pathname));
	}, [pathname]);

	if (!style) return null;

	return (
		<div
			style={style}
			className="absolute -bottom-1 hidden h-2 bg-primary-accent lg:page:block"
		/>
	);
}

function calculateStyle(path: string): CSSProperties | null {
	if (path === "/") {
		const element = document.getElementById("nav-about");

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
