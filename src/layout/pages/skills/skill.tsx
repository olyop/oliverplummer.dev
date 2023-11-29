import ShowMoreLess from "components/show-more-less";
import { FC } from "react";

import SkillsImage from "./skills-image";
import { Skill as SkillType } from "./types";

const Skill: FC<PropTypes> = ({ skill }) => (
	<div className="flex flex-col items-center gap-4 px-8 pt-5 pb-8 border rounded-lg">
		<SkillsImage skill={skill} className="!w-12 !h-12" />
		<h2 className="text-xl">
			<b>{skill.label}</b>
		</h2>
		<ShowMoreLess>{skill.description}</ShowMoreLess>
	</div>
);

interface PropTypes {
	skill: SkillType;
}

export default Skill;
