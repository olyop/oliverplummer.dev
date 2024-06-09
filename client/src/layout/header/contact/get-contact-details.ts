export const getContactDetails = async (reCaptchaToken: string) => {
	const url = new URL(import.meta.env.VITE_GET_CONTACT_DETAILS_URL);
	url.searchParams.set("reCaptchaToken", reCaptchaToken);

	const headers = new Headers();
	headers.append("Accept", "application/json");

	const request = new Request(url, {
		method: "GET",
		mode: "no-cors",
		headers,
	});

	return fetch(request);
};
