import React from "react";
import { ReactElement } from "react";

interface IFavicon {
	image: string;
	url?: string;
	onClick?: () => void;
}

const FaviconSet = ({
	favicons,
}: {
	favicons: Array<IFavicon>;
}): ReactElement => (
	<section className="favicons">
		{favicons.map(({ image, onClick, url }: IFavicon, key: number) => {
			const img: ReactElement = <img src={image} alt="icon link" />;
			return !onClick && url ? (
				<a key={key} href={url} target="_blank" rel="noreferrer">
					{img}
				</a>
			) : (
				<a key={key} onClick={onClick} target="_blank" rel="noreferrer">
					{img}
				</a>
			);
		})}
	</section>
);

export default FaviconSet;
