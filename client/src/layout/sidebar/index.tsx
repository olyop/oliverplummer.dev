import clsx from "clsx";
import { Breakpoint } from "hooks/use-breakpoint";
import Navigation from "layout/navigation";
import { FC, Fragment } from "react";

const Sidebar: FC<SidebarProps> = ({ sidebar, breakpoint, onToggleSidebar }) => {
	const handleToggleSidebar = () => {
		setTimeout(() => {
			onToggleSidebar();
		}, 300);
	};

	return (
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
					"w-sidebar bg-elevated border-primary top-header fixed z-50 h-screen border-r py-4 shadow",
					sidebar ? "left-0 opacity-100" : "-left-sidebar opacity-0",
				)}
			>
				<Navigation
					sidebar
					className="w-full"
					onClick={breakpoint === Breakpoint.LARGE ? undefined : handleToggleSidebar}
				/>
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
