"use client";

import {
	BriefcaseIcon,
	CheckCircleIcon,
	InformationCircleIcon,
	NumberedListIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties } from "react";

export function Navigation({ className }: NavigationProps) {
	const pathname = usePathname();
	return (
		<nav tabIndex={-1} className={clsx("relative grid grid-rows-4", className)}>
			<Link
				href="/"
				onClick={handleClick}
				className={clsx(
					"flex h-[calc(var(--header-height)-1px)] items-center justify-start gap-4 px-4 py-4 text-2xl hover:bg-primary focus:bg-primary md:px-6 xl:page:px-8",
					pathname === "/" && "bg-hover",
				)}
			>
				<InformationCircleIcon className="size-5" />
				<span className="text-2xl lowercase">
					<b>About</b>
				</span>
			</Link>
			<Link
				href="/skills"
				onClick={handleClick}
				className={clsx(
					"flex h-[calc(var(--header-height)-1px)] items-center justify-start gap-4 px-4 py-4 text-2xl hover:bg-primary focus:bg-primary md:px-6 xl:page:px-8",
					pathname === "/skills" && "bg-hover",
				)}
			>
				<CheckCircleIcon className="size-5" />
				<span className="text-2xl lowercase">
					<b>Skills</b>
				</span>
			</Link>
			<Link
				href="/experience"
				onClick={handleClick}
				className={clsx(
					"flex h-[calc(var(--header-height)-1px)] items-center justify-start gap-4 px-4 py-4 text-2xl hover:bg-primary focus:bg-primary md:px-6 xl:page:px-8",
					pathname === "/experience" && "bg-hover",
				)}
			>
				<BriefcaseIcon className="size-5" />
				<span className="text-2xl lowercase">
					<b>Experience</b>
				</span>
			</Link>
			<Link
				href="/projects"
				onClick={handleClick}
				className={clsx(
					"flex h-[calc(var(--header-height)-1px)] items-center justify-start gap-4 px-4 py-4 text-2xl hover:bg-primary focus:bg-primary md:px-6 xl:page:px-8",
					pathname === "/projects" && "bg-hover",
				)}
			>
				<NumberedListIcon className="size-5" />
				<span className="text-2xl lowercase">
					<b>Projects</b>
				</span>
			</Link>
			<NavigationHighlight />
		</nav>
	);
}

function handleClick() {
	document.documentElement.scrollIntoView(true);

	document.documentElement.style.overflowY = "visible";
	document.documentElement.dataset["sidebar"] = "false";
}

function NavigationHighlight() {
	const pathname = usePathname();

	const locationIndex = determineIndex(pathname);

	return (
		<div
			style={calculateStyle(locationIndex)}
			className="absolute hidden h-1/4 w-[calc(100vw-6rem+4px)] border-y-2 border-r-8 border-primary-accent bg-transparent sidebar:block sm:w-[calc(var(--sidebar-width)+4px)] lg:block lg:page:hidden"
		/>
	);
}

function determineIndex(path: string) {
	if (path === "/") {
		return 0;
	} else if (path === "/skills") {
		return 1;
	} else if (path === "/experience") {
		return 2;
	} else if (path === "/projects") {
		return 3;
	} else {
		return 0;
	}
}

function calculateStyle(locationIndex: number): CSSProperties {
	return {
		top: `calc((var(--header-height) - 1px) * ${String(locationIndex)})`,
	};
}

export interface NavigationProps {
	className?: string | undefined;
}
