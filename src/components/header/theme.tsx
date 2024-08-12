"use client";

import {
	ComputerDesktopIcon,
	ExclamationTriangleIcon,
	MoonIcon,
	SunIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { Theme } from "@/types";

export function HeaderThemeButton() {
	const [theme, setTheme] = useState<Theme | null>(null);

	useEffect(() => {
		setTheme(getThemeSetting());
	}, []);

	const handleThemeToggle = () => {
		setTheme(prevState => {
			const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

			if (prevState === "light") {
				if (prefersDarkTheme) {
					document.documentElement.dataset["theme"] = "dark";
					localStorage.setItem("theme", "dark");
					return "dark";
				} else {
					// @ts-expect-error
					delete document.documentElement.dataset.theme;
					localStorage.removeItem("theme");
					return "system";
				}
			} else if (prevState === "dark") {
				if (prefersDarkTheme) {
					document.documentElement.dataset["theme"] = "dark";
					localStorage.removeItem("theme");
					return "system";
				} else {
					// @ts-expect-error
					delete document.documentElement.dataset.theme;
					localStorage.setItem("theme", "light");
					return "light";
				}
			} else if (prevState === "system") {
				if (prefersDarkTheme) {
					// @ts-expect-error
					delete document.documentElement.dataset.theme;
					localStorage.setItem("theme", "light");
					return "light";
				} else {
					document.documentElement.dataset["theme"] = "dark";
					localStorage.setItem("theme", "dark");
					return "dark";
				}
			} else {
				// @ts-expect-error
				delete document.documentElement.dataset.theme;
				return "system";
			}
		});
	};

	return (
		<>
			<button
				type="button"
				onClick={handleThemeToggle}
				className="hidden flex-col items-center gap-1.5 rounded-2xl p-1 hover:bg-hover focus:bg-hover sm:flex"
			>
				<div className="flex items-stretch rounded-2xl border border-primary">
					<SunIcon
						className={clsx(
							"!size-6 rounded-l-2xl p-1",
							theme === "light" && "bg-primary",
						)}
					/>
					<ComputerDesktopIcon
						className={clsx(
							"!size-6 border-x border-primary p-1",
							theme === "system" && "bg-primary",
						)}
					/>
					<MoonIcon
						className={clsx(
							"!size-6 rounded-r-2xl p-1",
							theme === "dark" && "bg-primary",
						)}
					/>
				</div>
				<span className="text-xs uppercase leading-3">
					<b suppressHydrationWarning>{theme ?? "System"}</b>
				</span>
			</button>
			<Button
				isTransparent
				className="!size-12 sm:hidden"
				onClick={handleThemeToggle}
				ariaLabel="Change theme"
				leftIcon={iconClassName => getThemeIcon(theme, iconClassName)}
			/>
		</>
	);
}

function getThemeSetting(): Theme | null {
	if (typeof window === "undefined") {
		return null;
	}

	const themeLocalStorage = localStorage.getItem("theme");

	if (themeLocalStorage) {
		if (themeLocalStorage === "light") {
			return "light";
		} else if (themeLocalStorage === "dark") {
			return "dark";
		}
	}

	return "system";
}

function getThemeIcon(theme: Theme | null, iconClassName: string) {
	if (theme === null) {
		return undefined;
	} else if (theme === "light") {
		return <SunIcon className={iconClassName} />;
	} else if (theme === "dark") {
		return <MoonIcon className={iconClassName} />;
	} else if (theme === "system") {
		return <ComputerDesktopIcon className={iconClassName} />;
	} else {
		return <ExclamationTriangleIcon className={iconClassName} />;
	}
}
