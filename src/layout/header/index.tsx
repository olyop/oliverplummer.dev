import { FC } from "react";

import Contact from "./contact";
import CurrentEmployment from "./current-employment";
import SiteSettings from "./site-settings";
import Title from "./title";

const Header: FC = () => (
	<header className="container flex flex-col items-center justify-between gap-6 md:gap-8 md:flex-row">
		<Title />
		<div className="flex flex-row-reverse items-center gap-8 md:flex-row">
			<div className="flex flex-row-reverse items-center h-full gap-4 md:flex-row">
				<SiteSettings />
				<Contact />
			</div>
			<CurrentEmployment />
		</div>
	</header>
);

export default Header;
