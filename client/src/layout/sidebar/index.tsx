import clsx from "clsx";
import { Breakpoint } from "hooks/use-breakpoint";
import { useKeyPress } from "hooks/use-key-press";
import Navigation from "layout/navigation";
import { FC, Fragment, useEffect } from "react";

const Sidebar: FC<SidebarProps> = ({ sidebar, breakpoint, onToggleSidebar }) => {
	const escapePress = useKeyPress("Escape");

	const handleToggleSidebar = () => {
		if (breakpoint === Breakpoint.LARGE || breakpoint === Breakpoint.EXTRA_LARGE) {
			return;
		}

		setTimeout(() => {
			onToggleSidebar();
		}, 300);
	};

	useEffect(() => {
		if (breakpoint === Breakpoint.LARGE || breakpoint === Breakpoint.EXTRA_LARGE) {
			return;
		}

		if (!escapePress) {
			return;
		}

		onToggleSidebar();
	}, [escapePress]);

	return (
		<Fragment>
			{sidebar === true &&
				breakpoint !== Breakpoint.LARGE &&
				breakpoint !== Breakpoint.EXTRA_LARGE && (
					<div
						tabIndex={0}
						role="button"
						onClick={onToggleSidebar}
						onKeyDown={onToggleSidebar}
						className="fixed z-30 h-screen w-screen bg-transparent backdrop-blur-lg"
					/>
				)}
			<aside
				className={clsx(
					"sm:w-sidebar sm:max-w-sidebar bg-elevated-hsla border-primary top-header fixed z-50 h-[calc(100vh-var(--header-height))] w-[calc(100vw-6rem)] max-w-[calc(100vw-6rem)] border-r py-4 shadow backdrop-blur-sm backdrop-saturate-[180%] transition-all duration-300",
					sidebar === null ? "pointer-events-none" : "pointer-events-auto",
					sidebar === true ? "left-0" : "sm:-left-sidebar -left-[calc(100vw-6rem)]",
				)}
			>
				{sidebar === true && (
					<Navigation sidebar={sidebar} onClick={handleToggleSidebar} />
				)}
			</aside>
		</Fragment>
	);
};

export interface SidebarProps {
	sidebar: boolean | null;
	breakpoint: Breakpoint;
	onToggleSidebar: () => void;
}

export default Sidebar;
