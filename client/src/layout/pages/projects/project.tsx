import ArrowTopRightOnSquareIcon from "@heroicons/react/20/solid/ArrowTopRightOnSquareIcon";
import CodeBracketIcon from "@heroicons/react/20/solid/CodeBracketIcon";
import EyeIcon from "@heroicons/react/20/solid/EyeIcon";
import Button from "components/button";
import Collapsible from "components/collapsible";
import ContentImage from "components/content-image";
import ImageExpand from "components/image-expand";
import { FC, Fragment } from "react";

import { Project as ProjectType } from "./types";

const Project: FC<Props> = ({ isOpen, item, onToggle }) => (
	<Collapsible
		id={item.code}
		title={item.label}
		onToggle={onToggle}
		isOpen={isOpen}
		imageNode={className => <ContentImage contentItem={item} className={className} />}
		text={item.text}
		contentClassName="flex flex-col items-start gap-8"
		content={
			<Fragment>
				<p>{item.description}</p>
				<div>
					<h3 className="mb-2 text-lg">
						<b>Features</b>
					</h3>
					<ul className="list-disc pl-8">
						{item.features.map(feature => (
							<li key={feature}>{feature}</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className="mb-2 text-lg">
						<b>Technologies</b>
					</h3>
					<ul className="list-disc pl-8">
						{item.technologies.map(technology => (
							<li key={technology}>{technology}</li>
						))}
					</ul>
				</div>
				<div className="flex w-full flex-col items-stretch justify-stretch gap-4 sm:flex-row">
					{item.url && (
						<a href={item.url} target="_blank" rel="noreferrer">
							<Button
								text="View Project"
								ariaLabel="View Project"
								className="w-full gap-4 sm:w-[unset]"
								leftIcon={className => <EyeIcon className={className} />}
								rightIcon={className => <ArrowTopRightOnSquareIcon className={className} />}
							/>
						</a>
					)}
					{item.sourceCodeUrl && (
						<a href={item.sourceCodeUrl} target="_blank" rel="noreferrer">
							<Button
								text="Source Code"
								ariaLabel="Source Code"
								className="w-full gap-4 sm:w-[unset]"
								leftIcon={className => <CodeBracketIcon className={className} />}
								rightIcon={className => <ArrowTopRightOnSquareIcon className={className} />}
							/>
						</a>
					)}
				</div>
				<div className="grid grid-cols-1 gap-8 p-4 shadow-2xl sm:grid-cols-2">
					{item.screenshots.map(screeshot => (
						<ImageExpand key={screeshot} url={screeshot} label={item.label} />
					))}
				</div>
			</Fragment>
		}
	/>
);

interface Props {
	item: ProjectType;
	isOpen: boolean;
	onToggle: (value: boolean) => void;
}

export default Project;
