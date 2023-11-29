import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import Button from "components/button";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { FC } from "react";

const SiteSettings: FC = () => {
	const breakpoint = useBreakpoint();
	return (
		<Button
			ariaLabel="Site Settings"
			className="h-14 lg:w-auto px-6 gap-4 !shadow-none"
			textClassName="text-xl"
			iconClassName="h-12 w-12"
			leftIcon={className => <Cog6ToothIcon className={className} />}
			text={breakpoint === Breakpoint.TINY || breakpoint === Breakpoint.SMALL ? undefined : "Site Settings"}
		/>
	);
};

export default SiteSettings;
