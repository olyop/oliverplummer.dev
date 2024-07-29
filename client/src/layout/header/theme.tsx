import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Button from "components/button";
import { FC, useState } from "react";

const ThemeButton: FC = () => {
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
		<Button
			isTransparent
			ariaLabel="Theme toggle"
			iconClassName="size-10"
			className="!size-12"
			onClick={handleThemeChange}
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
