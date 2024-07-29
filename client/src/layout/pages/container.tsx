import { FC, PropsWithChildren, ReactNode } from "react";

const Container: FC<PropsWithChildren<Props>> = ({
	title,
	text,
	icon,
	children,
	childrenClassName,
}) => (
	<div className="space-y-8">
		<div className="flex items-start gap-4 py-4">
			{icon("size-8 mt-1")}
			<div className="space-y-2">
				<h1 className="text-[2.5rem] font-semibold leading-[2.5rem]">{title}</h1>
				{text && <p>{text}</p>}
			</div>
		</div>
		<div className={childrenClassName}>{children}</div>
	</div>
);

interface Props {
	title: string;
	icon: (iconClassName: string) => ReactNode;
	text?: ReactNode;
	childrenClassName?: string;
}

export default Container;
