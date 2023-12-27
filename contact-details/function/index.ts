import type { Handler, LambdaFunctionURLEvent } from "aws-lambda";

const { RECAPTCHA_SECRET_KEY, RECAPTCHA_ACTION_NAME, RECAPTCHA_MINIMUM_SCORE, RECAPTCHA_ALLOWED_HOSTNAMES } =
	process.env;

const RE_CAPTCHA_TOKEN_PARAM_NAME = "reCaptchaToken";
const RE_CAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

const allowedHostnames = RECAPTCHA_ALLOWED_HOSTNAMES.split(",").reduce(
	(accumulator, hostname) => accumulator.add(hostname),
	new Set<string>(),
);

const contactDetails: ContactDetails = {
	emailAddress: "oliver.plummer@outlook.com",
	mobileNumber: "+61435664195",
};

const verifyReCaptchaToken = async (token: string, remoteIp: string) => {
	const url = new URL(RE_CAPTCHA_VERIFY_URL);

	url.searchParams.append("secret", RECAPTCHA_SECRET_KEY);
	url.searchParams.append("response", token);
	url.searchParams.append("remoteip", remoteIp);

	const reCaptchaResponse = await fetch(url, {
		method: "POST",
		headers: {
			"Accept": "application/json",
		},
	});

	const verifyResponse = (await reCaptchaResponse.json()) as ReCaptchaVerifyResponse;

	if (verifyResponse["error-codes"] !== undefined) {
		throw new Error(verifyResponse["error-codes"].join(", "));
	}

	if (verifyResponse.action !== RECAPTCHA_ACTION_NAME) {
		throw new Error("Invalid action");
	}

	if (!allowedHostnames.has(verifyResponse.hostname ?? "")) {
		throw new Error("Invalid hostname");
	}

	if ((verifyResponse.score ?? 0) < Number.parseInt(RECAPTCHA_MINIMUM_SCORE)) {
		throw new Error("Invalid score");
	}

	if (!verifyResponse.success) {
		throw new Error("Unsuccessful");
	}
};

export const handler: Handler<LambdaFunctionURLEvent, Response> = async event => {
	if (event.queryStringParameters === undefined) {
		return { error: "event.queryStringParameters is undefined" };
	}

	const reCaptchaToken = event.queryStringParameters[RE_CAPTCHA_TOKEN_PARAM_NAME];

	if (reCaptchaToken === undefined) {
		return { error: `Missing ${RE_CAPTCHA_TOKEN_PARAM_NAME} parameter` };
	}

	try {
		await verifyReCaptchaToken(reCaptchaToken, event.requestContext.http.sourceIp);
	} catch (error) {
		return {
			error: error instanceof Error ? error.message : "Unknown error",
		};
	}

	return {
		contactDetails,
	};
};

interface Response {
	error?: string;
	contactDetails?: ContactDetails;
}

interface ContactDetails {
	emailAddress: string;
	mobileNumber: string;
}

interface ReCaptchaVerifyResponse {
	success: boolean;
	score?: number;
	action?: string;
	hostname?: string;
	"error-codes"?: string[];
}
