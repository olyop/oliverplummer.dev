"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect } from "react";

import { Button } from "@/components/button";
import { Breakpoint, useBreakpoint } from "@/hooks/use-breakpoint";
import { useHasMounted } from "@/hooks/use-has-mounted";

export function HeaderMenuButton() {
	const hasMounted = useHasMounted();
	const breakpoint = useBreakpoint();

	const handleToggleSidebar = () => {
		if (breakpoint === Breakpoint.LARGE || breakpoint === Breakpoint.EXTRA_LARGE) {
			const pageAttribute = document.documentElement.dataset["page"];

			if (pageAttribute === "true") {
				document.documentElement.dataset["page"] = "false";
				localStorage.setItem("page", "false");
			} else {
				document.documentElement.dataset["page"] = "true";
				localStorage.setItem("page", "true");
			}
		} else {
			const sidebarAttribute = document.documentElement.dataset["sidebar"];

			if (sidebarAttribute === "true") {
				document.documentElement.style.overflowY = "visible";
				document.documentElement.dataset["sidebar"] = "false";
			} else {
				document.documentElement.style.overflowY = "hidden";
				document.documentElement.dataset["sidebar"] = "true";
			}
		}
	};

	useEffect(() => {
		if (!hasMounted) return;

		document.documentElement.style.overflowY = "visible";
		document.documentElement.dataset["sidebar"] = "false";
	}, [breakpoint]);

	return (
		<Button
			ariaLabel="Menu"
			className="!size-12"
			iconClassName="size-10"
			onClick={handleToggleSidebar}
			leftIcon={iconClassName => (
				<>
					<Bars3Icon
						className={clsx(
							iconClassName,
							"block sidebar:hidden lg:hidden lg:page:block",
						)}
					/>
					<XMarkIcon
						className={clsx(
							iconClassName,
							"hidden sidebar:block lg:block lg:page:hidden",
						)}
					/>
				</>
			)}
		/>
	);
}
