import { ReactElement } from "react";

import SectionHeader from "./SectionHeader";
import Project from "./Project";
import React from "react";

export const Present = (): ReactElement => (
	<>
		<SectionHeader heading="Present" subheading="What I'm working on" />
		<section className="gallery">
			<Project
				name="SDL2 Pixel Game Engine"
				image="/assets/upcoming.png"
				content={
					<p>
						My side-project between assignments and semesters. A
						homemade multiplatform 2D Pixel game engine written in
						C++20 with SDL2.
						<br />
						<br />
						You won't see a line of code for this one... but stay
						tuned for a demo game should I find enough time to
						finish it.
					</p>
				}
			/>
		</section>
	</>
);
