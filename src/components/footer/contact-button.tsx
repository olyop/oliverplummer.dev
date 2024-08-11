"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";

import { ContactModal } from "@/components/contact-modal";
import { useModal } from "@/hooks/use-modal";

import { FooterButton } from "./button";

export function FooterContactButton() {
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
}
