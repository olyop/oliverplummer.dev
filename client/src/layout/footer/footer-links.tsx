import ArrowTopRightOnSquareIcon from "@heroicons/react/20/solid/ArrowTopRightOnSquareIcon";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import FooterButton, { FooterButtonProps } from "./footer-button";

export const FooterExternalLink: FC<Props> = ({ url, text, leftIcon }) => (
	<a href={url} target="_blank" rel="noreferrer">
		<FooterButton
			text={text}
			tabIndex={-1}
			leftIcon={leftIcon}
			rightIcon={className => <ArrowTopRightOnSquareIcon className={className} />}
		/>
	</a>
);

export const FooterNavLink: FC<Props> = ({ url, text, leftIcon }) => (
	<NavLink to={url}>
		<FooterButton text={text} leftIcon={leftIcon} tabIndex={-1} />
	</NavLink>
);

interface Props extends FooterButtonProps {
	url: string;
}
