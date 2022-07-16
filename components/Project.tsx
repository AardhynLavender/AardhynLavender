import React from "react";
import { ReactElement } from "react";
import { s } from "../config/stitches.config";

const Project = ({
	name,
	image,
	url,
	content,
}: {
	name: string;
	image: string;
	url?: string;
	content: ReactElement;
}): ReactElement => {
	const article: ReactElement = (
		<article id={name}>
			<s.div
				className="banner"
				style={{
					backgroundImage: `url(${image})`,
				}}
			></s.div>
			<section className="content">
				<h4>{name}</h4>
				{content}
			</section>
		</article>
	);
	return url ? (
		<a href={url} target="_blank" rel="noreferrer">
			{article}
		</a>
	) : (
		article
	);
};

export default Project;
