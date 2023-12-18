import { navigationPages } from "layout/navigation-config";
import { FC } from "react";
import { useRoutes } from "react-router-dom";

const Pages: FC = () => {
	const routes = useRoutes(navigationPages);
	return <main className="container p-4 bg-white shadow-lg md:p-8 lg:p-16 shadow-black rounded-3xl">{routes}</main>;
};

export default Pages;
