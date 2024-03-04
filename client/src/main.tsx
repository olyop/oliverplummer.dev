import { FC, PropsWithChildren } from "react";

import Footer from "./layout/footer";
import Header from "./layout/header";
import Navigation from "./layout/navigation";
import Pages from "./layout/pages";

const Background: FC<PropsWithChildren> = () => (
	<div className="bg-primary flex h-screen w-screen flex-col items-center gap-28 overflow-scroll overflow-x-hidden px-0 pb-48 font-mono sm:px-8">
		<div className="flex w-full flex-col items-center gap-12 sm:gap-8">
			<Header />
			<Navigation />
			<Pages />
		</div>
		<Footer />
	</div>
);
export default Background;
