import { FC, PropsWithChildren } from "react";

import Footer from "./layout/footer";
import Header from "./layout/header";
import Navigation from "./layout/navigation";
import Pages from "./layout/pages";

const Background: FC<PropsWithChildren> = () => (
	<div className="flex flex-col items-center w-screen h-screen px-0 pb-48 overflow-scroll overflow-x-hidden font-mono gap-28 bg-primary sm:px-8">
		<div className="flex flex-col items-center w-full gap-12 sm:gap-8">
			<Header />
			<Navigation />
			<Pages />
		</div>
		<Footer />
	</div>
);
export default Background;
