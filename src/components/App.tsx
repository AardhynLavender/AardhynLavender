import React, { ReactElement, useEffect, useRef } from "react";
import { ApplyViewportParallax, ScrollTo } from "../utils/Scroll";
import FaviconSet from "./Favicon";

// styling
import "../style/app.scss";

// assets
import linkedin from "../assets/linkedin_logo.png";
import github from "../assets/github_logo.png";
import mail from "../assets/mail.png";

// Page regions
import { Header } from "./Header";
import { ProjectGallery } from "./ProjectGallery";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Present } from "./Present";

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
					<Present />
				</section>
			</main>
			<footer>
				<Footer favicons={favicons} />
			</footer>
		</div>
	);
}

export default App;
