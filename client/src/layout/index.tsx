import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { useHasMounted } from "hooks/use-has-mounted";
import Content from "layout/content";
import Footer from "layout/footer";
import Header from "layout/header";
import Pages from "layout/pages";
import Sidebar from "layout/sidebar";
import { Fragment, useEffect, useState } from "react";

const SIDEBAR_LOCAL_STORAGE_KEY = "sidebar";

const Layout = () => {
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
					localStorage.setItem(SIDEBAR_LOCAL_STORAGE_KEY, String(true));
					return true;
				}
			} else {
				return !prevState;
			}
		});
	};

	// Set sidebar state based on breakpoint
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

	// Add transition to all elements
	useEffect(() => {
		addTransition();
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
			<Content sidebar={sidebar}>
				<Pages sidebar={sidebar} />
				<Footer sidebar={sidebar} />
			</Content>
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
	} else {
		return false;
	}
}

function addTransition() {
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
