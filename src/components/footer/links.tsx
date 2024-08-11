import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC } from "react";

import { FooterButton, FooterButtonProps } from "./button";

export const FooterExternalLink: FC<FooterExternalLinkProps> = ({
	url,
	text,
	leftIcon,
	className,
}) => (
	<a href={url} target="_blank" rel="noreferrer" className={className}>
		<FooterButton
			text={text}
			tabIndex={-1}
			leftIcon={leftIcon}
			rightIcon={iconClassName => <ArrowTopRightOnSquareIcon className={iconClassName} />}
		/>
	</a>
);

export const FooterNavLink: FC<FooterExternalLinkProps> = ({ url, text, leftIcon }) => (
	<Link href={url}>
		<FooterButton text={text} leftIcon={leftIcon} tabIndex={-1} />
	</Link>
);

interface FooterExternalLinkProps extends FooterButtonProps {
	url: string;
}
