import React, { ReactElement, useEffect, useRef } from "react";
import { ApplyViewportParallax, ScrollTo } from "../utils/Scroll";
import FaviconSet from "../components/Favicon";

// Page regions
import { Header } from "../components/Header";
import { ProjectGallery } from "../components/ProjectGallery";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Present } from "../components/Present";

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
					image: "/assets/github_logo.png",
				},
				{
					url: "https://www.linkedin.com/in/aardhyn-lavender-521007226/",
					image: "/assets/linkedin_logo.png",
				},
				{
					image: "/assets/mail.png",
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
