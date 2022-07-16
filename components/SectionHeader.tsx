import React from "react";
import { ReactElement } from "react";

interface IProps {
	heading: string;
	subheading?: string;
}

const SectionHeader = (props: IProps) => (
	<div className="sectionHead">
		<h2>{props.heading}</h2>
		{props.subheading ? <h3>{props.subheading}</h3> : <></>}
	</div>
);

export default SectionHeader;
