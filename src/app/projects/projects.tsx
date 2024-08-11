"use client";

import { projects } from "./content";
import { Project } from "./project";

export function Projects() {
	return projects.map(project => <Project key={project.code} item={project} />);
}
