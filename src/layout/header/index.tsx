import { FC } from "react";

import Title from "./title";
import SiteSettings from "./site-settings";
import CurrentEmployment from "./current-employment";

const Header: FC = () => (
	<header className="container flex items-center justify-between">
		<Title />
		<div className="flex items-center gap-6">
			<SiteSettings />
			<CurrentEmployment />
		</div>
	</header>
);

export default Header;
