declare global {
	namespace NodeJS {
		// eslint-disable-next-line unicorn/prevent-abbreviations
		interface ProcessEnv {
			RECAPTCHA_SECRET_KEY: string;
			RECAPTCHA_ACTION_NAME: string;
			RECAPTCHA_MINIMUM_SCORE: string;
			RECAPTCHA_ALLOWED_HOSTNAMES: string;
			CONTACT_DETAILS_EMAIL_ADDRESS: string;
			CONTACT_DETAILS_MOBILE_NUMBER: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
