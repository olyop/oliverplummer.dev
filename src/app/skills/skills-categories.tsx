"use client";

import { skillCategories } from "./content";
import { SkillCategory } from "./skill-category";

export function SkillsCategories() {
	return skillCategories.map(skillCategory => (
		<SkillCategory key={skillCategory.code} skillCategory={skillCategory} />
	));
}
