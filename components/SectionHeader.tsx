import React from "react";
import { References } from "../util/useReferences";
import { s } from "../config/stitches.config";

const SectionHeader = ({
	heading,
	subheading,
	references,
}: {
	heading: string;
	subheading?: string;
	references: References;
}): JSX.Element => (
	<div className="sectionHead" ref={references[heading.toLowerCase()]}>
		<h2>{heading}</h2>
		{subheading ? (
			<s.h3 css={{ marginBlock: "1em" }}>{subheading}</s.h3>
		) : (
			<></>
		)}
	</div>
);

export default SectionHeader;
