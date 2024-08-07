import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Button from "components/button";
import { FC, PropsWithChildren, ReactNode } from "react";
import { NavLink } from "react-router-dom";

import ShareButton from "./share-button";

const Page: FC<PropsWithChildren<PageProps>> = ({
	title,
	url,
	text,
	children,
	childrenClassName,
}) => (
	<div className="flex w-full flex-col gap-4 lg:gap-8">
		<div className="h-header top-header bg-elevated-hsla border-primary sm:bg-background fixed z-20 m-0 flex w-full items-center justify-between gap-2 border-b px-4 backdrop-blur-sm backdrop-saturate-[180%] sm:static sm:top-0 sm:z-auto sm:h-auto sm:gap-4 sm:border-0 sm:px-0 sm:backdrop-blur-none sm:backdrop-saturate-0">
			<div className="flex flex-row items-center gap-2 sm:gap-1">
				<NavLink to="/" className="block sm:hidden">
					<Button
						text={<span className="hidden sm:inline">Back</span>}
						ariaLabel="To Home"
						className="sm:border-primary h-8 !gap-0 rounded-full border-0 bg-transparent !px-1 sm:!h-5 sm:!gap-2 sm:!border sm:!px-2.5"
						iconClassName="size-4 sm:size-3.5"
						textClassName="text-xs"
						leftIcon={iconClassName => <ArrowLeftIcon className={iconClassName} />}
					/>
				</NavLink>
				<h1 className="text-center text-2xl font-bold sm:text-left sm:text-4xl">
					{title}
				</h1>
			</div>
			<ShareButton url={url} />
		</div>
		<div className="mt-header sm:mt-auto sm:space-y-12">
			{text && (
				<p className="px-8 py-12 text-center text-lg sm:max-w-[75%] sm:px-0 sm:py-0 sm:text-left lg:text-xl">
					{text}
				</p>
			)}
			<div className={clsx("px-4 sm:px-0", childrenClassName)}>{children}</div>
		</div>
	</div>
);

interface PageProps {
	title: string;
	url: string;
	icon: (iconClassName: string) => ReactNode;
	text?: ReactNode;
	childrenClassName?: string;
}

export default Page;
