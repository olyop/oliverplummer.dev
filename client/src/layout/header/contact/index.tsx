// import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Button from "components/button";
import Modal from "components/modal";
import { Breakpoint, useBreakpoint } from "hooks/use-breakpoint";
import { useModal } from "hooks/use-modal";
// import { useReCaptcha } from "hooks/use-re-captcha";
import { FC, Fragment, useState } from "react";

import { ContactCopyButtons } from "./contact-buttons";

// import { getContactDetails } from "./get-contact-details";

// const INITIAL_RE_CAPTCHA_MESSAGE = "Verifying you are not a robot";
// const DEFAULT_RE_CAPTCHA_ERROR = "An error occurred while contacting the server";

const Contact: FC<ContactProps> = ({ sidebar }) => {
	const breakpoint = useBreakpoint();
	const [isModalOpen, openModal, closeModal] = useModal(false);

	// const [reCaptchaError, setReCaptchaError] = useState<string | null>(null);
	// const [reCaptchaMessage, setReCaptchaMessage] = useState<string>(
	// 	INITIAL_RE_CAPTCHA_MESSAGE,
	// );

	const [contactDetails] = useState<ContactDetails | null>({
		emailAddress: "oliver.plummer@outlook.com",
		mobileNumber: "+61435664195",
	});

	// const [reCaptchaToken, getReCaptchaToken] = useReCaptcha("getContactDetails");

	// const handleContactDetails = async () => {
	// 	if (reCaptchaToken) {
	// 		let shouldReset = false;

	// 		const initializingTimeout = setTimeout(() => {
	// 			setReCaptchaMessage("Contacting ReCaptcha");
	// 		}, 600);

	// 		const sendingReCaptchaTimeout = setTimeout(() => {
	// 			setReCaptchaMessage("Sending ReCaptcha Token");
	// 		}, 1500);

	// 		try {
	// 			const response = await getContactDetails(reCaptchaToken);

	// 			if (response.ok) {
	// 				const verifyResponse = (await response.json()) as GetContactDetailsResponse;

	// 				if (verifyResponse.error) {
	// 					shouldReset = true;

	// 					setReCaptchaError(verifyResponse.error);
	// 				} else if (verifyResponse.contactDetails) {
	// 					setContactDetails(verifyResponse.contactDetails);
	// 				} else {
	// 					shouldReset = true;

	// 					setReCaptchaError(DEFAULT_RE_CAPTCHA_ERROR);
	// 				}
	// 			} else {
	// 				shouldReset = true;

	// 				setReCaptchaError(DEFAULT_RE_CAPTCHA_ERROR);
	// 			}
	// 		} catch (error) {
	// 			shouldReset = true;

	// 			setReCaptchaError(
	// 				error instanceof Error ? error.message : DEFAULT_RE_CAPTCHA_ERROR,
	// 			);
	// 		} finally {
	// 			clearTimeout(initializingTimeout);
	// 			clearTimeout(sendingReCaptchaTimeout);

	// 			if (!shouldReset) {
	// 				setReCaptchaError(null);
	// 			}

	// 			setReCaptchaMessage(INITIAL_RE_CAPTCHA_MESSAGE);
	// 		}
	// 	}
	// };

	// const handleRetry = () => {
	// 	setReCaptchaError(null);
	// 	getReCaptchaToken();
	// };

	// useEffect(() => {
	// 	if (isModalOpen) {
	// 		getReCaptchaToken();
	// 	}
	// }, [isModalOpen]);

	// useEffect(() => {
	// 	if (reCaptchaToken) {
	// 		void handleContactDetails();
	// 	}
	// }, [reCaptchaToken]);

	const shouldCollapse =
		sidebar === null
			? breakpoint !== Breakpoint.EXTRA_LARGE
			: !(breakpoint === Breakpoint.EXTRA_LARGE || breakpoint === Breakpoint.MEDIUM);

	return (
		<Fragment>
			<Button
				isTransparent
				text={shouldCollapse ? undefined : "Contact"}
				ariaLabel="Contact"
				onClick={openModal}
				iconClassName="size-10"
				className={shouldCollapse ? "!size-12" : "!h-12"}
				textClassName="mt-[3px]"
				leftIcon={iconClassName => <EnvelopeIcon className={iconClassName} />}
			/>
			<Modal
				title="Contact"
				isOpen={isModalOpen}
				onClose={closeModal}
				contentClassName="relative flex flex-col gap-10 p-6"
				icon={className => <PaperAirplaneIcon className={className} />}
			>
				<div className="flex flex-col items-center justify-center gap-2">
					<p className="sm:text text-center text-sm">
						You can contact
						<br /> me via email at
					</p>
					<ContactCopyButtons
						text={contactDetails?.emailAddress ?? "**************************"}
						scheme="mailto"
					/>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<p className="sm:text text-center text-sm">
						If you prefer
						<br /> call or text me on
					</p>
					<ContactCopyButtons
						text={contactDetails?.mobileNumber ?? "************"}
						scheme="tel"
					/>
				</div>
			</Modal>
		</Fragment>
	);
};

interface ContactProps {
	sidebar: boolean | null;
}

interface ContactDetails {
	emailAddress: string;
	mobileNumber: string;
}

// interface GetContactDetailsResponse {
// 	error?: string;
// 	contactDetails?: ContactDetails;
// }

export default Contact;
