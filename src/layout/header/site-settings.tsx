import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import Button from "components/button";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { FC } from "react";

const SiteSettings: FC = () => {
	const breakpoint = useBreakpoint();

	if (breakpoint === Breakpoint.TINY) {
		return null;
	}

	return (
		<Button
			ariaLabel="Settings"
			textClassName="text-xl"
			className="h-14 w-auto lg:px-6 gap-4 !shadow-none"
			leftIcon={className => <Cog6ToothIcon className={className} />}
			text={breakpoint === Breakpoint.SMALL || breakpoint === Breakpoint.MEDIUM ? undefined : "Settings"}
		/>
	);
};

export default SiteSettings;
