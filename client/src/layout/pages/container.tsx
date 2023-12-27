import { FC, PropsWithChildren, ReactNode } from "react";

const Container: FC<PropsWithChildren<Props>> = ({ title, text, children, childrenClassName }) => (
	<div className="flex flex-col gap-12">
		<div className="flex flex-col gap-4">
			<h1 className="text-4xl">{title}</h1>
			<p>{text}</p>
		</div>
		<div className={childrenClassName}>{children}</div>
	</div>
);

interface Props {
	title: string;
	text?: ReactNode;
	childrenClassName?: string;
}

export default Container;
