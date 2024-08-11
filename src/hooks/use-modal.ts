import { useState } from "react";

export const useModal = (defaultValue = false) => {
	const [isOpen, setIsOpen] = useState(defaultValue);

	const handleModalOpen = () => {
		setIsOpen(true);
	};

	const handleModalClose = () => {
		setIsOpen(false);
	};

	return [isOpen, handleModalOpen, handleModalClose] as [
		isOpen: boolean,
		openModal: () => void,
		closeModal: () => void,
	];
};
