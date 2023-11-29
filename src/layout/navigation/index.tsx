import { Bars3CenterLeftIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import BriefcaseIcon from "@heroicons/react/20/solid/BriefcaseIcon";
import CheckBadgeIcon from "@heroicons/react/20/solid/CheckBadgeIcon";
import Button from "components/button";
import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

const navigationPages: NavigationPage[] = [
	{
		text: "Skills",
		to: "skills",
		icon: className => <CheckBadgeIcon className={className} />,
	},
	{
		text: "Work",
		to: "work",
		icon: className => <BriefcaseIcon className={className} />,
	},
	{
		text: "Projects",
		to: "projects",
		icon: className => <Bars3CenterLeftIcon className={className} />,
	},
	{
		text: "About",
		to: "about",
		icon: className => <InformationCircleIcon className={className} />,
	},
];

interface NavigationPage {
	text: string;
	to: string;
	icon: (className: string) => ReactNode;
}

const Navigation: FC = () => (
	<nav className="container grid gap-4 md:gap-6 lg:gap-12 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
		{navigationPages.map(({ text, icon, to }) => (
			<NavLink to={to} key={text} className="block group">
				{({ isActive }) => (
					<Button
						text={text}
						ariaLabel={text}
						tabIndex={-1}
						iconClassName="text-primary group-hover:text-white group-focus:text-white duration-300"
						leftIcon={className => icon(`h-6 w-6 ${className} ${isActive ? "!text-white" : "text-primary"}`)}
						textClassName={`tracking-wider group-hover:text-white group-focus:text-white ${
							isActive ? "!text-white" : "text-primary"
						}`}
						className={`py-4 !text-2xl w-full h-full gap-6 select-none group-focus:bg-primary ${
							isActive ? "!bg-gray-950" : "bg-secondary"
						}`}
					/>
				)}
			</NavLink>
		))}
	</nav>
);

export default Navigation;
