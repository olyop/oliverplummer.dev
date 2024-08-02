import { EnvelopeIcon } from "@heroicons/react/24/outline";
import ContactModal from "components/contact-modal";
import { useModal } from "hooks/use-modal";
import { FC } from "react";

import FooterButton from "./button";

const FooterContactButton: FC = () => {
	const [isModalOpen, openModal, closeModal] = useModal();

	return (
		<>
			<FooterButton
				onClick={openModal}
				leftIcon={iconClassName => <EnvelopeIcon className={iconClassName} />}
				text="Contact"
			/>
			<ContactModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</>
	);
};

export default FooterContactButton;
