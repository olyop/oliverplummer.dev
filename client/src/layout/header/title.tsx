import { FC } from "react";
import { NavLink } from "react-router-dom";

const Title: FC = () => (
	<NavLink
		to="/"
		className="lg:page:hidden group relative flex h-full items-center text-2xl leading-6 tracking-widest sm:text-3xl sm:leading-[1.875rem]"
	>
		<span className="group-hover:text-primary-accent group-focus:!text-primary-accent lowercase">
			<b>Oliver</b>
		</span>
		<div className="bg-primary-accent absolute bottom-[calc(-0.5rem/2)] left-0 h-2 w-full origin-center scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100" />
	</NavLink>
);

export default Title;
