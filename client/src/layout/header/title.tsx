import { FC } from "react";

const Title: FC = () => (
	<a
		href="/"
		id="title"
		className="hover:text-primary-accent focus:text-primary-accent group relative flex h-full items-center pt-[2px] text-[2.75rem] font-light lowercase tracking-[0.6rem]"
	>
		<span className="mb-1">Oliver</span>
		<div className="bg-primary-accent absolute bottom-[calc(-0.5rem/2)] left-0 h-2 w-full origin-center scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-focus:scale-x-100" />
	</a>
);

export default Title;
