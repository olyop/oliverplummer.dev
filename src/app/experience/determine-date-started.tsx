import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import { Experience } from "./types";

export function determineDateStarted({ dateStarted, dateEnded }: Experience) {
	return (
		<>
			<span>{formatDate(dateStarted)}</span>
			<ArrowLongRightIcon className="size-5" />
			<span>{dateEnded ? formatDate(dateEnded) : "Present"}</span>
		</>
	);
}

function formatDate(date: Date) {
	return `${date.toLocaleString(undefined, { month: "long" })} ${date.getFullYear().toString()}`;
}
