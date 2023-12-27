import Button from "components/button";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { navigationPages } from "layout/navigation-config";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const Navigation: FC = () => {
	const breakpoint = useBreakpoint();
	const isTinyOrSmall = breakpoint === Breakpoint.TINY || breakpoint === Breakpoint.SMALL;
	return (
		<nav className="container grid gap-4 px-4 sm:px-0 md:gap-6 lg:gap-8 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-[6rem_1fr_1fr_1fr] lg:grid-rows-1">
			{navigationPages.map(({ text, icon, path, hideText }) => (
				<NavLink to={path} key={path}>
					{({ isActive }) => (
						<Button
							tabIndex={-1}
							ariaLabel={text}
							textClassName="tracking-wider"
							text={isTinyOrSmall ? text : hideText ? undefined : text}
							leftIcon={className => icon(`h-6 w-6 ${className}`)}
							className={`py-3 md:py-4 !text-2xl w-full h-full gap-6 select-none ${
								isActive ? "bg-primary-dark !text-white" : "bg-secondary !text-primary hover:!text-white"
							}`}
						/>
					)}
				</NavLink>
			))}
		</nav>
	);
};

export default Navigation;
