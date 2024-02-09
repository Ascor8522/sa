export default function ColorPreview({ color }: ColorPreviewProps) {
	const styles = {
		display: "inline-block",
		backgroundColor: color,
		width: "1rem",
		height: "1rem",
		border: "1px solid #000",
		verticalAlign: "middle",
		cursor: "pointer",
	};

	const copy = () => {
		window.navigator.clipboard.writeText(color);
		alert(`Color ${color} copied to clipboard`);
	};

	return (
		<>
			<span style={styles} onClick={copy} />
			&nbsp;
			<code>{color}</code>
		</>
	);
}

interface ColorPreviewProps {
	color: string;
}
