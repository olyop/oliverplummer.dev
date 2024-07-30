import clsx from "clsx";
import { navigationPages } from "layout/navigation-config";
import { FC } from "react";
import { useRoutes } from "react-router-dom";

const Pages: FC<PagesProps> = ({ sidebar }) => {
	const routes = useRoutes(navigationPages);
	return (
		<main
			className={clsx(
				"min-h-[calc(100vh-5rem)] w-full sm:min-h-[calc(100vh-5rem-4rem)] md:p-8",
				sidebar === null && "border-primary rounded-2xl border",
			)}
		>
			{routes}
		</main>
	);
};

export interface PagesProps {
	sidebar: boolean | null;
}

export default Pages;
