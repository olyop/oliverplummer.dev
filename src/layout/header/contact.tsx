import PaperAirplaneIcon from "@heroicons/react/20/solid/PaperAirplaneIcon";
import Button from "components/button";
import { FC } from "react";

const Contact: FC = () => (
	<Button
		text="Contact"
		ariaLabel="Contact"
		textClassName="text-xl"
		spanClassName="text-primary"
		className="w-auto gap-4 bg-white shadow-2xl h-full md:h-14 px-6 shadow-secondary-dark hover:!shadow-2xl hover:shadow-secondary-dark hover:bg-secondary"
		rightIcon={className => <PaperAirplaneIcon className={className} />}
	/>
);

export default Contact;
