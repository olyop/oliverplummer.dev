import { FC } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

import Skills from "./skills";

const routesConfig: RouteObject[] = [
	{
		path: "skills",
		element: <Skills />,
	},
];

const Pages: FC = () => {
	const routes = useRoutes(routesConfig);
	return <main className="container p-8 bg-white shadow-lg lg:p-16 shadow-black rounded-3xl">{routes}</main>;
};

export default Pages;
