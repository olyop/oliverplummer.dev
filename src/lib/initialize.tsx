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

	// Creating invisible container
	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.overflow = "scroll"; // forcing scrollbar to appear
	document.documentElement.append(outer);

	// Creating inner element and placing it in the container
	const inner = document.createElement("div");
	outer.append(inner);

	// Calculating difference between container's full width and the child width
	scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

	// Removing temporary elements from the DOM
	// eslint-disable-next-line unicorn/prefer-dom-node-remove
	outer.parentNode?.removeChild(outer);

	document.documentElement.style.setProperty(
		"--scrollbar-width",
		`${scrollbarWidth.toString()}px`,
	);

	/*
	 * Color scheme detection
	 */
	let theme = "light"; // default to light

	const themeLocalStorage = localStorage.getItem("theme");
	const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

	// local storage is used to override OS theme settings
	if (themeLocalStorage) {
		if (themeLocalStorage === "dark") {
			theme = "dark";
		}
	} else if (prefersDarkTheme.matches) {
		// OS theme setting detected as dark
		theme = "dark";
	}

	// dark theme preferred, set document with a `data-theme` attribute
	if (theme === "dark") {
		document.documentElement.dataset["theme"] = "dark";
	}

	prefersDarkTheme.addEventListener("change", event => {
		if (event.matches) {
			document.documentElement.dataset["theme"] = "dark";
		} else {
			// @ts-expect-error
			delete document.documentElement.dataset.theme;
		}
	});

	/*
	 * Page view detection
	 */
	const pageView = localStorage.getItem("page");

	document.documentElement.dataset["page"] = pageView === "true" ? "true" : "false";

	/*
	 * Add transition to all elements
	 */
	const style = document.createElement("link");
	style.rel = "stylesheet";
	style.href = "/transition.css";

	document.head.append(style);
}
