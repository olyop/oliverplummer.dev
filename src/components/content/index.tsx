import { PropsWithChildren } from "react";

export function Content({ children }: PropsWithChildren) {
	return (
		<main className="lg:page:p-0 lg:page:mt-16 min-h-[calc(100vh-var(--header-height))] w-full transition-none sm:p-8 lg:py-16 lg:pl-16 lg:pr-8">
			{children}
		</main>
	);
}
