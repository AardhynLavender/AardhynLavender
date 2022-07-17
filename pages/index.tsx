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
import { s } from "../config/stitches.config";
import useScrollEffect from "../utils/useScrollEffect";

function App(): ReactElement {
	useScrollEffect();
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
				<s.div
					css={{
						fColor: "accent",
					}}
				>
					some text
				</s.div>
				<Footer references={references} />
			</footer>
		</div>
	);
}

export default App;
