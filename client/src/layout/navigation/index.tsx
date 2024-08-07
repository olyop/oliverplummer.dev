import clsx from "clsx";
import { navigationPages } from "layout/navigation-config";
import { FC, ReactNode } from "react";
import { NavLink, NonIndexRouteObject } from "react-router-dom";

import NavigationHighlight from "./highlight";

const Navigation: FC<NavigationProps> = ({ className }) => (
	<nav className={clsx("relative grid grid-rows-4", className)}>
		{navigationPages.map(({ text, icon, path }) => (
			<NavLink
				to={path}
				key={path}
				onClick={handleClick}
				className={({ isActive }) =>
					clsx(
						"hover:bg-primary focus:bg-primary xl:page:px-8 flex h-[calc(var(--header-height)-1px)] items-center justify-start gap-4 px-4 py-4 text-2xl md:px-6",
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
		<NavigationHighlight />
	</nav>
);

function handleClick() {
	document.documentElement.scrollIntoView(true);

	document.documentElement.style.overflowY = "visible";
	document.documentElement.dataset["sidebar"] = "false";
}

export interface NavigationPage extends NonIndexRouteObject {
	text: string;
	path: string;
	hideText: boolean;
	icon: (className: string) => ReactNode;
}

export interface NavigationProps {
	className?: string | undefined;
}

export default Navigation;
