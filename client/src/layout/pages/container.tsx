import clsx from "clsx";
import HeaderShareButton from "layout/header/share-button";
import { FC, PropsWithChildren, ReactNode } from "react";

const Container: FC<PropsWithChildren<Props>> = ({
	title,
	url,
	text,
	icon,
	children,
	childrenClassName,
}) => (
	<div className="flex flex-col gap-8">
		<div className="h-header top-header bg-elevated-hsla border-primary sm:bg-background fixed z-20 flex w-full items-center justify-between gap-2 border-b px-4 py-4 backdrop-blur-sm backdrop-saturate-[180%] sm:static sm:top-0 sm:z-auto sm:-ml-2 sm:h-auto sm:gap-4 sm:border-0 sm:px-8 sm:backdrop-blur-none sm:backdrop-saturate-0">
			<div className="flex items-center gap-4">
				<div className="flex size-12 items-center justify-center rounded-xl sm:rounded-full">
					{icon("size-6 sm:size-10")}
				</div>
				<h1 className="text-center text-2xl font-bold sm:text-left sm:text-4xl">
					{title}
				</h1>
			</div>
			<HeaderShareButton url={url} />
		</div>
		<div className="mt-header mb-header sm:mt-auto">
			{text && (
				<p className="px-8 py-12 text-center text-xl sm:px-8 sm:py-0 sm:text-left">
					{text}
				</p>
			)}
			<div className={clsx("px-4 sm:p-8", childrenClassName)}>{children}</div>
		</div>
	</div>
);

interface Props {
	title: string;
	url: string;
	icon: (iconClassName: string) => ReactNode;
	text?: ReactNode;
	childrenClassName?: string;
}

export default Container;
