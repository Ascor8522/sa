export default function AddonCard({ alt, ...rest }: AddonCardProps) {
	return (
		<li className="splide__slide h-100">
			<div className="carousel-item-wrapper h-100 d-flex justify-content-center align-items-center p-3">
				{"imageLight" in rest && <img src={rest.imageLight} alt={alt} className="show-only-light" />}
				{"image" in rest && <img src={rest.image} alt={alt} className="show-only-light" />}
				{"imageDark" in rest && <img src={rest.imageDark} alt={alt} />}
			</div>
		</li>
	);
}

type AddonCardProps = LightDarkProps | SingleThemeProps;
type LightDarkProps = {
	imageLight: string;
	imageDark: string;
	alt: string;
};
type SingleThemeProps = {
	image: string;
	alt: string;
};
