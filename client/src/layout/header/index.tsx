import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Button from "components/button";
import Navigation from "layout/navigation";
import { FC } from "react";

import Contact from "./contact";
import ThemeButton from "./theme";
import Title from "./title";

const Header: FC<HeaderProps> = ({ sidebar, onToggleSidebar }) => (
	<header
		className={clsx(
			"border-primary h-header xl bg-elevated-hsla fixed left-0 top-0 z-50 w-screen border-b backdrop-blur-sm backdrop-saturate-[180%] sm:shadow",
			sidebar !== null && "pr-[var(--scrollbar-width)]",
		)}
	>
		<div
			className={clsx(
				"flex h-full items-center justify-between",
				sidebar === null ? "container relative mx-auto px-4 md:px-0" : "px-4 sm:pl-8",
			)}
		>
			<div className="flex h-full items-center gap-4 md:gap-4">
				<Button
					isTransparent
					ariaLabel="Menu"
					iconClassName="size-10"
					className="!bg-hover !border-primary-accent !size-12"
					onClick={onToggleSidebar}
					leftIcon={iconClassName =>
						sidebar ? (
							<XMarkIcon className={iconClassName} />
						) : (
							<Bars3Icon className={iconClassName} />
						)
					}
				/>
				<Title />
			</div>
			{sidebar === null && (
				<Navigation className="absolute left-1/2 top-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 items-center" />
			)}
			<div className="flex items-center gap-4">
				<ThemeButton />
				<Contact />
			</div>
		</div>
	</header>
);

export interface HeaderProps {
	sidebar: boolean | null;
	onToggleSidebar: () => void;
}

export default Header;
