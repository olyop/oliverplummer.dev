import { CodeBracketIcon } from "@heroicons/react/24/outline";
import buyMeACoffeeImagePath from "assets/footer/buy-me-a-coffee.png?background=transparent&fit=contain&aspect=1:1&w=16&allowUpscale=true&format=png";
import githubLogoDarkImagePath from "assets/footer/github-dark.png?background=transparent&fit=contain&aspect=1:1&w=16&allowUpscale=true&format=png";
import githubLogoImagePath from "assets/footer/github.png?background=transparent&fit=contain&aspect=1:1&w=16&allowUpscale=true&format=png";
import instagramImagePath from "assets/footer/instagram.webp?background=transparent&fit=contain&aspect=1:1&w=16&allowUpscale=true&format=png";
import linkedinImagePath from "assets/footer/linkedin.png?background=transparent&fit=contain&aspect=1:1&w=16&allowUpscale=true&format=png";
import npmImagePath from "assets/footer/npm.png?background=transparent&fit=contain&aspect=1:1&w=16&allowUpscale=true&format=png";
import stackOverflowImagePath from "assets/footer/stack-overflow.png?background=transparent&fit=contain&aspect=1:1&w=16&allowUpscale=true&format=png";
import { navigationPages } from "layout/navigation-config";
import { FC, PropsWithChildren } from "react";

import FooterContactButton from "./contact-button";
import { FooterExternalLink, FooterNavLink } from "./links";
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

const Footer: FC = () => (
	<footer className="lg:page:space-y-12 lg:page:pb-8 border-primary w-full border-t">
		<div className="lg:page:p-0 lg:page:mt-8 flex flex-col gap-8 p-4 sm:flex-row sm:gap-16 sm:p-8 sm:py-16 md:gap-24 lg:pl-16">
			<FooterSection title="Connect">
				<FooterExternalLink
					text="LinkedIn"
					leftIcon={linkedinImagePath}
					url="https://www.linkedin.com/in/oliver-plummer-840988234/"
				/>
				<FooterExternalLink
					text="GitHub"
					url="https://github.com/olyop/"
					leftIcon={githubLogoImagePath}
					className="dark:hidden"
				/>
				<FooterExternalLink
					text="GitHub"
					url="https://github.com/olyop/"
					leftIcon={githubLogoDarkImagePath}
					className="hidden dark:block"
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
				<FooterContactButton />
				<FooterExternalLink
					text="Source Code"
					url="https://github.com/olyop/olyop.com"
					leftIcon={className => <CodeBracketIcon className={className} />}
				/>
				<FooterTechStackButton />
				<FooterShareButton />
			</FooterSection>
		</div>
		<div className="lg:page:p-0 space-y-32 p-4 sm:space-y-8 sm:px-8 sm:py-16 lg:pl-16">
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

export default Footer;
