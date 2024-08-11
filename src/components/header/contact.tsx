"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/button";
import { ContactModal } from "@/components/contact-modal";
import { useModal } from "@/hooks/use-modal";

export function HeaderContactButton() {
	const [isModalOpen, openModal, closeModal] = useModal(false);

	return (
		<>
			<Button
				ariaLabel="Contact"
				onClick={openModal}
				iconClassName="size-10"
				className="!h-12"
				leftIcon={iconClassName => <EnvelopeIcon className={iconClassName} />}
				text="Contact"
			/>
			<ContactModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</>
	);
}
