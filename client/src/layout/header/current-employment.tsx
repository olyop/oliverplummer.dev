import readytech from "assets/readytech.png";
import { FC } from "react";

const CurrentEmployment: FC = () => (
	<div className="overflow-hidden transition-all rounded-lg select-none w-1/2 sm:w-[unset]">
		<div className="flex items-center justify-center gap-1 pl-1 pr-2 overflow-visible bg-black sm:pr-3 md:pl-2 justify-items-center">
			<div className="relative w-6 h-6 overflow-visible">
				<div className="absolute w-6 h-6 border-green-700 rounded-full border-[3px] active-pulse"></div>
				<div className="absolute w-2.5 h-2.5 bg-green-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
			</div>
			<p className="py-2 text-xs font-extrabold leading-none text-white uppercase md:text-sm font-[monospace]">
				Current Employment
			</p>
		</div>
		<div className="flex items-center bg-white justify-items-center justify-center px-4 py-1.5">
			<img src={readytech} className="w-[10rem]" alt="Ready Tech logo" />
		</div>
	</div>
);

export default CurrentEmployment;
