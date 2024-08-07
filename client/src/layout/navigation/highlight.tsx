import { CSSProperties, FC } from "react";
import { useLocation } from "react-router-dom";

const NavigationHighlight: FC = () => {
	const location = useLocation();

	const locationIndex = determineIndex(location.pathname);

	return (
		<div
			style={calculateStyle(locationIndex)}
			className="border-primary-accent sidebar:block lg:page:hidden absolute hidden h-1/4 w-[calc(100vw-6rem+4px)] border-y-2 border-r-8 bg-transparent sm:w-[calc(var(--sidebar-width)+4px)] lg:block"
		/>
	);
};

function determineIndex(path: string) {
	if (path === "/") {
		return 0;
	} else if (path === "/skills") {
		return 1;
	} else if (path === "/experience") {
		return 2;
	} else if (path === "/projects") {
		return 3;
	} else {
		return 0;
	}
}

function calculateStyle(locationIndex: number): CSSProperties {
	return {
		top: `calc((var(--header-height) - 1px) * ${String(locationIndex)})`,
	};
}

export default NavigationHighlight;
