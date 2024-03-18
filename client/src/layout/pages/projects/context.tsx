import directoryToSpotifyLogoPath from "assets/projects/directory-to-spotify/logo.png?background=transparent&fit=contain&aspect=1:1&w=64&allowUpscale=true&format=png";
import directoryToSpotifyScreenShotOneLogoPath from "assets/projects/directory-to-spotify/screenshot-1.png";
import directoryToSpotifyScreenShotTwoLogoPath from "assets/projects/directory-to-spotify/screenshot-2.png";
import directoryToSpotifyScreenShotThreeLogoPath from "assets/projects/directory-to-spotify/screenshot-3.png";
import directoryToSpotifyScreenShotFourLogoPath from "assets/projects/directory-to-spotify/screenshot-4.png";
import directoryToSpotifyScreenShotFiveLogoPath from "assets/projects/directory-to-spotify/screenshot-5.png";
import directoryToSpotifyScreenShotSixLogoPath from "assets/projects/directory-to-spotify/screenshot-6.png";
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
		text: "A class booking application that browse classes, book and pay online, also buy merchandise.",
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
			"PWA",
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
	{
		code: "directorytospotify",
		label: "Directory to Spotify",
		features: [
			"Scan a directory of music files.",
			"Add songs to liked songs or playlists on Spotify.",
			"Preview songs before adding them.",
			"Visualize the scanning process.",
		],
		technologies: ["React", "TailwindCSS", "Heroicons", "Spotify Web API", "Web Workers", "Redux"],
		image: directoryToSpotifyLogoPath,
		screenshots: [
			directoryToSpotifyScreenShotOneLogoPath,
			directoryToSpotifyScreenShotTwoLogoPath,
			directoryToSpotifyScreenShotThreeLogoPath,
			directoryToSpotifyScreenShotFourLogoPath,
			directoryToSpotifyScreenShotFiveLogoPath,
			directoryToSpotifyScreenShotSixLogoPath,
		],
		sourceCodeUrl: "https://github.com/olyop/directory-to-spotify",
		text: "A web application that allows users to scan a directory of music files and add them to their liked songs or playlists on Spotify.",
		url: "https://directorytospotify.com/",
		description: `
			I developed this web application as a personal project to learn about various new web technologies.

			One of the main challenges was to scan a directory of music files and extract metadata from them.
			I used web workers to offload the scanning process from the main thread to prevent the UI from freezing.
			
			To match the songs I had to normalize the metadata text and the search results. I then used a fuzzy search algorithm to find the best match.
			Exact matches are chosen first, then matches with the same artist, then matches with the same album, and finally matches with the same title.
			Every match is ranked from a match score from 0 to 1 to further refine the results.

			This application is 100% client-side and does not require a server to run.
			It uses the Spotify Web API to add songs to the user's library and playlists.
		`,
	},
];

export const isProjectCodeValid = (value: string) => projects.some(({ code }) => code === value);
