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

	const previousLocationRef = useRef<Location | null>(location);

	useEffect(() => {
		if (!hasMounted) {
			return;
		}
		if (previousLocationRef.current?.pathname === location.pathname) {
			previousLocationRef.current = location;
			return;
		}

		document.documentElement.scrollTo(0, 0);

		previousLocationRef.current = location;
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

	return (
		<Fragment>
			<Header sidebar={sidebar} onToggleSidebar={handleToggleSidebar} />
			<Sidebar
				sidebar={sidebar}
				breakpoint={breakpoint}
				onToggleSidebar={handleToggleSidebar}
			/>
			<div
				className={clsx(
					"!pt-header space-y-4 sm:mt-8 md:space-y-8",
					sidebar === null
						? "container mx-auto"
						: clsx(
								sidebar && breakpoint === Breakpoint.LARGE && "ml-sidebar",
								sidebar && "mr-[var(--scrollbar-width)]",
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
	if (breakpoint === Breakpoint.LARGE) {
		const sidebar = localStorage.getItem(SIDEBAR_LOCAL_STORAGE_KEY);
		return sidebar === "true" ? true : null;
	}

	return false;
}

export default Layout;
