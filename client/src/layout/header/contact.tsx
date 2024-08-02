import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Button from "components/button";
import ContactModal from "components/contact-modal";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { useModal } from "hooks/use-modal";
import { FC, Fragment } from "react";

const Contact: FC<ContactProps> = ({ sidebar }) => {
	const breakpoint = useBreakpoint();
	const [isModalOpen, openModal, closeModal] = useModal(false);

	const shouldCollapse =
		sidebar === null
			? breakpoint !== Breakpoint.EXTRA_LARGE
			: !(breakpoint === Breakpoint.EXTRA_LARGE || breakpoint === Breakpoint.MEDIUM);

	return (
		<Fragment>
			<Button
				text={shouldCollapse ? undefined : "Contact"}
				ariaLabel="Contact"
				onClick={openModal}
				iconClassName="size-10"
				className={shouldCollapse ? "!size-12" : "!h-12"}
				textClassName="mt-[3px]"
				leftIcon={iconClassName => <EnvelopeIcon className={iconClassName} />}
			/>
			<ContactModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</Fragment>
	);
};

interface ContactProps {
	sidebar: boolean | null;
}

export default Contact;
