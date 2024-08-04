import { SetURLSearchParams } from "react-router-dom";

export const syncSearchParams = (
	key: string,
	value: string | boolean | number | null | undefined,
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

export const initializeSearchParams = <T = string>(
	key: string,
	searchParams: URLSearchParams,
	setSearchParams: SetURLSearchParams,
	defaultValue: T,
	isValid: (value: string) => boolean,
	castValue?: (value: string) => T,
) => {
	const paramValue = searchParams.get(key);

	if (paramValue === null) {
		return defaultValue;
	}

	if (!isValid(paramValue)) {
		searchParams.delete(key);
		setSearchParams(searchParams);
		return defaultValue;
	}

	return castValue ? castValue(paramValue) : (paramValue as T);
};
