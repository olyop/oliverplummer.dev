import { SlashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { navigationPages } from "layout/navigation-config";
import { FC, Fragment } from "react";
import { NavLink } from "react-router-dom";

import Contact from "./contact";
import HeaderMenuButton from "./menu";
import ThemeButton from "./theme";
import HeaderUnderline from "./underline";

const Header: FC = () => (
	<header className="border-primary h-header xl bg-elevated-hsla pr-scrollbar fixed left-0 top-0 z-50 m-0 w-screen border-b backdrop-blur-sm backdrop-saturate-[180%] sm:shadow">
		<div className="lg:page:container lg:page:mx-auto lg:page:px-4 flex h-full items-center justify-between px-4 sm:px-8 md:pl-8 md:pr-8 lg:pl-4">
			<div className="flex h-full items-center gap-6">
				<HeaderMenuButton />
				<div className="relative flex h-full items-center gap-6">
					{navigationPages.map(page => (
						<Fragment key={page.text}>
							<NavLink
								to={page.path}
								id={`nav-${page.path}`}
								className={clsx(
									"group flex h-full items-center justify-start gap-4 py-4",
									page.path !== "" && "lg:page:flex hidden",
								)}
							>
								{({ isActive }) => (
									<span
										className={clsx(
											"group-hover:text-primary-accent group-focus:text-primary-accent lowercase",
											page.path === ""
												? "text-2xl tracking-widest sm:text-3xl"
												: "text-2xl",
											isActive && "lg:page:text-primary-accent",
										)}
									>
										{page.path === "" ? <b>oliver</b> : page.text}
									</span>
								)}
							</NavLink>
							{page.path === "" && <SlashIcon className="lg:page:block hidden size-6" />}
						</Fragment>
					))}
					<HeaderUnderline />
				</div>
			</div>
			<div className="flex items-center gap-4">
				<ThemeButton />
				<Contact />
			</div>
		</div>
	</header>
);

export default Header;
