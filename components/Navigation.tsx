import React, { ReactElement } from "react";
import useReferences, { References } from "../util/useReferences";

import { ILink } from "../utils/Hyperlink";
import { ScrollTo } from "../utils/Scroll";
import { ToSentenceCase } from "../utils/String";

export const Navigation = ({
	references,
}: {
	references: References;
}): ReactElement => {
	const links: Array<ILink> = [
		{
			name: "breakout",
			url: "https://github.com/AardhynLavender/WinFormsBreakout/releases/tag/v1.0.0",
		},
		{
			name: "REST API",
			url: "https://github.com/AardhynLavender/REST-API",
		},
		{
			name: "React CRUD",
			url: "https://id1000096681-laveat1-react.herokuapp.com/",
		},
	];
	return (
		<ul>
			{links.map((link: ILink, key: number) => (
				<li key={key}>
					<a href={link.url} target="_blank" rel="noreferrer">
						{ToSentenceCase(link.name)}
					</a>
				</li>
			))}
			<li
				className="highlight"
				role="button"
				onClick={() => ScrollTo(references.present)}
			>
				Present
			</li>
		</ul>
	);
};
