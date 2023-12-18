import { dateTimeFormatter } from "intl";

import { Experience } from "./types";

export const determineDateStarted = ({ dateStarted, dateEnded }: Experience) =>
	`${dateTimeFormatter.format(dateStarted)} - ${dateEnded ? dateTimeFormatter.format(dateEnded) : "Present"}`;
