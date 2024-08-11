import { Collapsible } from "@/components/collapsible";

import { SkillCategoryGrid } from "./skill-category-grid";
import { SkillCategory as SkillCategoryType } from "./types";

export function SkillCategory({ skillCategory }: SkillCategoryProps) {
	return (
		<Collapsible
			id={skillCategory.code}
			title={skillCategory.label}
			imageNode={imageClassName => skillCategory.image(imageClassName)}
			contentClassName="space-y-4 md:space-y-8"
			content={<SkillCategoryGrid skills={skillCategory.skills} />}
		/>
	);
}

interface SkillCategoryProps {
	skillCategory: SkillCategoryType;
}
