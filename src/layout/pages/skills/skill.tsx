import ShowMoreLess from "components/show-more-less";
import { FC } from "react";

import ContentImage from "../../../components/content-image";
import { Skill as SkillType } from "./types";

const determineSkillLevel = (level: SkillType["level"]) => {
	if (level === 2) {
		return "w-1/3";
	} else if (level === 3) {
		return "w-1/2";
	} else if (level === 4) {
		return "w-3/4";
	} else {
		return "w-full";
	}
};

const SIX_MONTHS = 1000 * 60 * 60 * 24 * 30 * 6;

const determineDateStartedLabel = (dateStarted: SkillType["dateStarted"]) => {
	const now = Date.now();
	const unixTime = dateStarted.getTime();

	if (unixTime + SIX_MONTHS > now) {
		return "Learnt recently";
	} else {
		// return years
		const years = Math.floor((now - unixTime) / (1000 * 60 * 60 * 24 * 365));

		return `Learnt ${years} year${years === 1 ? "" : "s"} ago`;
	}
};

const Skill: FC<Props> = ({ skill }) => (
	<div className="flex flex-col items-center gap-4 px-8 pt-5 pb-8 transition-colors border rounded-lg hover:border-primary">
		<ContentImage contentItem={skill} className="!w-12 !h-12" />
		<h2 className="text-2xl">
			<b>{skill.label}</b>
		</h2>
		<h3 className="text-xs">{determineDateStartedLabel(skill.dateStarted)}</h3>
		<div className="w-24 h-4 overflow-hidden bg-gray-200 rounded-full shadow" title="Skill Level">
			<div className={`${determineSkillLevel(skill.level)} h-full bg-gray-400 rounded-full`} />h
		</div>
		{skill.description && <ShowMoreLess text={skill.description.trim()} />}
	</div>
);

interface Props {
	skill: SkillType;
}

export default Skill;
