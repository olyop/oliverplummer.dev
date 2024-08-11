import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

import { Button } from "@/components/button";

import { ShareButton } from "./share-button";

export function Page({
	title,
	url,
	text,
	children,
	childrenClassName,
}: PropsWithChildren<PageProps>) {
	return (
		<div className="flex w-full flex-col gap-4 lg:gap-4">
			<div className="fixed top-header z-20 m-0 flex h-header w-full items-center justify-between gap-2 border-b border-primary bg-elevated-hsla px-4 backdrop-blur-sm backdrop-saturate-[180%] sm:static sm:top-0 sm:z-auto sm:h-auto sm:gap-4 sm:border-0 sm:bg-background sm:px-0 sm:backdrop-blur-none sm:backdrop-saturate-0">
				<div className="flex flex-row items-center gap-2 sm:gap-1">
					<Link href="/" className="block sm:hidden">
						<Button
							ariaLabel="To Home"
							textClassName="text-xs"
							iconClassName="size-4 sm:size-3.5"
							leftIcon={iconClassName => <ArrowLeftIcon className={iconClassName} />}
							className="h-8 !gap-0 rounded-full border-0 bg-transparent !px-1 sm:!h-5 sm:!gap-2 sm:!border sm:border-primary sm:!px-2.5"
						/>
					</Link>
					<h1 className="text-center text-2xl sm:text-left sm:text-4xl">
						<b>{title}</b>
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
}

interface PageProps {
	title: string;
	url: string;
	text?: ReactNode;
	childrenClassName?: string;
}
