import CodeBracketIcon from "@heroicons/react/20/solid/CodeBracketIcon";
import githubLogoImagePath from "assets/footer/github.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import linkedinImagePath from "assets/footer/linkedin.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import stackOverflowImagePath from "assets/footer/stack-overflow.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import { navigationPages } from "layout/navigation-config";
import { FC, PropsWithChildren } from "react";

import { FooterExternalLink, FooterNavLink } from "./footer-links";
import FooterShareButton from "./share-button";
import FooterTechStackButton from "./tech-stack";

const FooterSection: FC<PropsWithChildren & { title: string }> = ({ title, children }) => (
	<div className="flex flex-col gap-4">
		<h3 className="text-xl text-gray-500">{title}</h3>
		<div className="flex flex-col items-start gap-3">{children}</div>
	</div>
);

const Footer: FC = () => (
	<footer className="container flex flex-col gap-16 px-4 text-white sm:px-0">
		<div className="flex flex-col gap-8 sm:flex-row lg:grid lg:grid-cols-[20rem_20rem_1fr]">
			<FooterSection title="Connect">
				<FooterExternalLink text="GitHub" leftIcon={githubLogoImagePath} url="https://github.com/olyop" />
				<FooterExternalLink
					text="LinkedIn"
					leftIcon={linkedinImagePath}
					url="https://www.linkedin.com/in/oliver-plummer-840988234"
				/>
				<FooterExternalLink
					text="Stack Overflow"
					leftIcon={stackOverflowImagePath}
					url="https://stackexchange.com/users/18083424/oly-op"
				/>
			</FooterSection>
			<FooterSection title="Pages">
				{navigationPages.map(page => (
					<FooterNavLink key={page.path} text={page.text} url={page.path} leftIcon={page.icon} />
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
		<p className="text-sm text-gray-500">Copyright © {new Date().getFullYear()} Oliver Plummer</p>
	</footer>
);

export default Footer;
