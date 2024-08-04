import clsx from "clsx";
import { navigationPages } from "layout/navigation-config";
import { CSSProperties, FC, ReactNode, useRef } from "react";
import { NavLink, NonIndexRouteObject, useLocation } from "react-router-dom";

const Navigation: FC<NavigationProps> = ({ className, sidebar, onClick }) => {
	const location = useLocation();
	const navRef = useRef<HTMLElement | null>(null);

	const handleClick = () => {
		document.documentElement.scrollIntoView(true);

		if (onClick) {
			onClick();
		}
	};

	const locationIndex = calculateUnderlineIndex(location.pathname);

	return (
		<nav
			ref={navRef}
			className={clsx(
				"relative grid",
				sidebar === null ? "grid-cols-4" : "grid-rows-4",
				className,
			)}
		>
			{navigationPages.map(({ text, icon, path }) => (
				<NavLink
					to={path}
					key={path}
					onClick={handleClick}
					className={({ isActive }) =>
						clsx(
							"hover:bg-primary focus:bg-primary flex h-[calc(var(--header-height)-1px)] items-center justify-start gap-4 text-2xl",
							sidebar === null ? "justify-center px-4 xl:px-6" : "px-4 py-4 sm:px-6",
							isActive && "bg-hover",
						)
					}
				>
					{icon("size-5")}
					<span className="text-2xl lowercase">
						<b>{text}</b>
					</span>
				</NavLink>
			))}
			<div
				style={calculateUnderlineStyle(sidebar, locationIndex)}
				className={clsx(
					"border-primary-accent pointer-events-none absolute bg-transparent",
					sidebar === null
						? "h-[calc(var(--header-height)+4px)] border-b-8"
						: "left-0 w-[calc(100vw-6rem+4px)] border-b-2 border-r-8 border-t-2 sm:w-[calc(var(--sidebar-width)+4px)]",
				)}
			/>
		</nav>
	);
};

function calculateUnderlineIndex(path: string) {
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

function calculateUnderlineStyle(
	sidebar: boolean | null,
	locationIndex: number,
): CSSProperties {
	if (sidebar === null) {
		return {
			left: `calc(${String(locationIndex)} * 25%)`,
			width: "25%",
		};
	} else {
		return {
			top: `calc((var(--header-height) - 1px) * ${String(locationIndex)})`,
			height: "25%",
		};
	}
}

export interface NavigationPage extends NonIndexRouteObject {
	text: string;
	path: string;
	hideText: boolean;
	icon: (className: string) => ReactNode;
}

export interface NavigationProps {
	className?: string | undefined;
	sidebar: boolean | null;
	onClick?: (() => void) | undefined;
}

export default Navigation;
