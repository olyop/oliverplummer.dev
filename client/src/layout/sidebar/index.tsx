import clsx from "clsx";
import { Breakpoint } from "hooks/use-breakpoint";
import Navigation from "layout/navigation";
import { FC, Fragment } from "react";

const Sidebar: FC<SidebarProps> = ({ sidebar, breakpoint, onToggleSidebar }) => (
	<Fragment>
		{sidebar && breakpoint !== Breakpoint.LARGE && (
			<div
				onClick={onToggleSidebar}
				onKeyDown={onToggleSidebar}
				role="button"
				tabIndex={0}
				className="fixed z-30 h-screen w-screen bg-transparent backdrop-blur-lg"
			/>
		)}
		<div
			className={clsx(
				"w-sidebar bg-elevated dark:bg-elevated-dark border-primary dark:border-primary-dark top-header fixed z-40 h-screen border-r py-8 shadow duration-200",
				sidebar ? "left-0 opacity-100" : "-left-sidebar opacity-0",
			)}
		>
			<Navigation
				sidebar
				className="flex flex-col"
				onClick={breakpoint === Breakpoint.LARGE ? undefined : onToggleSidebar}
			/>
		</div>
	</Fragment>
);

export interface SidebarProps {
	sidebar: boolean | null;
	breakpoint: Breakpoint;
	onToggleSidebar: () => void;
}

export default Sidebar;
