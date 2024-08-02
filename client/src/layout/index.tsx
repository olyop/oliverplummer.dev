import clsx from "clsx";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { useHasMounted } from "hooks/use-has-mounted";
import Footer from "layout/footer";
import Header from "layout/header";
import Pages from "layout/pages";
import Sidebar from "layout/sidebar";
import { Fragment, useEffect, useRef, useState } from "react";
import { Location, useLocation } from "react-router-dom";

const SIDEBAR_LOCAL_STORAGE_KEY = "sidebar";

const Layout = () => {
	const location = useLocation();
	const hasMounted = useHasMounted();
	const breakpoint = useBreakpoint();

	const initialSidebar = determineInitialSidebar(breakpoint);
	const [sidebar, setSidebar] = useState<boolean | null>(initialSidebar);

	const handleToggleSidebar = () => {
		setSidebar(prevState => {
			if (breakpoint === Breakpoint.LARGE || breakpoint === Breakpoint.EXTRA_LARGE) {
				if (prevState === true) {
					localStorage.removeItem(SIDEBAR_LOCAL_STORAGE_KEY);
					return null;
				} else {
					localStorage.setItem(SIDEBAR_LOCAL_STORAGE_KEY, "true");
					return true;
				}
			} else {
				return !prevState;
			}
		});
	};

	const previousLocationRef = useRef<Location | null>(location);

	useEffect(() => {
		if (!hasMounted) {
			return;
		}

		if (previousLocationRef.current?.pathname === location.pathname) {
			previousLocationRef.current = location;
			return;
		}

		document.documentElement.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});

		previousLocationRef.current = location;
	}, [location]);

	useEffect(() => {
		if (!hasMounted) {
			return;
		}

		if (breakpoint === Breakpoint.LARGE || breakpoint === Breakpoint.EXTRA_LARGE) {
			const storageValue = localStorage.getItem(SIDEBAR_LOCAL_STORAGE_KEY);

			if (storageValue === null) {
				setSidebar(null);
			} else {
				setSidebar(storageValue === "true" ? true : null);
			}
		} else {
			setSidebar(false);
		}
	}, [breakpoint]);

	useEffect(() => {
		if (!hasMounted) {
			return;
		}

		addTransitionStyles();
	}, []);

	return (
		<Fragment>
			<Header
				breakpoint={breakpoint}
				sidebar={sidebar}
				onToggleSidebar={handleToggleSidebar}
			/>
			<Sidebar
				breakpoint={breakpoint}
				sidebar={sidebar}
				onToggleSidebar={handleToggleSidebar}
			/>
			<div
				className={clsx(
					"mt-header",
					sidebar === null
						? "container mx-auto space-y-8 px-4 pt-8"
						: clsx(
								"space-y-[calc(3*var(--header-height))]",
								(breakpoint === Breakpoint.LARGE ||
									breakpoint === Breakpoint.EXTRA_LARGE) &&
									"ml-sidebar",
							),
				)}
			>
				<Pages sidebar={sidebar} />
				<Footer sidebar={sidebar} />
			</div>
		</Fragment>
	);
};

function determineInitialSidebar(breakpoint: Breakpoint) {
	const storageValue = localStorage.getItem(SIDEBAR_LOCAL_STORAGE_KEY);

	if (breakpoint === Breakpoint.LARGE || breakpoint === Breakpoint.EXTRA_LARGE) {
		if (storageValue === null) {
			return null;
		}

		return storageValue === "true" ? true : null;
	} else if (breakpoint === Breakpoint.MEDIUM) {
		return true;
	}

	return false;
}

function addTransitionStyles() {
	const style = document.createElement("style");

	style.textContent = `
		*,
    *::before,
    *::after {
    	transition: 200ms ease-in-out all;
    }
  `;

	document.head.append(style);
}

export default Layout;
