import {
	BriefcaseIcon,
	CheckCircleIcon,
	CodeBracketIcon,
	InformationCircleIcon,
	NumberedListIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { PropsWithChildren } from "react";

import buyMeACoffeeLogo from "@/assets/footer/buy-me-a-coffee.png";
import githubLogoDarkLogo from "@/assets/footer/github-dark.png";
import githubLogoLogo from "@/assets/footer/github.png";
import instagramLogo from "@/assets/footer/instagram.webp";
import linkedinLogo from "@/assets/footer/linkedin.png";
import npmLogo from "@/assets/footer/npm.png";
import stackOverflowLogo from "@/assets/footer/stack-overflow.png";

import { FooterContactButton } from "./contact-button";
import { FooterExternalLink, FooterNavLink } from "./links";
import { FooterShareButton } from "./share-button";
import { FooterTechStackButton } from "./tech-stack";

export function Footer() {
	return (
		<footer className="w-full border-t border-primary lg:page:space-y-12 lg:page:pb-8">
			<div className="flex flex-col gap-8 p-4 sm:flex-row sm:gap-16 sm:p-8 sm:py-16 md:gap-24 lg:pl-16 lg:page:mt-8 lg:page:p-0">
				<FooterSection title="Connect">
					<FooterExternalLink
						text="LinkedIn"
						url="https://www.linkedin.com/in/oliver-plummer-840988234/"
						leftIcon={className => (
							<Image
								width={16}
								height={16}
								className={className}
								alt="LinkedIn logo"
								src={linkedinLogo}
							/>
						)}
					/>
					<FooterExternalLink
						text="GitHub"
						url="https://github.com/olyop/"
						className="dark:hidden"
						leftIcon={className => (
							<Image
								width={16}
								height={16}
								className={className}
								alt="GitHub logo"
								src={githubLogoLogo}
							/>
						)}
					/>
					<FooterExternalLink
						text="GitHub"
						url="https://github.com/olyop/"
						className="hidden dark:block"
						leftIcon={className => (
							<Image
								width={16}
								height={16}
								className={className}
								alt="GitHub logo"
								src={githubLogoDarkLogo}
							/>
						)}
					/>
					<FooterExternalLink
						text="npm"
						url="https://www.npmjs.com/~oly_op"
						leftIcon={className => (
							<Image
								width={16}
								height={16}
								className={className}
								alt="NPM logo"
								src={npmLogo}
							/>
						)}
					/>
					<FooterExternalLink
						text="Instagram"
						url="https://www.instagram.com/oly_op/"
						leftIcon={className => (
							<Image
								width={16}
								height={16}
								className={className}
								alt="Instagram logo"
								src={instagramLogo}
							/>
						)}
					/>
					<FooterExternalLink
						text="Stack Overflow"
						url="https://stackexchange.com/users/18083424/oly-op"
						leftIcon={className => (
							<Image
								width={16}
								height={16}
								className={className}
								alt="Stack Overflow logo"
								src={stackOverflowLogo}
							/>
						)}
					/>
					<FooterExternalLink
						text="Buy Me A Coffee"
						url="https://buymeacoffee.com/oliverplummer"
						leftIcon={className => (
							<Image
								width={16}
								height={16}
								className={className}
								alt="Buy Me A Coffee logo"
								src={buyMeACoffeeLogo}
							/>
						)}
					/>
				</FooterSection>
				<FooterSection title="Pages">
					<FooterNavLink
						text="About"
						url="/"
						leftIcon={className => <InformationCircleIcon className={className} />}
					/>
					<FooterNavLink
						text="Skills"
						url="/skills"
						leftIcon={className => <CheckCircleIcon className={className} />}
					/>
					<FooterNavLink
						text="Experience"
						url="/experience"
						leftIcon={className => <BriefcaseIcon className={className} />}
					/>
					<FooterNavLink
						text="Projects"
						url="/projects"
						leftIcon={className => <NumberedListIcon className={className} />}
					/>
				</FooterSection>
				<FooterSection title="About">
					<FooterContactButton />
					<FooterExternalLink
						text="Source Code"
						url="https://github.com/olyop/oliverplummer.com.au/"
						leftIcon={className => <CodeBracketIcon className={className} />}
					/>
					<FooterTechStackButton />
					<FooterShareButton />
				</FooterSection>
			</div>
			<div className="space-y-32 p-4 sm:space-y-8 sm:px-8 sm:py-16 lg:pl-16 lg:page:p-0">
				<p className="text-xs">
					<b>
						<i>
							Custom built website, designed and developed by Oliver Plummer.
							<br /> Built with React.js, TypeScript, and TailwindCSS using Next.js app
							router RSC. Served by Vercel.
						</i>
					</b>
				</p>
				<p className="text-primary-accent">
					Copyright © {new Date().getFullYear()} Oliver Plummer
				</p>
			</div>
		</footer>
	);
}

function FooterSection({ title, children }: PropsWithChildren & { title: string }) {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-xl sm:text-2xl">
				<b>
					<u>{title}</u>
				</b>
			</h3>
			<div className="flex flex-col items-start gap-3">{children}</div>
		</div>
	);
}
