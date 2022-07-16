import React, { ReactElement, useEffect, useRef } from "react";
import { ApplyViewportParallax, ScrollTo } from "../utils/Scroll";

// Page regions
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Present } from "../components/Present";
import useReferences from "../utils/useReferences";

function App(): ReactElement {
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

	const references = useReferences();

	return (
		<div className="App">
			<header>
				<Header references={references} />
			</header>
			<main>
				<Projects references={references} />
				<About references={references} />
				<Contact references={references} />
				<Present references={references} />
			</main>
			<footer>
				<Footer references={references} />
			</footer>
		</div>
	);
}

export default App;
