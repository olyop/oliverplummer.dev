/* eslint-disable jsx-a11y/media-has-caption */
import Modal from "components/modal";
import { useModal } from "hooks/use-modal";
import { FC, Fragment } from "react";

const VideoExpand: FC<Props> = ({ url, label }) => {
	const [isModalOpen, openModal, closeModal] = useModal();

	return (
		<Fragment>
			<video src={url} onClick={openModal} aria-hidden className="cursor-pointer transition-opacity hover:opacity-80" />
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				title={label}
				modalClassName="sm:!w-[calc(100vw_-_10rem)]"
				contentClassName="pt-16"
			>
				<video src={url} className="w-full" />
			</Modal>
		</Fragment>
	);
};

interface Props {
	url: string;
	label: string;
}

export default VideoExpand;
