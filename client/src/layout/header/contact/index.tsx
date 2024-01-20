import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";
import PaperAirplaneIcon from "@heroicons/react/20/solid/PaperAirplaneIcon";
import Button from "components/button";
import Modal from "components/modal";
import { useModal } from "hooks/use-modal";
import { useReCaptcha } from "hooks/use-re-captcha";
import { FC, Fragment, useEffect, useState } from "react";

import { ContactCopyButtons } from "./contact-buttons";
import { getContactDetails } from "./get-contact-details";

const INITIAL_RE_CAPTCHA_MESSAGE = "Verifying you are not a robot";
const DEFAULT_RE_CAPTCHA_ERROR = "An error occurred while contacting the server";

const Contact: FC = () => {
	const [isModalOpen, openModal, closeModal] = useModal(false);

	const [reCaptchaError, setReCaptchaError] = useState<string | null>(null);
	const [reCaptchaMessage, setReCaptchaMessage] = useState<string>(INITIAL_RE_CAPTCHA_MESSAGE);

	const [contactDetails, setContactDetails] = useState<ContactDetails | null>(null);

	const [reCaptchaToken, getReCaptchaToken] = useReCaptcha("getContactDetails");

	const handleContactDetails = async () => {
		if (reCaptchaToken) {
			let shouldReset = false;

			const initializingTimeout = setTimeout(() => {
				setReCaptchaMessage("Contacting ReCaptcha");
			}, 600);

			const sendingReCaptchaTimeout = setTimeout(() => {
				setReCaptchaMessage("Sending ReCaptcha Token");
			}, 1500);

			try {
				const response = await getContactDetails(reCaptchaToken);

				if (response.ok) {
					const verifyResponse = (await response.json()) as GetContactDetailsResponse;

					if (verifyResponse.error) {
						shouldReset = true;

						setReCaptchaError(verifyResponse.error);
					} else if (verifyResponse.contactDetails) {
						setContactDetails(verifyResponse.contactDetails);
					} else {
						shouldReset = true;

						setReCaptchaError(DEFAULT_RE_CAPTCHA_ERROR);
					}
				} else {
					shouldReset = true;

					setReCaptchaError(DEFAULT_RE_CAPTCHA_ERROR);
				}
			} catch (error) {
				shouldReset = true;

				setReCaptchaError(error instanceof Error ? error.message : DEFAULT_RE_CAPTCHA_ERROR);
			} finally {
				clearTimeout(initializingTimeout);
				clearTimeout(sendingReCaptchaTimeout);

				if (!shouldReset) {
					setReCaptchaError(null);
				}

				setReCaptchaMessage(INITIAL_RE_CAPTCHA_MESSAGE);
			}
		}
	};

	const handleRetry = () => {
		setReCaptchaError(null);
		getReCaptchaToken();
	};

	useEffect(() => {
		if (isModalOpen) {
			getReCaptchaToken();
		}
	}, [isModalOpen]);

	useEffect(() => {
		if (reCaptchaToken) {
			void handleContactDetails();
		}
	}, [reCaptchaToken]);

	return (
		<Fragment>
			<Button
				text="Contact"
				ariaLabel="Contact"
				textClassName="text-xl"
				spanClassName="text-primary"
				onClick={openModal}
				rightIcon={className => <PaperAirplaneIcon className={className} />}
				className="sm:w-auto gap-2 sm:gap-4 bg-white shadow-3xl w-full h-full border-2 hover:border-secondary-dark border-secondary md:h-14 px-4 sm:px-6 shadow-secondary-dark hover:!shadow-4xl hover:shadow-secondary-dark hover:bg-secondary"
			/>
			<Modal
				title="Contact"
				isOpen={isModalOpen}
				onClose={closeModal}
				contentClassName="flex flex-col gap-10 py-6 relative"
				icon={className => <PaperAirplaneIcon className={className} />}
			>
				{contactDetails === null && (
					<Fragment>
						<div className="absolute top-0 left-0 w-full h-full bg-white opacity-80 z-10" />
						<div className="absolute top-1/2 left-1/2 z-10 flex flex-col gap-4 items-center w-56 -translate-x-1/2 -translate-y-1/2">
							<p className="text-center p-2 bg-white">{reCaptchaError ?? reCaptchaMessage}</p>
							{reCaptchaError ? (
								<Button
									ariaLabel="Retry"
									text="Retry"
									onClick={handleRetry}
									leftIcon={className => <ArrowPathIcon className={className} />}
								/>
							) : (
								<ArrowPathIcon className="w-12 h-12 animate-spin " />
							)}
						</div>
					</Fragment>
				)}
				<div className="flex flex-col items-center justify-center gap-2">
					<p className="text-sm text-center sm:text">
						You can contact
						<br /> me via email at
					</p>
					<ContactCopyButtons text={contactDetails?.emailAddress ?? "**************************"} scheme="mailto" />
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<p className="text-sm text-center sm:text">
						If you prefer
						<br /> call or text me on
					</p>
					<ContactCopyButtons text={contactDetails?.mobileNumber ?? "************"} scheme="tel" />
				</div>
			</Modal>
		</Fragment>
	);
};

interface ContactDetails {
	emailAddress: string;
	mobileNumber: string;
}

interface GetContactDetailsResponse {
	error?: string;
	contactDetails?: ContactDetails;
}

export default Contact;
