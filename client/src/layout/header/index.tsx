import {
	Bars3Icon,
	ComputerDesktopIcon,
	MoonIcon,
	SunIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Button from "components/button";
import Navigation from "layout/navigation";
import { FC } from "react";

import { Theme } from "../types";
import Contact from "./contact";
import Title from "./title";

const Header: FC<HeaderProps> = ({ sidebar, theme, onToggleSidebar, onToggleTheme }) => (
	<header className="bg-elevated dark:bg-elevated-dark border-primary dark:border-primary-dark h-header fixed left-0 top-0 z-50 w-[calc(100vw-var(--scrollbar-width))] border-b shadow-sm">
		<div
			className={clsx(
				"flex h-full items-center justify-between px-8",
				sidebar === null && "container relative mx-auto",
			)}
		>
			<div className="flex h-full items-center gap-6">
				<Button
					isTransparent
					ariaLabel="Menu"
					iconClassName="size-10"
					onClick={onToggleSidebar}
					className="!size-12"
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
				<Button
					isTransparent
					ariaLabel="Light"
					iconClassName="size-10"
					className="!size-12"
					onClick={onToggleTheme}
					leftIcon={iconClassName =>
						theme === "light" ? (
							<SunIcon className={iconClassName} />
						) : theme === "dark" ? (
							<MoonIcon className={iconClassName} />
						) : (
							<ComputerDesktopIcon className={iconClassName} />
						)
					}
				/>
				<Contact />
			</div>
		</div>
	</header>
);

export interface HeaderProps {
	sidebar: boolean | null;
	theme: Theme;
	onToggleSidebar: () => void;
	onToggleTheme: () => void;
}

export default Header;
