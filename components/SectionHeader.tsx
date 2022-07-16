import React from "react";
import { References } from "../util/useReferences";
import useReferences from "../util/useReferences";

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
		{subheading ? <h3>{subheading}</h3> : <></>}
	</div>
);

export default SectionHeader;
