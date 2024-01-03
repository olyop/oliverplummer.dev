import MusicalNoteIcon from "@heroicons/react/20/solid/MusicalNoteIcon";
import musicloudScreenShotOneLogoPath from "assets/projects/musicloud/screenshot-1.png?background=transparent&fit=contain&aspect=16:9&w=1920&allowUpscale=true&format=png";
import xtremeHipHopLogoPath from "assets/projects/xtremehiphop/logo.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import xtremeHipHopScreenShotOneLogoPath from "assets/projects/xtremehiphop/screenshot-1.png";
import xtremeHipHopScreenShotTwoLogoPath from "assets/projects/xtremehiphop/screenshot-2.png";
import xtremeHipHopScreenShotThreeLogoPath from "assets/projects/xtremehiphop/screenshot-3.png";

import { Project } from "./types";

export const projects: Project[] = [
	{
		code: "xtremehiphop",
		label: "Xtreme Hip-Hop",
		text: "A booking system for Xtreme Hip-Hop with Tash.",
		image: xtremeHipHopLogoPath,
		url: "https://xtremehiphopwithtash.com",
		sourceCodeUrl: "https://github.com/olyop/xtremehiphopwithtash",
		description: `
			I developed the booking system for Xtreme Hip-Hop with Tash. This system is used by
			over 500 users to book classes. I continue to maintain and develop new features for this system.
		`,
		screenshots: [
			xtremeHipHopScreenShotOneLogoPath,
			xtremeHipHopScreenShotTwoLogoPath,
			xtremeHipHopScreenShotThreeLogoPath,
		],
	},
	{
		code: "musicloud",
		label: "Musicloud",
		text: "A music player for the web.",
		image: className => <MusicalNoteIcon className={className} />,
		url: null,
		sourceCodeUrl: "https://github.com/olyop/musicloud",
		description: `
			Musicloud is a music player for the web. It allows you to upload your music and play it from anywhere.
			It is similar to Google Play Music and I use it for showcasing purposes only.
			I developed Musicloud as a personal project.
			I primarily used it as a learning ground for new technologies and to experiment with new ideas.

		`,
		screenshots: [musicloudScreenShotOneLogoPath],
	},
];

export const isProjectCodeValid = (value: string) => projects.some(({ code }) => code === value);
