import { SidebarClose } from "./close";
import { Navigation } from "./navigation";

export function Sidebar() {
	return (
		<>
			<aside className="fixed -left-[calc(100vw-6rem)] top-header z-50 h-[calc(100vh-var(--header-height))] w-[calc(100vw-6rem)] border-r border-primary bg-elevated-hsla py-4 shadow backdrop-blur-lg transition-all duration-300 sidebar:left-0 sm:w-sidebar lg:left-0 lg:page:-left-sidebar">
				<Navigation />
			</aside>
			<SidebarClose />
		</>
	);
}
