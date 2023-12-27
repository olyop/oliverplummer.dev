import ArrowLongRightIcon from "@heroicons/react/20/solid/ArrowLongRightIcon";
import { Fragment } from "react";

import { Experience } from "./types";

const formatDate = (date: Date) => `${date.toLocaleString(undefined, { month: "long" })} ${date.getFullYear()}`;

export const determineDateStarted = ({ dateStarted, dateEnded }: Experience) => (
	<Fragment>
		<span>{formatDate(dateStarted)}</span>
		<ArrowLongRightIcon className="w-4 h-4" />
		<span>{dateEnded ? formatDate(dateEnded) : "Present"}</span>
	</Fragment>
);
