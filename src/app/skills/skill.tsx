import clsx from "clsx";

import { ShowMoreLess } from "@/components/show-more-less";

import { Skill as SkillType } from "./types";

export function Skill({ skill }: SkillProps) {
	return (
		<div className="flex flex-col items-center gap-4 rounded-lg border border-primary px-4 pb-4 pt-5 transition-all duration-300 hover:border-primary-accent sm:px-8 sm:pb-8">
			{skill.image(clsx("!size-12", skill.imageDark && "dark:hidden"))}
			{skill.imageDark && skill.imageDark("!size-12 hidden dark:block")}
			<h3 className="text-xl sm:text-2xl">
				<b>{skill.label}</b>
			</h3>
			<h3 className="text-xs">{determineDateStartedLabel(skill.dateStarted)}</h3>
			<div
				className="h-4 w-24 overflow-hidden rounded-full bg-background shadow"
				title="Skill Level"
			>
				<div
					className={`${determineSkillLevel(skill.level)} h-full rounded-full bg-primary-accent`}
				/>
			</div>
			{skill.description && <ShowMoreLess text={skill.description.trim()} />}
		</div>
	);
}

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

function determineDateStartedLabel(dateStarted: SkillType["dateStarted"]) {
	const now = Date.now();
	const unixTime = dateStarted.getTime();

	if (unixTime + ONE_YEAR > now) {
		return "Learnt recently";
	} else {
		// return years
		const years = Math.floor((now - unixTime) / (1000 * 60 * 60 * 24 * 365));

		return `Learnt ${years.toString()} year${years === 1 ? "" : "s"} ago`;
	}
}

function determineSkillLevel(level: SkillType["level"]) {
	if (level === 2) {
		return "w-1/3";
	} else if (level === 3) {
		return "w-1/2";
	} else if (level === 4) {
		return "w-3/4";
	} else {
		return "w-full";
	}
}

interface SkillProps {
	skill: SkillType;
}
