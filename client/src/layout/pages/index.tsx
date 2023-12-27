import { navigationPages } from "layout/navigation-config";
import { FC } from "react";
import { useRoutes } from "react-router-dom";

const Pages: FC = () => {
	const routes = useRoutes(navigationPages);
	return (
		<main className="container px-4 py-12 bg-white shadow-2xl sm:py-4 sm:pt-4 sm:px-4 md:p-8 lg:p-16 shadow-black sm:rounded-2xl">
			{routes}
		</main>
	);
};

export default Pages;
