export const useContactDetails = async (reCaptchaToken: string) => {
	const url = new URL(import.meta.env.VITE_GET_CONTACT_DETAILS_URL);
	url.searchParams.set("reCaptchaToken", reCaptchaToken);

	const initializingTimeout = setTimeout(() => {
		setReCaptchaMessage("Contacting ReCaptcha");
	}, 500);

	const sendingReCaptchaTimeout = setTimeout(() => {
		setReCaptchaMessage("Sending ReCaptcha");
	}, 1200);

	try {
		const response = await fetch(url, {
			method: "GET",
			mode: "cors",
			headers: {
				"Accept": "application/json",
			},
		});

		if (response.ok) {
			const verifyResponse = (await response.json()) as GetContactDetailsResponse;

			if (verifyResponse.error) {
				setReCaptchaError(verifyResponse.error);
			} else {
				setContactDetails(verifyResponse.contactDetails);
			}
		} else {
			setReCaptchaError(response.statusText);
		}
	} catch (error) {
		setReCaptchaError(error instanceof Error ? error.message : "An error occurred while contacting the server");
	} finally {
		clearTimeout(initializingTimeout);
		clearTimeout(sendingReCaptchaTimeout);
		setReCaptchaMessage("Verifying you are not a robot");
	}

	return [contactDetails, reCaptchaError, reCaptchaMessage] as const;
};

interface GetContactDetailsResponse {
	error?: string;
	contactDetails: ContactDetails;
}
