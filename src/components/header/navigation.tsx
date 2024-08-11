"use client";

import { SlashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HeaderUnderline } from "./underline";

export function HeaderNavigation() {
	const pathname = usePathname();
	return (
		<div className="relative flex h-full items-center gap-6">
			<Link
				href="/"
				id="nav-about"
				className="group flex h-full items-center justify-start gap-4 py-4"
			>
				<span
					className={clsx(
						"text-2xl lowercase tracking-widest group-hover:text-primary-accent group-focus:text-primary-accent sm:text-3xl",
						pathname === "/" && "lg:page:text-primary-accent",
					)}
				>
					<b>oliver</b>
				</span>
			</Link>
			<SlashIcon className="hidden size-6 lg:page:block" />
			<Link
				href="/skills"
				id="nav-skills"
				className="group hidden h-full items-center gap-4 py-4 lg:page:flex"
			>
				<span
					className={clsx(
						"text-xl lowercase tracking-widest group-hover:text-primary-accent group-focus:text-primary-accent sm:text-2xl",
						pathname === "/skills" && "lg:page:text-primary-accent",
					)}
				>
					Skills
				</span>
			</Link>
			<Link
				href="/experience"
				id="nav-experience"
				className="group hidden h-full items-center gap-4 py-4 lg:page:flex"
			>
				<span
					className={clsx(
						"text-xl lowercase tracking-widest group-hover:text-primary-accent group-focus:text-primary-accent sm:text-2xl",
						pathname === "/experience" && "lg:page:text-primary-accent",
					)}
				>
					Experience
				</span>
			</Link>
			<Link
				href="/projects"
				id="nav-projects"
				className="group hidden h-full items-center gap-4 py-4 lg:page:flex"
			>
				<span
					className={clsx(
						"text-xl lowercase tracking-widest group-hover:text-primary-accent group-focus:text-primary-accent sm:text-2xl",
						pathname === "/projects" && "lg:page:text-primary-accent",
					)}
				>
					Projects
				</span>
			</Link>
			<HeaderUnderline />
		</div>
	);
}
