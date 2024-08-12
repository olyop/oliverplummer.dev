import { Page } from "@/components/page";

import { SkillsCategories } from "./skills-categories";

export default function SkillsPage() {
	return (
		<Page
			title="Technical Skills"
			childrenClassName="space-y-8"
			url="https://oliverplummer.com.au/skills"
			text={
				<>
					I have experience with a wide range of technologies, tools, and languages.
					<br />
					Here are some of the key ones I have used.
				</>
			}
		>
			<SkillsCategories />
		</Page>
	);
}
