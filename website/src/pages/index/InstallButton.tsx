export default function InstallButton({ icon, link, title }: InstallButtonProps) {
	return (
		<a
			className="btn btn-success dark-btn-white btn-lg mb-1"
			href={link}
			target="_blank"
			rel="noopener">
			<span
				className="iconify-inline"
				data-icon={icon} />
			{title}
		</a>
	);
}

interface InstallButtonProps {
	link: string;
	icon: string;
	title: string;
}
