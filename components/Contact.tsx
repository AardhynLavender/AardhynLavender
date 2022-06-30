import { ReactElement } from "react";
import SectionHeader from "./SectionHeader";

export const Contact = (): ReactElement => (
	<>
		<SectionHeader heading="Contact" subheading="Say Hello" />
		<section>
			<p>
				A <b>Contact Form</b> would look real nice here...
			</p>
			<br />
			<p>
				<i>( Psst! its on it's way... )</i>
			</p>
		</section>
	</>
);
