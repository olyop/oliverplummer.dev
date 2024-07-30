import clsx from "clsx";
import { navigationPages } from "layout/navigation-config";
import { FC, Fragment, ReactNode, useRef } from "react";
import { NavLink, NonIndexRouteObject, useLocation } from "react-router-dom";

const Navigation: FC<NavigationProps> = ({ className, sidebar = false, onClick }) => {
	const navRef = useRef<HTMLElement>(null);

	const location = useLocation();

	const locationIndex = calculateUnderlineIndex(location.pathname);

	return (
		<nav
			ref={navRef}
			className={clsx("absolute", !sidebar && "flex items-center", className)}
		>
			{navigationPages.map(({ text, icon, path }) => (
				<NavLink
					to={path}
					key={path}
					onClick={onClick}
					className={({ isActive }) =>
						clsx(
							"hover:bg-hover focus:bg-hover group relative flex h-full items-center gap-4 text-2xl font-bold lowercase transition-colors duration-200",
							sidebar ? "justify-start px-4 py-4 md:px-8" : "justify-center px-4 md:px-6",
							isActive && "!bg-primary",
						)
					}
				>
					<Fragment>
						{icon("size-5")}
						<span>{text}</span>
					</Fragment>
				</NavLink>
			))}
			<div
				style={
					sidebar
						? {
								top: calculateUnderlinePercentage(locationIndex),
							}
						: {
								left: calculateUnderlineLeft(navRef.current, locationIndex),
								width: calculateUnderlineWidth(navRef.current, locationIndex),
							}
				}
				className={clsx(
					"bg-primary-accent absolute origin-center transition-all duration-200 group-hover:visible group-hover:scale-x-100 group-focus:scale-x-100",
					sidebar
						? "right-[calc(-0.5rem/2)] top-0 h-[25%] w-2 scale-y-100"
						: "bottom-[calc(-0.5rem/2)] left-0 h-2 w-[25%] scale-x-100",
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

function calculateUnderlinePercentage(index: number) {
	switch (index) {
		case 0:
			return "0%";
		case 1:
			return "25%";
		case 2:
			return "50%";
		case 3:
			return "75%";
		default:
			return "0%";
	}
}

function calculateUnderlineLeft(parent: HTMLElement | null, childIndex: number): number {
	if (parent === null) {
		return 0;
	}

	const child = parent.children.item(childIndex) as HTMLElement | null;

	if (child === null) {
		return 0;
	}

	return child.offsetLeft;
}

function calculateUnderlineWidth(parent: HTMLElement | null, childIndex: number): number {
	if (parent === null) {
		return 0;
	}

	const child = parent.children.item(childIndex) as HTMLElement | null;

	if (child === null) {
		return 0;
	}

	return child.offsetWidth;
}

export interface NavigationPage extends NonIndexRouteObject {
	text: string;
	path: string;
	hideText: boolean;
	icon: (className: string) => ReactNode;
}

export interface NavigationProps {
	className?: string | undefined;
	sidebar?: boolean;
	onClick?: (() => void) | undefined;
}

export default Navigation;
