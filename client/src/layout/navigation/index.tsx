import clsx from "clsx";
import { navigationPages } from "layout/navigation-config";
import { FC, Fragment, ReactNode } from "react";
import { NavLink, NonIndexRouteObject } from "react-router-dom";

const Navigation: FC<NavigationProps> = ({ className, sidebar = false, onClick }) => (
	<nav className={className}>
		{navigationPages.map(({ text, icon, path }) => (
			<NavLink
				to={path}
				key={path}
				onClick={onClick}
				className={({ isActive }) =>
					clsx(
						"hover:bg-hover dark:hover:bg-hover-dark focus:bg-hover dark:focus:bg-hover-dark group relative flex h-full items-center gap-4 text-2xl font-bold lowercase transition-colors duration-100",
						sidebar ? "px-4 py-4 md:px-8" : "px-4 md:px-8",
						isActive && "!bg-primary dark:!bg-primary-dark",
					)
				}
			>
				{({ isActive }) => (
					<Fragment>
						{icon("size-5")}
						<span>{text}</span>
						<div
							className={clsx(
								"bg-primary-accent dark:bg-primary-accent-dark invisible absolute origin-center transition-all group-hover:visible group-hover:scale-x-100 group-focus:scale-x-100",
								isActive &&
									clsx(
										"bg-primary-accent dark:bg-primary-accent-dark !visible",
										sidebar ? "scale-y-100" : "scale-x-100",
									),
								sidebar
									? "right-[calc(-0.25rem/2)] top-0 h-full w-1 scale-y-0"
									: "bottom-[calc(-0.25rem/2)] left-0 h-1 w-full scale-x-0",
							)}
						/>
					</Fragment>
				)}
			</NavLink>
		))}
	</nav>
);

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
