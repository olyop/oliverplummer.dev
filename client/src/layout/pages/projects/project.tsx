/* eslint-disable jsx-a11y/media-has-caption */
import {
	ArrowTopRightOnSquareIcon,
	BoltIcon,
	CodeBracketIcon,
	EyeIcon,
} from "@heroicons/react/24/outline";
import Button from "components/button";
import Collapsible from "components/collapsible";
import ContentImage from "components/content-image";
import ImageExpand from "components/image-expand";
import { FC, Fragment, PropsWithChildren, ReactNode } from "react";

import { Project as ProjectType } from "./types";

const ProjectSection: FC<PropsWithChildren<ProjectSectionProps>> = ({
	title,
	icon,
	children,
	className,
}) => (
	<div className="space-y-2 sm:space-y-4">
		<div className="flex items-center gap-2 sm:gap-4">
			{icon("size-6")}
			<h3 className="text-2xl">
				<b>{title}</b>
			</h3>
		</div>
		<div className={className}>{children}</div>
	</div>
);

interface ProjectSectionProps {
	title: string;
	icon: (iconClassName: string) => ReactNode;
	className?: string;
}

const Project: FC<Props> = ({ isOpen, item, onToggle }) => (
	<Collapsible
		id={item.code}
		title={item.label}
		onToggle={onToggle}
		isOpen={isOpen}
		imageNode={className => <ContentImage contentItem={item} className={className} />}
		text={item.text}
		contentClassName="space-y-16"
		content={
			<Fragment>
				<p className="text-lg">{item.description}</p>
				<ProjectSection
					title="Technologies"
					icon={iconClassName => <BoltIcon className={iconClassName} />}
					className="grid max-w-[35rem] grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] items-center gap-2"
				>
					{item.technologies.map(technology => (
						<div
							key={technology.code}
							className="border-primary flex items-center justify-center gap-2 rounded-xl border px-2 py-1 shadow-sm"
						>
							{typeof technology.image === "string" ? (
								<img src={technology.image} alt={technology.label} className="size-4" />
							) : (
								technology.image("size-4")
							)}
							<p className="text-nowrap text-sm">{technology.label}</p>
						</div>
					))}
				</ProjectSection>
				<p className="text">{item.description}</p>
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
				<div className="flex w-full flex-col items-stretch justify-stretch gap-4 sm:flex-row">
					{item.url && (
						<a href={item.url} target="_blank" rel="noreferrer">
							<Button
								text="View Project"
								ariaLabel="View Project"
								className="w-full gap-4 sm:w-[unset]"
								leftIcon={className => <EyeIcon className={className} />}
								rightIcon={className => (
									<ArrowTopRightOnSquareIcon className={className} />
								)}
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
								rightIcon={className => (
									<ArrowTopRightOnSquareIcon className={className} />
								)}
							/>
						</a>
					)}
				</div>
				<div className="grid grid-cols-1 gap-8 p-4 shadow-2xl sm:grid-cols-2">
					{item.screencasts.map(screencast => (
						<video key={screencast} controls className="w-full">
							<source src={screencast} type="video/webm" />
						</video>
					))}
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
