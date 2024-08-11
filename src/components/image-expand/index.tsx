import { Modal } from "@/components/modal";
import { useModal } from "@/hooks/use-modal";

export function ImageExpand({ url, label }: ImageExpandProps) {
	const [isModalOpen, openModal, closeModal] = useModal();

	return (
		<>
			<img
				src={url}
				alt={label}
				aria-hidden
				onClick={openModal}
				className="cursor-pointer hover:opacity-80"
			/>
			<Modal
				title={label}
				isOpen={isModalOpen}
				onClose={closeModal}
				contentClassName="pt-16"
				modalClassName="sm:!w-[calc(100vw_-_10rem)]"
			>
				<img src={url} alt={label} className="w-full" />
			</Modal>
		</>
	);
}

interface ImageExpandProps {
	url: string;
	label: string;
}
