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

const ONE_YEAR_MILLISECONDS = 1000 * 60 * 60 * 24 * 365;

const determineDateStartedLabel = (dateStarted: SkillType["dateStarted"]) => {
	const now = Date.now();
	const unixTime = dateStarted.getTime();

	if (unixTime + ONE_YEAR_MILLISECONDS > now) {
		return "Learnt recently";
	} else {
		// return years
		const years = Math.floor((now - unixTime) / (1000 * 60 * 60 * 24 * 365));

		return `Learnt ${years.toString()} year${years === 1 ? "" : "s"} ago`;
	}
};

const Skill: FC<Props> = ({ skill }) => (
	<div className="hover:border-primary-accent border-primary flex flex-col items-center gap-4 rounded-lg border px-4 pb-4 pt-5 sm:px-8 sm:pb-8">
		<ContentImage contentItem={skill} className="!h-12 !w-12" />
		<h2 className="text-xl sm:text-2xl">
			<b>{skill.label}</b>
		</h2>
		<h3 className="text-xs">{determineDateStartedLabel(skill.dateStarted)}</h3>
		<div
			className="bg-background h-4 w-24 overflow-hidden rounded-full shadow"
			title="Skill Level"
		>
			<div
				className={`${determineSkillLevel(skill.level)} bg-primary-accent h-full rounded-full`}
			/>
			h
		</div>
		{skill.description && <ShowMoreLess text={skill.description.trim()} />}
	</div>
);

interface Props {
	skill: SkillType;
}

export default Skill;
