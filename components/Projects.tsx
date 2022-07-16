import React from "react";
import { ReactElement } from "react";
import { References } from "../util/useReferences";

import Project from "./Project";

import SectionHeader from "./SectionHeader";

export const Projects = ({
	references,
}: {
	references: References;
}): ReactElement => (
	<section id="projects">
		<SectionHeader
			heading="Projects"
			subheading="What have I done"
			references={references}
		/>
		<section className="gallery">
			<Project
				name="Breakout"
				image="/assets/breakout-project.png"
				url="https://github.com/AardhynLavender/WinFormsBreakout/"
				content={
					<p>
						First year programming assignment built with C# and
						WinForms, awarding a grade of 108
						<sup>%</sup>
						<br />
						<br />I went above and beyond the brief to build fun and
						engaging deviation of Breakout I'll be proud of for
						years to come!
					</p>
				}
			/>
			<Project
				name="REST API"
				image="/assets/restapi-project.png"
				url="https://github.com/AardhynLavender/REST-API/"
				content={
					<p>
						Node.js REST API built with TypeScript, Express, with
						data stored on MongoDB, achieving a grade of 99.25
						<sup>%</sup>
						<br />
						<br />
						Provides standard CRUD operations, filtering, sorting,
						pagination, as well as authentication and rate limiting.
					</p>
				}
			/>
			<Project
				name="React CRUD"
				image="/assets/reactcrud.png"
				url="https://github.com/AardhynLavender/React-CRUD"
				content={
					<p>
						Tidy front-end CRUD client for the aforementioned
						backend API, meeting requirements with a grade of 95.8
						<sup>%</sup>
						<br />
						<br />
						Built with React.js, Typescript, and Reactstrap, along
						with Cypress Tests for the authentication functionality.
					</p>
				}
			/>
		</section>
		<a
			href="https://github.com/AardhynLavender?tab=repositories"
			target="_blank"
			rel="noreferrer"
			id="more"
		>
			More
		</a>
	</section>
);
