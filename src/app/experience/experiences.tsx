"use client";

import { experiences } from "./content";
import { ExperienceItem } from "./experience";

export function Experiences() {
	return experiences.map(item => <ExperienceItem item={item} key={item.code} />);
}
