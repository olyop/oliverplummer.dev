import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

import { Experience } from "./types";

const formatDate = (date: Date) =>
	`${date.toLocaleString(undefined, { month: "long" })} ${date.getFullYear().toString()}`;

export const determineDateStarted = ({ dateStarted, dateEnded }: Experience) => (
	<Fragment>
		<span>{formatDate(dateStarted)}</span>
		<ArrowLongRightIcon className="size-5" />
		<span>{dateEnded ? formatDate(dateEnded) : "Present"}</span>
	</Fragment>
);
