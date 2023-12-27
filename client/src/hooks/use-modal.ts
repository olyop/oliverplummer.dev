import { useState } from "react";

export const useModal = (defaultValue = false): UseModalReturn => {
	const [isOpen, setIsOpen] = useState(defaultValue);

	const handleModalOpen = () => {
		setIsOpen(true);
	};

	const handleModalClose = () => {
		setIsOpen(false);
	};

	return [isOpen, handleModalOpen, handleModalClose];
};

type UseModalReturn = [isOpen: boolean, openModal: () => void, closeModal: () => void];
