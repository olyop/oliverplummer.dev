import { Page } from "@/components/page";

import { Experiences } from "./experiences";

export default function ExperiencePage() {
	return (
		<Page
			title="Experience"
			url="https://oliverplummer.com.au/experience"
			childrenClassName="space-y-8"
			text={
				<>
					I have worked in a variety of roles across different industries.
					<br />
					Here are some of the highlights.
				</>
			}
		>
			<Experiences />
		</Page>
	);
}
