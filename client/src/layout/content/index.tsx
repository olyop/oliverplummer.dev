import { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => (
	<div className="pt-header lg:page:container lg:page:mx-auto lg:page:px-4 lg:pl-sidebar lg:page:pl-4 space-y-[calc(3*var(--header-height))]">
		{children}
	</div>
);

export default Content;
