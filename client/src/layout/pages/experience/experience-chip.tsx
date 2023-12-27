import { FC, ReactNode } from "react";

const ExperienceItemChip: FC<Props> = ({ label, text, icon }) => (
	<div className="relative pt-4 pb-4 pl-5 pr-8 border border-primary rounded-2xl min-w-52">
		<p className="absolute left-[calc(1.25rem_-_0.375rem)] top-[-0.7rem] px-1.5 py-0.5 bg-white text-sm uppercase">
			<b>{label}</b>
		</p>
		<div className="flex items-center gap-3">
			{icon("w-4 h-4")}
			<p>{text}</p>
		</div>
	</div>
);

interface Props {
	label: string;
	text: string;
	icon: (className: string) => ReactNode;
}

export default ExperienceItemChip;
