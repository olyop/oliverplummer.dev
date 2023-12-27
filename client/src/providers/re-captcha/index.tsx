import { FC, PropsWithChildren } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import "./index.css";

const ReCaptcha: FC<PropsWithChildren> = ({ children }) => (
	<GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}>
		{children}
	</GoogleReCaptchaProvider>
);

export default ReCaptcha;
