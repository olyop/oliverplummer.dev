import "@fontsource-variable/rubik";
import Layout from "layout";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Layout />
	</BrowserRouter>,
);
