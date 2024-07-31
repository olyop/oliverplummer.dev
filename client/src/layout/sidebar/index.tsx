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
						onClick={handleToggleSidebar}
						onKeyDown={handleToggleSidebar}
						className="fixed z-30 h-screen w-screen bg-transparent backdrop-blur-lg"
					/>
				)}
			<div
				className={clsx(
					"sm:w-sidebar bg-elevated-hsla border-primary top-header fixed z-50 h-screen w-[calc(100vw-4rem)] border-r py-4 shadow backdrop-blur-sm backdrop-saturate-[180%] transition-all duration-300",
					sidebar
						? "pointer-events-auto left-0"
						: "pointer-events-none left-[calc((100vw-4rem)*-1)] sm:left-[calc(var(--sidebar-width)*-1)]",
				)}
			>
				<Navigation sidebar className="w-full" onClick={handleToggleSidebar} />
			</div>
		</Fragment>
	);
};

export interface SidebarProps {
	sidebar: boolean | null;
	breakpoint: Breakpoint;
	onToggleSidebar: () => void;
}

export default Sidebar;
