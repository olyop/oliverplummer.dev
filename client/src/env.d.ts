/// <reference types="vite/client" />

// eslint-disable-next-line unicorn/prevent-abbreviations
interface ImportMetaEnv {
	readonly VITE_GOOGLE_RECAPTCHA_ACTION: string;
	readonly VITE_GOOGLE_RECAPTCHA_SITE_KEY: string;
	readonly VITE_GET_CONTACT_DETAILS_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
