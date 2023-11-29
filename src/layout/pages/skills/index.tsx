import Collapsible from "components/collapsible";
import { FC, useState } from "react";

import skillCategories from "./content";
import Skill from "./skill";
import SkillsImage from "./skills-image";

const Skills: FC = () => {
	const [openSection, setOpenSection] = useState<string | null>(null);

	const handleSectionToggle = (section: string) => (value: boolean) => {
		setOpenSection(value ? section : null);
	};

	return (
		<div>
			<p className="mb-10 text">
				A complete list of all the <b>skills & technologies</b> I have experience with..
			</p>
			<div className="flex flex-col gap-10">
				{skillCategories.map((skillCategory, index) => {
					const isOpen = openSection === skillCategory.label;
					return (
						<Collapsible
							key={skillCategory.label}
							isOpen={isOpen}
							onToggle={handleSectionToggle(skillCategory.label)}
							title={skillCategory.label}
							imageNode={className => <SkillsImage skill={skillCategory} className={className} />}
							className={isOpen ? (index === skillCategories.length - 1 ? "" : "mb-12") : undefined}
							contentClassName="grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-5"
							content={skillCategory.skills.map(skill => (
								<Skill key={skill.label} skill={skill} />
							))}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
