import Navigation from "layout/navigation";
import { FC, Fragment } from "react";

const Sidebar: FC = () => (
	<Fragment>
		<aside className="sm:w-sidebar bg-elevated-hsla border-primary top-header lg:page:-left-sidebar sidebar:left-0 fixed -left-[calc(100vw-6rem)] z-50 h-[calc(100vh-var(--header-height))] w-[calc(100vw-6rem)] border-r py-4 shadow backdrop-blur-lg transition-all duration-300 lg:left-0">
			<Navigation />
		</aside>
		<div
			role="button"
			tabIndex={0}
			onClick={closeSidebar}
			onKeyDown={closeSidebar}
			className="sidebar:visible sidebar:opacity-100 invisible fixed z-30 h-screen w-screen bg-transparent opacity-0 backdrop-blur-lg lg:hidden"
		/>
	</Fragment>
);

function closeSidebar() {
	const sidebarAttribute = document.documentElement.dataset["sidebar"];

	if (sidebarAttribute === "true") {
		document.documentElement.style.overflowY = "visible";
		document.documentElement.dataset["sidebar"] = "false";
	} else {
		document.documentElement.style.overflowY = "hidden";
		document.documentElement.dataset["sidebar"] = "true";
	}
}

export default Sidebar;
