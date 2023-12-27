import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import { ChangeEventHandler, FC, Fragment, ReactNode } from "react";

import {
	capitalizeFirstLetter,
	convertDateTimeInputToUnixTime,
	convertTimeInputToUnixTime,
	determineInputAcceptValue,
	determineInputType,
	determineInputValue,
	mapListToSelectOptions,
} from "./helpers";
import { InputOnChange, InputSelectOptions, InputType, InputValue, SelectOption } from "./types";

const createClassName = (type: InputType, value: InputValue, className: string | undefined, disabled: boolean) =>
	`border cursor-pointer outline-none ${type === InputType.CHECKBOX ? "mt-[1px] ml-[1px]" : "w-full"} border-gray-200 ${
		disabled ? "text-gray-400" : "hover:border-gray-400 transition-all"
	} rounded-md py-4 px-3 bg-transparent leading-none focus:border-gray-700 ${
		type === InputType.PRICE ? (value === null ? "pl-[3.25rem]" : "pl-6") : ""
	} ${type === InputType.TEXTAREA ? "resize-none h-[7rem]" : ""} ${
		type === InputType.IMAGE
			? `${
					typeof value === "string" && value.length > 0 ? "!pt-[12rem]" : ""
				} file:mr-3 file:bg-primary file:border-none file:text-white file:px-4 file:text-sm file:uppercase file:font-bold file:cursor-pointer file:rounded file:h-10 file:hover:shadow-md file:transition-all file:hover:bg-primary-dark`
			: ""
	} ${className ?? ""}`;

const Input: FC<InputProps> = ({
	id,
	type,
	name,
	note,
	value,
	hideLabel = false,
	nullable = false,
	disabled = false,
	optional = false,
	maxLength = 1024,
	className,
	noteClassName,
	labelClassName,
	autoComplete,
	placeHolder,
	selectOptions,
	hideEmptySelectOptions = false,
	onChange,
}) => {
	const isTimeType = type === InputType.TIME;
	const isDateType = type === InputType.DATE;
	const isCheckboxType = type === InputType.CHECKBOX;
	const isTextAreaType = type === InputType.TEXTAREA;
	const isTextType = type === InputType.TEXT || type === InputType.URL || type === InputType.MOBILE;
	const isIntegerType = type === InputType.INTEGER || type === InputType.PRICE;

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
		const { value: targetValue, checked } = event.target;

		if (isTimeType && typeof value === "number") {
			onChange(convertTimeInputToUnixTime(value, targetValue));
		} else if (isDateType && typeof value === "number") {
			onChange(convertDateTimeInputToUnixTime(value, targetValue));
		} else if (isIntegerType) {
			if (targetValue.length === 0) {
				onChange(null);
			} else {
				const valueInt = Number.parseInt(targetValue, 10);
				onChange(nullable ? (valueInt === 0 ? null : valueInt) : valueInt);
			}
		} else if (isTextType) {
			onChange(nullable ? (targetValue.length === 0 ? null : targetValue) : targetValue);
		} else if (isCheckboxType) {
			onChange(checked);
		} else {
			throw new Error(`Invalid input type: ${type} ${value?.toString() ?? "unknown"}`);
		}
	};

	const handleTextAreaChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
		const { value: targetValue } = event.target;

		if (isTextAreaType) {
			onChange(nullable ? (targetValue.length === 0 ? null : targetValue) : targetValue);
		} else {
			throw new Error(`Invalid input type: ${type} ${value?.toString() ?? "unknown"}`);
		}
	};

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = event => {
		onChange(event.target.value);
	};

	return (
		<div
			className={`relative ${isCheckboxType ? "flex gap-2 flex-row-reverse justify-end" : ""} ${
				isTextAreaType ? (note ? "h-[8.5rem]" : "h-[7rem]") : ""
			} ${className ?? ""}`}
		>
			{hideLabel || (
				<label
					children={optional ? `${name} (optional)` : name}
					htmlFor={type === InputType.LIST ? `${id}-select` : id}
					className={`${
						isCheckboxType ? "text-base" : "uppercase font-bold text-xs absolute -top-1.5"
					} cursor-pointer left-3 bg-white z-50 select-none ${disabled ? "text-gray-400" : ""} ${labelClassName ?? ""}`}
				/>
			)}
			{type === InputType.SELECT ? (
				<Fragment>
					<select
						id={id}
						name={name}
						disabled={disabled}
						onChange={handleSelectChange}
						value={determineInputValue(type, value, selectOptions)}
						className={`${createClassName(type, value, className, disabled)} appearance-none ${
							disabled ? "text-gray-400" : ""
						}`}
					>
						{selectOptions === null ? (
							<option value="">None found</option>
						) : selectOptions === undefined ? (
							<option value="">Loading...</option>
						) : (
							<Fragment>
								{hideEmptySelectOptions || <option value="">{placeHolder ?? "Please choose"}</option>}
								{selectOptions.map(({ optionID, description }) => (
									<option key={optionID} value={optionID}>
										{capitalizeFirstLetter(description)}
									</option>
								))}
							</Fragment>
						)}
					</select>
					<ChevronDownIcon
						className={`w-4 h-4 absolute -translate-y-1/2 top-1/2 right-4 select-none ${
							disabled ? "text-gray-500" : ""
						}`}
					/>
				</Fragment>
			) : isTextAreaType ? (
				<textarea
					id={id}
					name={name}
					rows={5}
					maxLength={maxLength}
					placeholder={placeHolder}
					autoComplete={autoComplete}
					onChange={handleTextAreaChange}
					className={createClassName(type, value, className, disabled)}
					value={determineInputValue(type, value, selectOptions)}
				/>
			) : (
				<input
					id={id}
					name={name}
					disabled={disabled}
					placeholder={placeHolder}
					autoComplete={autoComplete}
					onChange={handleInputChange}
					type={determineInputType(type)}
					max={isIntegerType ? 50 : undefined}
					step={isIntegerType ? 1 : undefined}
					accept={determineInputAcceptValue(type)}
					min={isIntegerType ? (nullable ? 0 : 1) : undefined}
					maxLength={type === InputType.MOBILE ? 14 : maxLength}
					value={determineInputValue(type, value, selectOptions)}
					className={createClassName(type, value, className, disabled)}
					checked={isCheckboxType && typeof value === "boolean" ? value : undefined}
				/>
			)}
			{note && !isCheckboxType && (
				<p
					className={`text-gray-500 text-xs md:text-sm px-3 pb-1 ${
						noteClassName ?? ""
					} whitespace-nowrap overflow-hidden overflow-ellipsis`}
				>
					{note || "Image is too large"}
				</p>
			)}
		</div>
	);
};

interface InputProps {
	id: string;
	name: string;
	hideLabel?: boolean;
	note?: ReactNode;
	nullable?: boolean;
	disabled?: boolean;
	className?: string;
	maxLength?: number;
	noteClassName?: string | undefined;
	labelClassName?: string;
	value: InputValue;
	placeHolder?: string;
	optional?: boolean;
	autoComplete?: string;
	type: InputType;
	onChange: InputOnChange;
	selectOptions?: InputSelectOptions;
	hideEmptySelectOptions?: boolean;
}

export { InputType, mapListToSelectOptions };
export type { InputOnChange, SelectOption, InputSelectOptions };

export default Input;
