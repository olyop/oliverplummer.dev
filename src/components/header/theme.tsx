"use client";

import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";

export function HeaderThemeButton() {
	const [theme, setTheme] = useState(getInitialTheme());

	const handleThemeChange = () => {
		setTheme(prevState => {
			if (prevState === "system") {
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
					localStorage.setItem("theme", "light");
					// @ts-expect-error
					delete document.documentElement.dataset.theme;
					return "light";
				} else {
					document.documentElement.dataset["theme"] = "dark";
					localStorage.setItem("theme", "dark");
					return "dark";
				}
			} else if (prevState === "light") {
				document.documentElement.dataset["theme"] = "dark";
				localStorage.setItem("theme", "dark");
				return "dark";
			} else {
				// @ts-expect-error
				delete document.documentElement.dataset.theme;
				localStorage.removeItem("theme");
				return "system";
			}
		});
	};

	return (
		<button
			type="button"
			onClick={handleThemeChange}
			className="flex flex-col items-center gap-1.5 rounded-2xl p-1 hover:bg-hover focus:bg-hover"
		>
			<div className="flex items-stretch rounded-2xl border border-primary">
				<SunIcon
					suppressHydrationWarning
					className={clsx("!size-6 rounded-l-2xl p-1", theme === "light" && "bg-primary")}
				/>
				<MoonIcon
					suppressHydrationWarning
					className={clsx(
						"!size-6 border-x border-primary p-1",
						theme === "dark" && "bg-primary",
					)}
				/>
				<ComputerDesktopIcon
					suppressHydrationWarning
					className={clsx(
						"!size-6 rounded-r-2xl p-1",
						theme === "system" && "bg-primary",
					)}
				/>
			</div>
			<span className="text-xs uppercase leading-3">
				<b suppressHydrationWarning>{theme}</b>
			</span>
		</button>
	);
}

function getInitialTheme(): Theme {
	if (typeof window === "undefined") {
		return "system";
	}

	const themeLocalStorage = localStorage.getItem("theme");

	if (themeLocalStorage) {
		return themeLocalStorage as Theme;
	} else {
		return "system";
	}
}

type Theme = "light" | "dark" | "system";
