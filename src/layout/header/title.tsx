import { FC } from "react";

const Title: FC = () => (
	<div className="relative group">
		<a className="text-6xl transition-colors duration-300 cursor-pointer text-secondary" href="/">
			oliver
		</a>
		<div className="absolute left-0 w-full h-1 transition-all duration-100 origin-center scale-x-0 rounded-lg bg-secondary group-hover:bg-secondary bottom-[-14px] group-hover:scale-x-100" />
	</div>
);

export default Title;
