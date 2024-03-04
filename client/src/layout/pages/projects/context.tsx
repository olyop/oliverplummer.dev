import xtremeHipHopLogoPath from "assets/projects/xtremehiphop/logo.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import xtremeHipHopScreenShotOneLogoPath from "assets/projects/xtremehiphop/screenshot-1.png";
import xtremeHipHopScreenShotTwoLogoPath from "assets/projects/xtremehiphop/screenshot-2.png";
import xtremeHipHopScreenShotFourLogoPath from "assets/projects/xtremehiphop/screenshot-4.png";
import xtremeHipHopScreenShotFiveLogoPath from "assets/projects/xtremehiphop/screenshot-5.png";
import xtremeHipHopScreenShotSixLogoPath from "assets/projects/xtremehiphop/screenshot-6.png";

import { Project } from "./types";

export const projects: Project[] = [
	{
		code: "xtremehiphop",
		label: "Xtreme Hip-Hop",
		text: "A booking system for Xtreme Hip-Hop with Tash.",
		image: xtremeHipHopLogoPath,
		url: "https://xtremehiphopwithtash.com",
		sourceCodeUrl: "https://github.com/olyop/xtremehiphopwithtash",
		screenshots: [
			xtremeHipHopScreenShotOneLogoPath,
			xtremeHipHopScreenShotTwoLogoPath,
			xtremeHipHopScreenShotFourLogoPath,
			xtremeHipHopScreenShotFiveLogoPath,
			xtremeHipHopScreenShotSixLogoPath,
		],
		description: `
			I developed the booking system for Xtreme Hip-Hop with Tash. This system is used by
			over 500 users to book classes. I continue to maintain and develop new features for this system.
		`,
		features: [
			"Account creation and management for users and administrators.",
			"Class booking and interface for administrators to manage classes.",
			"Payment processing.",
			"Email notifications.",
			"Intergrations with Auth0 and Stripe.js for authentication and payment processing.",
			"Offline PWA support.",
			"Responsive mobile-first design.",
		],
		technologies: [
			"React",
			"TailwindCSS",
			"Heroicons",
			"Apollo Client",
			"WorkBox",
			"Spring Boot",
			"Stripe",
			"Auth0",
			"PostgreSQL",
			"Docker",
			"AWS: EC2, RDS, Lambda, S3, CloudFront, Route53",
		],
	},
];

export const isProjectCodeValid = (value: string) => projects.some(({ code }) => code === value);
