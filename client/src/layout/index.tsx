import Content from "layout/content";
import Footer from "layout/footer";
import Header from "layout/header";
import Pages from "layout/pages";
import Sidebar from "layout/sidebar";

const Layout = () => (
	<>
		<Header />
		<Sidebar />
		<Content>
			<Pages />
			<Footer />
		</Content>
	</>
);

export default Layout;
