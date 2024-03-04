import Button, { ButtonProps } from "components/button";
import { FC } from "react";

const FooterButton: FC<FooterButtonProps> = ({ text, leftIcon, rightIcon, onClick, tabIndex }) => (
	<Button
		text={text}
		ariaLabel={text}
		onClick={onClick}
		leftIcon={leftIcon}
		rightIcon={rightIcon}
		tabIndex={tabIndex}
		iconClassName="!w-4 !h-4"
		leftIconClassName="mb-[0.1rem] mr-[0.1rem]"
		textClassName="font-normal group-hover:underline"
		className="group h-auto !p-0 normal-case shadow-none hover:bg-transparent hover:shadow-none"
	/>
);

export interface FooterButtonProps extends Pick<ButtonProps, "leftIcon" | "rightIcon"> {
	text: string;
	tabIndex?: number;
	onClick?: () => void;
}

export default FooterButton;
