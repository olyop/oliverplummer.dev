import { Theme } from "@/types";

export function InitializeScript() {
	return (
		<script
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{
				__html: `(${initialize.toString()})()`,
			}}
		/>
	);
}

function initialize() {
	/*
	 * Scrollbar width detection
	 */
	let scrollbarWidth;
	const element = document.documentElement;
	if (element.scrollWidth === element.clientWidth) {
		scrollbarWidth = 0;
	}
	// create a div with a scrollbar
	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.overflow = "scroll";
	document.documentElement.append(outer);
	// create a div inside the div to measure the offsetWidth
	const inner = document.createElement("div");
	outer.append(inner);
	scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
	// remove the divs
	// eslint-disable-next-line unicorn/prefer-dom-node-remove
	outer.parentNode?.removeChild(outer);
	// set the CSS variable
	document.documentElement.style.setProperty(
		"--scrollbar-width",
		`${scrollbarWidth.toString()}px`,
	);

	/*
	 * Color scheme detection
	 */
	const themeLocalStorage = localStorage.getItem("theme") as Theme | null;
	const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
	if (themeLocalStorage) {
		if (themeLocalStorage === "dark") {
			document.documentElement.dataset["theme"] = "dark";
		} else if (themeLocalStorage !== "light" && prefersDarkTheme.matches) {
			document.documentElement.dataset["theme"] = "dark";
		}
	} else {
		if (prefersDarkTheme.matches) {
			document.documentElement.dataset["theme"] = "dark";
		}
	}
	// listen for OS dark mode changes
	prefersDarkTheme.addEventListener("change", event => {
		const theme = localStorage.getItem("theme") as Theme | null;
		if (theme === "system" || theme === null) {
			if (event.matches) {
				document.documentElement.dataset["theme"] = "dark";
			} else {
				// @ts-expect-error
				delete document.documentElement.dataset.theme;
			}
		}
	});

	/*
	 * Page view detection
	 */
	const pageView = localStorage.getItem("page");
	document.documentElement.dataset["page"] =
		pageView === null ? "true" : pageView === "true" ? "true" : "false";

	/*
	 * Add transition to all elements
	 */
	const style = document.createElement("link");
	style.rel = "stylesheet";
	style.href = "/transition.css";

	document.head.append(style);
}
