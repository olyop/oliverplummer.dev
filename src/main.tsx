import { FC, PropsWithChildren } from "react";

import Header from "./layout/header";
import Navigation from "./layout/navigation";
import Pages from "./layout/pages";
import Footer from "./layout/footer";

const Background: FC<PropsWithChildren> = () => (
	<div className="flex flex-col items-center w-screen h-screen gap-8 p-8 overflow-scroll overflow-x-hidden font-mono bg-primary-dark opacity-900">
		<Header />
		<Navigation />
		<Pages />
		<Footer />
	</div>
);
export default Background;
