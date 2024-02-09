import clsx from "clsx";
import style from "./style.module.scss";

export default function Admonition({ children, type }: AdmonitionProps) {
	return (
		<div className={clsx(style.admonition, {
			[style.info]: type === "info",
			[style.warning]: type === "warning",
			[style.danger]: type === "danger",
			[style.success]: type === "success",
		})}>
			{children}
		</div>
	);
}

interface AdmonitionProps {
	type: "info" | "warning" | "danger" | "success";
	children: React.ReactNode;
}
