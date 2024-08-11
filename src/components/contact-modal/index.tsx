import { EnvelopeIcon } from "@heroicons/react/24/outline";

import { Modal } from "@/components/modal";

import { ContactCopyButtons } from "./contact-buttons";

export function ContactModal({ isModalOpen, closeModal }: ContactModalProps) {
	return (
		<Modal
			title="Contact"
			isOpen={isModalOpen}
			onClose={closeModal}
			icon={className => <EnvelopeIcon className={className} />}
			contentClassName="flex flex-col gap-10 p-6"
		>
			<div className="flex flex-col items-center justify-center gap-2">
				<p className="sm:text text-center text-sm">
					You can contact
					<br /> me via email at
				</p>
				<ContactCopyButtons scheme="mailto" text="oliver.plummer@outlook.com" />
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				<p className="sm:text text-center text-sm">
					If you prefer
					<br /> call or text me on
				</p>
				<ContactCopyButtons scheme="tel" text="+61435664195" />
			</div>
		</Modal>
	);
}

interface ContactModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
}
