import o from "assets/o.png";
import { FC } from "react";

const Title: FC = () => (
	<div className="relative -my-1.5 group">
		<a className="relative pl-10 text-6xl transition-colors duration-300 cursor-pointer text-secondary" href="/">
			<img alt="'O' letter" src={o} className="absolute left-0 w-[2.1rem] h-[2.1rem] top-[1.4rem]" />
			liver
		</a>
		<div className="absolute left-0 w-full h-1 transition-all duration-100 origin-center scale-x-0 rounded-lg bg-secondary group-hover:bg-secondary bottom-[-0.3rem] group-hover:scale-x-100" />
	</div>
);

export default Title;
