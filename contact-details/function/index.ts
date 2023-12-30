import type { APIGatewayProxyEventV2, Handler, LambdaFunctionURLEvent } from "aws-lambda";

const {
	RECAPTCHA_SECRET_KEY,
	RECAPTCHA_ACTION_NAME,
	RECAPTCHA_MINIMUM_SCORE,
	RECAPTCHA_ALLOWED_HOSTNAMES,
	CONTACT_DETAILS_EMAIL_ADDRESS,
	CONTACT_DETAILS_MOBILE_NUMBER,
} = process.env;

const RE_CAPTCHA_TOKEN_PARAM_NAME = "reCaptchaToken";
const RE_CAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

const ALLOWED_HOSTNAMES = RECAPTCHA_ALLOWED_HOSTNAMES.split(",").reduce(
	(accumulator, hostname) => accumulator.add(hostname),
	new Set<string>(),
);

const CONTACT_DETAILS: ContactDetails = {
	emailAddress: CONTACT_DETAILS_EMAIL_ADDRESS,
	mobileNumber: CONTACT_DETAILS_MOBILE_NUMBER,
};

class ValidationError extends Error {
	constructor(message: string) {
		super(message);

		this.name = "ValidationError";
	}
}

const getReCaptchaToken = (event: APIGatewayProxyEventV2) => {
	if (event.queryStringParameters === undefined) {
		throw new ValidationError("event.queryStringParameters is undefined");
	}

	const reCaptchaToken = event.queryStringParameters[RE_CAPTCHA_TOKEN_PARAM_NAME];

	if (reCaptchaToken === undefined) {
		throw new ValidationError(`Missing ${RE_CAPTCHA_TOKEN_PARAM_NAME} parameter`);
	}

	return reCaptchaToken;
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
		throw new ValidationError(verifyResponse["error-codes"].join(", "));
	}

	if (verifyResponse.action !== RECAPTCHA_ACTION_NAME) {
		throw new ValidationError("Invalid action");
	}

	if (!ALLOWED_HOSTNAMES.has(verifyResponse.hostname ?? "")) {
		throw new ValidationError("Invalid hostname");
	}

	if ((verifyResponse.score ?? 0) < Number.parseInt(RECAPTCHA_MINIMUM_SCORE)) {
		throw new ValidationError("Invalid score");
	}

	if (!verifyResponse.success) {
		throw new ValidationError("Unsuccessful");
	}
};

export const handler: Handler<LambdaFunctionURLEvent, Response> = async event => {
	try {
		const reCaptchaToken = getReCaptchaToken(event);

		await verifyReCaptchaToken(reCaptchaToken, event.requestContext.http.sourceIp);
	} catch (error) {
		if (error instanceof ValidationError) {
			return {
				error: error.message,
			};
		} else {
			console.error(error);

			throw new Error("Unknown error");
		}
	}

	return {
		contactDetails: CONTACT_DETAILS,
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
