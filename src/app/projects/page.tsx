import { Page } from "@/components/page";

import { Projects } from "./projects";

export default function ProjectsPage() {
	return (
		<Page
			title="Projects"
			url="https://oliverplummer.com.au/projects"
			childrenClassName="space-y-8"
			text="I have worked on a variety of projects, ranging from small personal projects to large commercial projects. Here are some of the highlights."
		>
			<Projects />
		</Page>
	);
}
