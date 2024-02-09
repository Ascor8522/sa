export default function AddonCard({ id, name, description }: AddonCardProps) {
	return (
		<li className="splide__slide">
			<div className="splide__slide card" id={`addon-${id}`}>
				<div className="card-img-wrapper">
					<img src={`/assets/img/addons/${id}.png`} className="card-img-top" alt={name} loading="lazy" />
				</div>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{description}</p>
				</div>
			</div>
		</li>
	);
}

interface AddonCardProps {
	id: string;
	name: string;
	description: string;
}
