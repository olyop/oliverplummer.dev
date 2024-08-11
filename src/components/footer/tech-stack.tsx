"use client";

import { Bars4Icon } from "@heroicons/react/24/outline";

import { Modal } from "@/components/modal";
import { useModal } from "@/hooks/use-modal";

import { FooterButton } from "./button";

export function FooterTechStackButton() {
	const [isModalOpen, openModal, closeModal] = useModal();
	return (
		<>
			<FooterButton
				text="Tech Stack"
				onClick={openModal}
				leftIcon={className => <Bars4Icon className={className} />}
			/>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				title="Tech Stack"
				icon={className => <Bars4Icon className={className} />}
				subTitle="The tech stack for oliverplummer.com.au"
				contentClassName="p-6"
			>
				<ol>
					<li>React</li>
					<li>React Router</li>
					<li>Heroicons React</li>
					<li>Tailwind CSS</li>
					<li>TypeScript</li>
				</ol>
				<ol>
					<li>Lambda</li>
					<li>S3 Bucket</li>
					<li>CloudFront</li>
					<li>Route53</li>
				</ol>
			</Modal>
		</>
	);
}
