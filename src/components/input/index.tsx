/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { ChangeEventHandler, ReactNode } from "react";

import {
	capitalizeFirstLetter,
	convertDateTimeInputToUnixTime,
	convertTimeInputToUnixTime,
	determineInputAcceptValue,
	determineInputType,
	determineInputValue,
	mapListToSelectOptions,
} from "./helpers";
import {
	InputOnChange,
	InputSelectOptions,
	InputType,
	InputValue,
	SelectOption,
} from "./types";

const createClassName = (
	type: InputType,
	value: InputValue,
	className: string | undefined,
	disabled: boolean,
) =>
	`border cursor-pointer outline-none transition-all duration-300 ${type === InputType.CHECKBOX ? "mt-[1px] ml-[1px]" : "w-full"} border-primary ${
		disabled ? "text-gray-400" : "hover:border-primary-accent focus:border-primary-accent"
	} rounded-md py-4 px-3 bg-transparent leading-none ${
		type === InputType.PRICE ? (value === null ? "pl-[3.25rem]" : "pl-6") : ""
	} ${type === InputType.TEXTAREA ? "resize-none h-[7rem]" : ""} ${
		type === InputType.IMAGE
			? `${
					typeof value === "string" && value.length > 0 ? "!pt-[12rem]" : ""
				} file:mr-3 file:bg-primary file:border-none file:text-white file:px-4 file:text-sm file:uppercase file:font-bold file:cursor-pointer file:rounded file:h-10 file:hover:shadow-md`
			: ""
	} ${className ?? ""}`;

export function Input({
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
}: InputProps) {
	const isTimeType = type === InputType.TIME;
	const isDateType = type === InputType.DATE;
	const isCheckboxType = type === InputType.CHECKBOX;
	const isTextAreaType = type === InputType.TEXTAREA;
	const isTextType =
		type === InputType.TEXT || type === InputType.URL || type === InputType.MOBILE;
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
			throw new Error(
				`Invalid input type: ${String(type)} ${value?.toString() ?? "unknown"}`,
			);
		}
	};

	const handleTextAreaChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
		const { value: targetValue } = event.target;

		if (isTextAreaType) {
			onChange(nullable ? (targetValue.length === 0 ? null : targetValue) : targetValue);
		} else {
			throw new Error(
				`Invalid input type: ${String(type)} ${value?.toString() ?? "unknown"}`,
			);
		}
	};

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = event => {
		onChange(event.target.value);
	};

	return (
		<div
			className={`relative ${isCheckboxType ? "flex flex-row-reverse justify-end gap-2" : ""} ${
				isTextAreaType ? (note ? "h-[8.5rem]" : "h-[7rem]") : ""
			} ${className ?? ""}`}
		>
			{hideLabel || (
				<label
					children={optional ? `${name} (optional)` : name}
					htmlFor={type === InputType.LIST ? `${id}-select` : id}
					className={clsx(
						"left-3 z-20 cursor-pointer select-none bg-elevated px-1",
						isCheckboxType
							? "text-base"
							: "absolute -top-1.5 text-xs font-bold uppercase",
						disabled ? "text-gray-400" : "",
						labelClassName,
					)}
				/>
			)}
			{type === InputType.SELECT ? (
				<>
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
							<option value="" className="bg-elevated">
								None found
							</option>
						) : selectOptions === undefined ? (
							<option value="" className="bg-elevated">
								Loading...
							</option>
						) : (
							<>
								{hideEmptySelectOptions || (
									<option value="" className="bg-elevated">
										{placeHolder ?? "Please choose"}
									</option>
								)}
								{selectOptions.map(({ optionID, description }) => (
									<option key={optionID} value={optionID} className="bg-elevated">
										{capitalizeFirstLetter(description)}
									</option>
								))}
							</>
						)}
					</select>
					<ChevronDownIcon
						className={`absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 select-none ${
							disabled ? "text-gray-500" : ""
						}`}
					/>
				</>
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
					className={`px-3 pb-1 text-xs text-gray-500 md:text-sm ${
						noteClassName ?? ""
					} overflow-hidden overflow-ellipsis whitespace-nowrap`}
				>
					{note || "Image is too large"}
				</p>
			)}
		</div>
	);
}

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
