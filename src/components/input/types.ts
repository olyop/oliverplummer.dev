export enum InputType {
	TEXT,
	TEXTAREA,
	MOBILE,
	INTEGER,
	PRICE,
	URL,
	SELECT,
	LIST,
	TIME,
	DATE,
	CHECKBOX,
	IMAGE,
}

export type InputValue = readonly string[] | string | number | boolean | null;

export type InputOnChange = (value: InputValue) => void;

export type InputSelectOptions = SelectOption[] | null | undefined;

export interface SelectOption {
	optionID: string;
	description: string;
}
