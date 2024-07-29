import clsx from "clsx";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { useHasMounted } from "hooks/use-has-mounted";
import Footer from "layout/footer";
import Header from "layout/header";
import Pages from "layout/pages";
import Sidebar from "layout/sidebar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

	useEffect(() => {
		document.documentElement.scrollTo(0, 0);
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
		<div className="w-screen">
			<Header sidebar={sidebar} onToggleSidebar={handleToggleSidebar} />
			<Sidebar
				sidebar={sidebar}
				breakpoint={breakpoint}
				onToggleSidebar={handleToggleSidebar}
			/>
			<div
				className={clsx(
					"!mt-header mb-header space-y-4 p-4 md:space-y-8 md:p-8",
					sidebar === null
						? "container mx-auto"
						: clsx(
								sidebar && breakpoint === Breakpoint.LARGE && "ml-sidebar",
								sidebar && "mr-[var(--scrollbar-width)]",
							),
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

export default Layout;
