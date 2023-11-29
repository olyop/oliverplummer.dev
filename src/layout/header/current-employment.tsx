import { FC } from "react";
import readytech from "assets/readytech.png";

const CurrentEmployment: FC = () => (
	<button
		className="overflow-hidden transition-all shadow-md rounded-lg cursor-pointer select-none !shadow-black hover:shadow-lg"
		title="Current Employment - Ready Tech"
		aria-label="Current Employment - Ready Tech"
	>
		<div className="flex items-center justify-between gap-1 pl-2 pr-3 overflow-visible bg-black justify-items-center">
			<div className="relative w-6 h-6 overflow-visible">
				<div className="absolute w-6 h-6 border-green-700 rounded-full border-[3px] active-pulse"></div>
				<div className="absolute w-2.5 h-2.5 bg-green-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
			</div>
			<p className="py-2 text-sm font-extrabold leading-none text-white uppercase font-[monospace]">
				Current Employment
			</p>
		</div>
		<div className="flex items-center bg-white justify-items-center justify-center px-4 py-1.5">
			<img src={readytech} className="h-8" />
		</div>
	</button>
);

export default CurrentEmployment;
