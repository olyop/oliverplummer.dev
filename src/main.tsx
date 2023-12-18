import { FC, PropsWithChildren } from "react";

import Footer from "./layout/footer";
import Header from "./layout/header";
import Navigation from "./layout/navigation";
import Pages from "./layout/pages";

const Background: FC<PropsWithChildren> = () => (
	<div className="flex flex-col items-center w-screen h-screen gap-8 px-4 py-8 overflow-scroll overflow-x-hidden font-mono md:px-8 bg-primary">
		<Header />
		<Navigation />
		<Pages />
		<Footer />
	</div>
);
export default Background;
