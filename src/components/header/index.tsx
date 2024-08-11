import { HeaderContactButton } from "./contact";
import { HeaderMenuButton } from "./menu";
import { HeaderNavigation } from "./navigation";
import { HeaderThemeButton } from "./theme";

export function Header() {
	return (
		<header className="border-primary h-header xl bg-elevated-hsla pr-scrollbar fixed left-0 top-0 z-50 m-0 w-screen border-b backdrop-blur-sm backdrop-saturate-[180%] sm:shadow">
			<div className="lg:page:container lg:page:mx-auto lg:page:px-4 flex h-full items-center justify-between px-4 sm:px-8 md:pl-8 md:pr-8 lg:pl-4">
				<div className="flex h-full items-center gap-4 sm:gap-6">
					<HeaderMenuButton />
					<HeaderNavigation />
				</div>
				<div className="flex items-center gap-2 sm:gap-4">
					<HeaderThemeButton />
					<HeaderContactButton />
				</div>
			</div>
		</header>
	);
}
