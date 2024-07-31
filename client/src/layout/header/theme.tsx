import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Button from "components/button";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { FC, useState } from "react";

const ThemeButton: FC<ThemeButtonProps> = ({ sidebar }) => {
	const breakpoint = useBreakpoint();

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

	const shouldCollapse =
		sidebar === null
			? breakpoint !== Breakpoint.EXTRA_LARGE
			: !(breakpoint === Breakpoint.LARGE || breakpoint === Breakpoint.EXTRA_LARGE);

	return (
		<Button
			isTransparent
			ariaLabel="Theme toggle"
			iconClassName="size-10"
			className={shouldCollapse ? "!size-12" : "!h-12"}
			onClick={handleThemeChange}
			text={shouldCollapse ? undefined : "Theme"}
			leftIcon={iconClassName =>
				theme === "light" ? (
					<SunIcon className={iconClassName} />
				) : theme === "dark" ? (
					<MoonIcon className={iconClassName} />
				) : (
					<ComputerDesktopIcon className={iconClassName} />
				)
			}
		/>
	);
};

interface ThemeButtonProps {
	sidebar: boolean | null;
}

function getInitialTheme(): Theme {
	const themeLocalStorage = localStorage.getItem("theme");

	if (themeLocalStorage) {
		return themeLocalStorage as Theme;
	} else {
		return "system";
	}
}

type Theme = "light" | "dark" | "system";

export default ThemeButton;
