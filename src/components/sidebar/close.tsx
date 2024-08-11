"use client";

export function SidebarClose() {
	return (
		<div
			role="button"
			tabIndex={0}
			onClick={closeSidebar}
			onKeyDown={closeSidebar}
			className="invisible fixed z-30 h-screen w-screen bg-transparent opacity-0 backdrop-blur-lg sidebar:visible sidebar:opacity-100 lg:hidden"
		/>
	);
}

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
