import { navigationPages } from "layout/navigation-config";
import { FC } from "react";
import { useRoutes } from "react-router-dom";

const Pages: FC = () => {
	const routes = useRoutes(navigationPages);
	return (
		<main className="lg:page:p-0 lg:page:mt-8 min-h-[calc(100vh-var(--header-height))] w-full transition-none sm:p-8 lg:py-16 lg:pl-16 lg:pr-8">
			{routes}
		</main>
	);
};

export default Pages;
