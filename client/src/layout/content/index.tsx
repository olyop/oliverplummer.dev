import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren<ContentProps>> = ({ sidebar, children }) => (
	<div
		className={clsx(
			"pt-header",
			sidebar === null
				? "container mx-auto space-y-8 px-4 pt-8"
				: "lg:pl-sidebar space-y-[calc(3*var(--header-height))]",
		)}
	>
		{children}
	</div>
);

interface ContentProps {
	sidebar: boolean | null;
}

export default Content;
