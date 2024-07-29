import { FC } from "react";

const Title: FC = () => (
	<a
		href="/"
		id="title"
		className="hover:text-primary-accent dark:hover:text-primary-accent-dark focus:text-primary-accent dark:focus:text-primary-accent-dark group relative flex h-full items-center text-4xl lowercase tracking-[0.6rem] transition-colors duration-100"
	>
		<span className="mb-1">Oliver</span>
		<div className="bg-primary-accent dark:bg-primary-accent-dark absolute bottom-[-2px] left-0 h-[3px] w-full origin-center scale-x-0 transition-all group-hover:scale-x-100 group-focus:scale-x-100" />
	</a>
);

export default Title;
