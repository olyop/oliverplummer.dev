import { FC } from "react";

import Contact from "./contact";
import CurrentEmployment from "./current-employment";
import Title from "./title";

const Header: FC = () => (
	<header className="container flex flex-col items-center justify-between w-full gap-12 px-4 pt-12 sm:pt-8 sm:gap-8 sm:px-0 md:gap-8 md:flex-row">
		<Title />
		<div className="flex flex-row-reverse items-center w-full gap-4 sm:w-[unset] sm:flex-row sm:gap-8">
			<div className="flex flex-row-reverse items-center w-1/2 sm:w-[unset] h-full gap-4 md:flex-row">
				<Contact />
			</div>
			<CurrentEmployment />
		</div>
	</header>
);

export default Header;
