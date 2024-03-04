import { FC } from "react";

import Contact from "./contact";
import CurrentEmployment from "./current-employment";
import Title from "./title";

const Header: FC = () => (
	<header className="container flex w-full flex-col items-center justify-between gap-12 px-4 pt-12 sm:gap-8 sm:px-0 sm:pt-8 md:flex-row md:gap-8">
		<Title />
		<div className="flex w-full flex-row-reverse items-center gap-4 sm:w-[unset] sm:flex-row sm:gap-8">
			<div className="flex h-full w-1/2 flex-row-reverse items-center gap-4 sm:w-[unset] md:flex-row">
				<Contact />
			</div>
			<CurrentEmployment />
		</div>
	</header>
);

export default Header;
