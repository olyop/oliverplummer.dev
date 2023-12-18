import Collapsible from "components/collapsible";
import ContentImage from "components/content-image";
import { FC, Fragment } from "react";

import { determineDateStarted } from "./determine-date-started";
import ExperienceItemChip from "./experience-chip";
import { Experience } from "./types";

const ExperienceItem: FC<Props> = ({ item, isOpen, onToggle }) => (
	<Collapsible
		id={item.code}
		key={item.code}
		isOpen={isOpen}
		title={item.label}
		onToggle={onToggle}
		text={<p className={`${isOpen ? "text-white" : ""} font-light text-sm`}>{determineDateStarted(item)}</p>}
		imageNode={className => <ContentImage contentItem={item} className={className} />}
		contentClassName="flex flex-col items-start gap-8"
		content={
			<Fragment>
				<div className="flex gap-4">
					<ExperienceItemChip label="Role" text={item.role} />
					<ExperienceItemChip label="Industry" text={item.industry} />
				</div>
				<p>{item.description}</p>
				<div className="flex flex-col gap-2">
					<h1 className="text-lg">
						<u>Responsibilities</u>
					</h1>
					<ul className="pl-8 list-disc">
						{item.responsibilities.map(({ code, label, description }) => (
							<li key={code}>
								<p>
									<b>{label}</b>
									<br />
									{description}
								</p>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-lg">
						<u>Learnings</u>
					</h1>
					<ul className="pl-8 list-disc">
						{item.skillsLearned.map(({ code, label, description }) => (
							<li key={code}>
								<p>
									<b>{label}</b>
									<br />
									{description}
								</p>
							</li>
						))}
					</ul>
				</div>
			</Fragment>
		}
	/>
);

interface Props {
	item: Experience;
	isOpen: boolean;
	onToggle: (value: boolean) => void;
}

export default ExperienceItem;
