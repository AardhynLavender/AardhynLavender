import React, { ReactElement, useEffect, useRef } from "react";
import { ApplyViewportParallax, ScrollTo } from "../utils/Scroll";
import FaviconSet from "./Favicon";

// styling
import "../style/app.scss";

// assets
import upcoming from "../assets/upcoming.png";
import linkedin from "../assets/linkedin_logo.png";
import github from "../assets/github_logo.png";
import mail from "../assets/mail.png";

// Page regions
import { Header } from "./Header";
import { ProjectGallery } from "./ProjectGallery";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Project from "./Project";

function App(): ReactElement {
	const references: Record<string, React.MutableRefObject<any>> = {
		projects: useRef(null),
		about: useRef(null),
		contact: useRef(null),
		present: useRef(null),
	};

	const favicons: ReactElement = (
		<FaviconSet
			favicons={[
				{
					url: "https://github.com/AardhynLavender",
					image: github,
				},
				{
					url: "https://www.linkedin.com/in/aardhyn-lavender-521007226/",
					image: linkedin,
				},
				{
					image: mail,
					onClick: () => ScrollTo(references.contact),
				},
			]}
		></FaviconSet>
	);

	useEffect(() => {
		const SCROLL_FACTOR: number = 0.3;
		const onScroll = (e: Event): void => {
			ApplyViewportParallax(window.scrollY, "header", SCROLL_FACTOR);
			// ImageHandleScroll(window.scrollY, "section#upcoming section");
		};
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div className="App">
			<header>
				<Header references={references} />
			</header>
			<main>
				<section id="projects" ref={references.projects}>
					<ProjectGallery />
				</section>
				<section id="about" ref={references.about}>
					<About />
				</section>
				<section id="contact" ref={references.contact}>
					<Contact />
				</section>
				<section id="present" ref={references.present}>
					<h2>Present</h2>
					<h3>What am I working on?</h3>
					<section className="gallery">
						<Project
							name="SDL2 Pixel Game Engine"
							image={upcoming}
							content={
								<p>
									<i>My good ol' hobby side-project</i>
									<br />
									<br />
									A homemade multiplatform 2D Pixel game
									engine written in C++20 with SDL2.
									<br />
									<br />
									You won't see a line of code for this one...
									but stay tuned for a demo game should I find
									enough time to finish it.
								</p>
							}
						/>
					</section>
				</section>
			</main>
			<footer>
				<Footer favicons={favicons} />
			</footer>
		</div>
	);
}

export default App;
