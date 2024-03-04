import o from "assets/o.png";
import { FC } from "react";

const Title: FC = () => (
	<div className="group relative -my-1.5">
		<a className="text-secondary relative cursor-pointer pl-10 text-6xl transition-colors duration-300" href="/">
			<img alt="'O' letter" src={o} className="absolute left-0 top-[1.4rem] h-[2.1rem] w-[2.1rem]" />
			liver
		</a>
		<div className="bg-secondary group-hover:bg-secondary absolute bottom-[-0.3rem] left-0 h-1 w-full origin-center scale-x-0 rounded-lg transition-all duration-100 group-hover:scale-x-100" />
	</div>
);

export default Title;
