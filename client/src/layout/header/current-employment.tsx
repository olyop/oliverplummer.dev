import readytech from "assets/readytech.png";
import { FC } from "react";

const CurrentEmployment: FC = () => (
	<div className="w-1/2 select-none overflow-hidden rounded-lg transition-all sm:w-[unset]">
		<div className="flex items-center justify-center justify-items-center gap-1 overflow-visible bg-black pl-1 pr-2 sm:pr-3 md:pl-2">
			<div className="relative h-6 w-6 overflow-visible">
				<div className="active-pulse absolute h-6 w-6 rounded-full border-[3px] border-green-700"></div>
				<div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"></div>
			</div>
			<p className="py-2 font-[monospace] text-xs font-extrabold uppercase leading-none text-white md:text-sm">
				Current Employment
			</p>
		</div>
		<div className="flex items-center justify-center justify-items-center bg-white px-4 py-1.5">
			<img src={readytech} className="w-[10rem]" alt="Ready Tech logo" />
		</div>
	</div>
);

export default CurrentEmployment;
