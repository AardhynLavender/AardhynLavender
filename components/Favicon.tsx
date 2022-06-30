import { ReactElement } from "react";

interface IFavicon {
	image: string;
	url?: string;
	onClick?: () => void;
}

interface IProps {
	favicons: Array<IFavicon>;
}

const FaviconSet = (props: IProps): ReactElement => {
	return (
		<section className="favicons">
			{props.favicons.map((favicon: IFavicon, key: number) => {
				const { image, onClick, url } = favicon;
				const img: ReactElement = <img src={image} alt="icon link" />;
				return !onClick && url ? (
					<a key={key} href={url} target="_blank" rel="noreferrer">
						{img}
					</a>
				) : (
					<a
						key={key}
						onClick={onClick}
						target="_blank"
						rel="noreferrer"
					>
						{img}
					</a>
				);
			})}
		</section>
	);
};

export default FaviconSet;
