import { navigationPages } from "layout/navigation-config";
import { FC } from "react";
import { useRoutes } from "react-router-dom";

const Pages: FC = () => {
	const routes = useRoutes(navigationPages);
	return (
		<main className="container bg-white px-4 py-12 shadow-2xl shadow-black sm:rounded-2xl sm:px-4 sm:py-4 sm:pt-4 md:p-8 lg:p-16">
			{routes}
		</main>
	);
};

export default Pages;
