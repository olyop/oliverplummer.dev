import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export const useReCaptcha = (action: string) => {
	const { executeRecaptcha } = useGoogleReCaptcha();

	const [reCaptchaToken, setReCaptchaToken] = useState<string | null>(null);

	const executeReCaptcha = async () => {
		if (executeRecaptcha) {
			try {
				const token = await executeRecaptcha(action);

				setReCaptchaToken(token);
			} catch {
				setReCaptchaToken(null);
			}
		}
	};

	const getReCaptchaToken = () => {
		void executeReCaptcha();
	};

	return [reCaptchaToken, getReCaptchaToken] as const;
};
