import { FC } from "react";

import { SkillBase } from "./types";

const SkillsImage: FC<{ skill: SkillBase; className?: string }> = ({ skill, className }) => {
	const classNameWithProp = `w-6 h-6 ${className ?? ""}`;
	return (
		<>
			{typeof skill.image === "string" ? (
				<img src={skill.image} alt={skill.label} className={classNameWithProp} />
			) : (
				skill.image(classNameWithProp)
			)}
		</>
	);
};

export default SkillsImage;
