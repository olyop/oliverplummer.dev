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
				<div className="shadow-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
					{item.screenshots.map(screeshot => (
						<ImageExpand key={screeshot} url={screeshot} label={item.label} />
					))}
				</div>
				<div className="flex flex-col items-stretch w-full gap-4 justify-stretch sm:flex-row">
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
				<p>{item.description}</p>
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
