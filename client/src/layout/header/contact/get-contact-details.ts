export const getContactDetails = async (reCaptchaToken: string) => {
	const url = new URL(import.meta.env.VITE_GET_CONTACT_DETAILS_URL);
	url.searchParams.set("reCaptchaToken", reCaptchaToken);

	return fetch(url, {
		method: "GET",
		mode: "cors",
		headers: {
			"Accept": "application/json",
		},
	});
};
