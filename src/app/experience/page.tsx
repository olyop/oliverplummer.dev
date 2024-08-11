import { Page } from "@/components/page";

import { Experiences } from "./experiences";

export default function ExperiencePage() {
	return (
		<Page
			title="Experience"
			url="https://oliverplummer.com.au/experience"
			text="I have worked in a variety of roles across different industries. Here are some of the highlights."
			childrenClassName="space-y-8"
		>
			<Experiences />
		</Page>
	);
}
