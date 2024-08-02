import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import FooterButton, { FooterButtonProps } from "./button";

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
	<NavLink to={url}>
		<FooterButton text={text} leftIcon={leftIcon} tabIndex={-1} />
	</NavLink>
);

interface FooterExternalLinkProps extends FooterButtonProps {
	url: string;
}
