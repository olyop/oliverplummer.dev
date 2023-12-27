import Main from "main";
import ReCaptcha from "providers/re-captcha";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "tailwindcss/tailwind.css";

import "./index.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<ReCaptcha>
			<Main />
		</ReCaptcha>
	</BrowserRouter>,
);
