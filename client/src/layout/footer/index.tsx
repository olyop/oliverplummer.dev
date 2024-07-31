import { CodeBracketIcon } from "@heroicons/react/24/outline";
import buyMeACoffeeImagePath from "assets/footer/buy-me-a-coffee.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import githubLogoDarkImagePath from "assets/footer/github-dark.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import githubLogoImagePath from "assets/footer/github.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import instagramImagePath from "assets/footer/instagram.webp?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import linkedinImagePath from "assets/footer/linkedin.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import npmImagePath from "assets/footer/npm.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import stackOverflowImagePath from "assets/footer/stack-overflow.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import clsx from "clsx";
import { navigationPages } from "layout/navigation-config";
import { FC, PropsWithChildren } from "react";
import { useDarkMode } from "usehooks-ts";

import { FooterExternalLink, FooterNavLink } from "./footer-links";
import FooterShareButton from "./share-button";
import FooterTechStackButton from "./tech-stack";

const FooterSection: FC<PropsWithChildren & { title: string }> = ({
	title,
	children,
}) => (
	<div className="flex flex-col gap-4">
		<h3 className="text-xl sm:text-2xl">
			<b>{title}</b>
		</h3>
		<div className="flex flex-col items-start gap-3">{children}</div>
	</div>
);

const Footer: FC<FooterProps> = ({ sidebar }) => {
	const { isDarkMode } = useDarkMode();
	return (
		<footer
			className={clsx(
				"mr-[var(--scrollbar-width)] w-full pb-[calc(2*var(--header-height))]",
				sidebar === null && "space-y-4 pb-8 md:space-y-8",
			)}
		>
			<div
				className={clsx(
					"border-primary flex flex-col gap-8 sm:flex-row sm:gap-16",
					sidebar === null
						? "rounded-2xl border p-8"
						: "border-b border-t p-4 sm:p-8 lg:pl-12",
				)}
			>
				<FooterSection title="Connect">
					<FooterExternalLink
						text="LinkedIn"
						leftIcon={linkedinImagePath}
						url="https://www.linkedin.com/in/oliver-plummer-840988234/"
					/>
					<FooterExternalLink
						text="GitHub"
						url="https://github.com/olyop/"
						leftIcon={isDarkMode ? githubLogoDarkImagePath : githubLogoImagePath}
					/>
					<FooterExternalLink
						text="npm"
						leftIcon={npmImagePath}
						url="https://www.npmjs.com/~oly_op"
					/>
					<FooterExternalLink
						text="Instagram"
						leftIcon={instagramImagePath}
						url="https://www.instagram.com/oly_op/"
					/>
					<FooterExternalLink
						text="Stack Overflow"
						leftIcon={stackOverflowImagePath}
						url="https://stackexchange.com/users/18083424/oly-op"
					/>
					<FooterExternalLink
						text="Buy Me A Coffee"
						leftIcon={buyMeACoffeeImagePath}
						url="https://buymeacoffee.com/oliverplummer"
					/>
				</FooterSection>
				<FooterSection title="Pages">
					{navigationPages.map(page => (
						<FooterNavLink
							key={page.path}
							text={page.text}
							url={page.path}
							leftIcon={page.icon}
						/>
					))}
				</FooterSection>
				<FooterSection title="About">
					<FooterExternalLink
						text="Source Code"
						url="https://github.com/olyop/olyop.com"
						leftIcon={className => <CodeBracketIcon className={className} />}
					/>
					<FooterTechStackButton />
					<FooterShareButton />
				</FooterSection>
			</div>
			<div
				className={clsx(
					"border-primary space-y-32 sm:space-y-8",
					sidebar === null
						? "rounded-2xl border p-8"
						: "mt-8 p-4 sm:mt-0 sm:p-8 lg:pl-12",
				)}
			>
				<p className="text-sm">
					<b>
						<i>
							Custom built website, designed and developed by Oliver Plummer.
							<br /> Built with React, TypeScript, TailwindCSS, and Vite served by AWS
							CloudFront.
						</i>
					</b>
				</p>
				<p className="text-primary-accent">
					Copyright © {new Date().getFullYear()} Oliver Plummer
				</p>
			</div>
		</footer>
	);
};

export interface FooterProps {
	sidebar: boolean | null;
}

export default Footer;
