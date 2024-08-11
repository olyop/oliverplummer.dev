import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
	return (
		<div className="space-y-[calc(3*var(--header-height))] pt-header lg:page:container lg:pl-sidebar lg:page:mx-auto lg:page:px-4 lg:page:pl-4">
			{children}
		</div>
	);
}
