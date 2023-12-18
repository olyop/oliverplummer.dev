import { FC, Fragment } from "react";

const ExperienceItemChip: FC<Props> = ({ label, text }) => (
	<p className="px-4 py-2 border shadow rounded-2xl">
		<b>
			<span className="uppercase">{label}</span>
			<Fragment>: </Fragment>
			{text}
		</b>
	</p>
);

interface Props {
	label: string;
	text: string;
}

export default ExperienceItemChip;
