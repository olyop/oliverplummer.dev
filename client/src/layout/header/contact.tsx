import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Button from "components/button";
import ContactModal from "components/contact-modal";
import { useModal } from "hooks/use-modal";
import { FC, Fragment } from "react";

const Contact: FC = () => {
	const [isModalOpen, openModal, closeModal] = useModal(false);

	return (
		<Fragment>
			<Button
				ariaLabel="Contact"
				onClick={openModal}
				iconClassName="size-10"
				className="!h-12"
				textClassName="mt-[3px]"
				leftIcon={iconClassName => <EnvelopeIcon className={iconClassName} />}
				text="Contact"
			/>
			<ContactModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</Fragment>
	);
};

export default Contact;
