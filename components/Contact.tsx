import React, { ReactElement } from "react";
import { References } from "../util/useReferences";
import SectionHeader from "./SectionHeader";

export const Contact = ({
	references,
}: {
	references: References;
}): ReactElement => (
	<section id="contact">
		<SectionHeader
			heading="Contact"
			subheading="Say Hello"
			references={references}
		/>
		<section>
			<p>
				A <b>Contact Form</b> would look real nice here...
			</p>
			<br />
			<p>
				<i>( Psst! its on it's way... )</i>
			</p>
		</section>
	</section>
);
