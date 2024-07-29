import clsx from "clsx";
import { navigationPages } from "layout/navigation-config";
import { FC, Fragment, ReactNode } from "react";
import { NavLink, NonIndexRouteObject, useLocation } from "react-router-dom";

const Navigation: FC<NavigationProps> = ({ className, sidebar = false, onClick }) => {
	const location = useLocation();

	return (
		<nav className={clsx("absolute", !sidebar && "flex items-center", className)}>
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
								top: determineUnderlinePercentage(location.pathname),
							}
						: {
								left: determineUnderlinePercentage(location.pathname),
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

function determineUnderlinePercentage(path: string) {
	if (path === "/") {
		return "0%";
	} else if (path === "/skills") {
		return "25%";
	} else if (path === "/experience") {
		return "50%";
	} else if (path === "/projects") {
		return "75%";
	} else {
		return "100%";
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
	sidebar?: boolean;
	onClick?: (() => void) | undefined;
}

export default Navigation;
