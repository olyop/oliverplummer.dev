import { SetURLSearchParams } from "react-router-dom";

export const isTouchDevice = () =>
	/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent);

export const syncSearchParams = (
	key: string,
	value: string | number | null | undefined,
	setUrlSearchParams: SetURLSearchParams,
) => {
	setUrlSearchParams(
		prevSearchParams => {
			if (value) {
				const valueString = String(value);

				if (prevSearchParams.has(key)) {
					prevSearchParams.set(key, valueString);
				} else {
					prevSearchParams.append(key, valueString);
				}
			} else {
				prevSearchParams.delete(key);
			}

			return prevSearchParams;
		},
		{
			replace: true,
		},
	);
};

export const initializeSearchParams = <T extends string>(
	key: string,
	urlSearchParams: URLSearchParams,
	setUrlSearchParams: SetURLSearchParams,
	isValid: (value: string) => boolean,
) => {
	const openSectionParam = urlSearchParams.get(key);

	if (!openSectionParam) {
		return null;
	}

	if (!isValid(openSectionParam)) {
		urlSearchParams.delete(key);
		setUrlSearchParams(urlSearchParams);
		return null;
	}

	return openSectionParam as T;
};
