import { ReactElement } from "react";

interface IProps {
	name: string;
	image: string;
	url?: string;
	content: ReactElement;
}

const Project = (props: IProps): ReactElement => {
	const article: ReactElement = (
		<article id={props.name}>
			<div
				className="banner"
				style={{
					backgroundImage: `url(${props.image})`,
				}}
			></div>
			<section className="content">
				<h4>{props.name}</h4>
				{props.content}
			</section>
		</article>
	);
	return props.url ? (
		<a href={props.url} target="_blank" rel="noreferrer">
			{article}
		</a>
	) : (
		article
	);
};

export default Project;
