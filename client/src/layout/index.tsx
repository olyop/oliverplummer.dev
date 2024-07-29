import clsx from "clsx";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { useHasMounted } from "hooks/use-has-mounted";
import Footer from "layout/footer";
import Header from "layout/header";
import Pages from "layout/pages";
import Sidebar from "layout/sidebar";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { Theme } from "./types";

const SIDEBAR_LOCAL_STORAGE_KEY = "sidebar";
const THEME_LOCAL_STORAGE_KEY = "theme";

const Layout = () => {
	const rootElementRef = useRef<HTMLDivElement | null>(null);

	const location = useLocation();
	const hasMounted = useHasMounted();
	const breakpoint = useBreakpoint();

	const initialSidebar = determineInitialSidebar(breakpoint);
	const initialTheme = determineInitialTheme();

	const [sidebar, setSidebar] = useState<boolean | null>(initialSidebar);
	const [theme, setTheme] = useState<Theme>(initialTheme);

	const handleToggleSidebar = () => {
		setSidebar(prevState => {
			if (breakpoint === Breakpoint.LARGE) {
				if (prevState === true) {
					localStorage.removeItem(SIDEBAR_LOCAL_STORAGE_KEY);
					return null;
				} else {
					localStorage.setItem(SIDEBAR_LOCAL_STORAGE_KEY, "true");
					return true;
				}
			} else {
				const newState = !prevState;
				localStorage.setItem(SIDEBAR_LOCAL_STORAGE_KEY, newState.toString());
				return newState;
			}
		});
	};

	const handleToggleTheme = () => {
		setTheme(prevState => {
			if (prevState === "system") {
				const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

				if (isDark) {
					return "light";
				} else {
					return "dark";
				}
			} else if (prevState === "dark") {
				return "light";
			} else {
				return "system";
			}
		});
	};

	useEffect(() => {
		rootElementRef.current?.scrollTo(0, 0);
	}, [location]);

	useEffect(() => {
		if (!hasMounted) {
			return;
		}

		if (breakpoint === Breakpoint.LARGE) {
			setSidebar(null);
			return;
		}

		if (sidebar !== null) {
			return;
		}

		setSidebar(false);
	}, [breakpoint]);

	useEffect(() => {
		if (!hasMounted) {
			return;
		}

		localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
	}, [theme]);

	const handleThemeChange = (event: MediaQueryListEvent) => {
		if (theme !== "system") {
			return;
		}

		if (event.matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	useEffect(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", handleThemeChange);

		return () => {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.removeEventListener("change", handleThemeChange);
		};
	}, []);

	return (
		<div
			ref={rootElementRef}
			className={clsx(
				"bg-background dark:bg-background-dark text-text dark:text-text-dark h-screen w-screen overflow-x-hidden overflow-y-scroll",
				"scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-primary-accent dark:scrollbar-thumb-primary-accent-dark scrollbar-track-primary dark:scrollbar-track-primary-dark",
				theme === "dark"
					? "dark"
					: window.matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "",
			)}
		>
			<Header
				sidebar={sidebar}
				theme={theme}
				onToggleSidebar={handleToggleSidebar}
				onToggleTheme={handleToggleTheme}
			/>
			<Sidebar
				sidebar={sidebar}
				breakpoint={breakpoint}
				onToggleSidebar={handleToggleSidebar}
			/>
			<div
				className={clsx(
					"!mt-header mb-header space-y-8 p-8",
					sidebar === null
						? "container mx-auto"
						: clsx(sidebar && breakpoint === Breakpoint.LARGE && "ml-sidebar"),
				)}
			>
				<Pages />
				<Footer />
			</div>
		</div>
	);
};

function determineInitialSidebar(breakpoint: Breakpoint) {
	if (breakpoint === Breakpoint.LARGE) {
		const sidebar = localStorage.getItem(SIDEBAR_LOCAL_STORAGE_KEY);
		return sidebar === "true" ? true : null;
	}

	return false;
}

function determineInitialTheme() {
	const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

	if (theme === "light" || theme === "dark") {
		return theme;
	}

	return "system";
}

export default Layout;
