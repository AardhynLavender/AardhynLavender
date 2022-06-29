import React, { ReactElement, useEffect, useRef } from "react";
import react from "../assets/reactLogo.png";
import headerTwo from "../assets/header-backdrop-two.jpg";
import breakout from "../assets/breakout-project.png";
import restApi from "../assets/restapi-project.png";
import portrait from "../assets/portrait.png";
import whitelogo from "../assets/logo_w.png";
import reactcrud from "../assets/reactcrud.png";
import upcoming from "../assets/upcoming.png";
import linkedin from "../assets/linkedin_logo.png";
import github from "../assets/github_logo.png";
import mail from "../assets/mail.png";

import "../style/app.scss";
import Project from "./Project";

function App(): ReactElement {
	const references: Record<string, React.MutableRefObject<any>> = {
		present: useRef(null),
		projects: useRef(null),
		contact: useRef(null),
		upcoming: useRef(null),
	};

	const scrollFactor: number = 0.3;

	const ScrollTo = (ref: React.MutableRefObject<any>): void =>
		ref?.current?.scrollIntoView();

	const ImageHandleScroll = (scrolled: number, image: string): void => {
		const element: HTMLElement | null = document.querySelector(image);
		if (
			element &&
			scrolled + window.innerHeight > element.getBoundingClientRect().top //&&
			// scrolled <
			// 	element.getBoundingClientRect().height +
			// 		element.getBoundingClientRect().top
		) {
			const positionX: number = scrolled * scrollFactor;
			element.style.backgroundPositionY = `${positionX}px`;
			console.log(positionX);
		}
	};

	useEffect(() => {
		const onScroll = (e: Event): void => {
			ImageHandleScroll(window.scrollY, "header");
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
				<section className="projects">
					<ul>
						<li>
							<a
								href="https://github.com/AardhynLavender/WinFormsBreakout/releases/tag/v1.0.0"
								target="_blank"
								rel="noreferrer"
							>
								Breakout
							</a>
						</li>
						<li>
							<a
								href="https://github.com/AardhynLavender/REST-API"
								target="_blank"
								rel="noreferrer"
							>
								REST API
							</a>
						</li>
						<li>
							<a
								href="https://id1000096681-laveat1-react.herokuapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								React CRUD
							</a>
						</li>
						<li
							className="highlight"
							role="button"
							onClick={() => ScrollTo(references.upcoming)}
						>
							{/* Upcoming */}
						</li>
					</ul>
				</section>
				<section className="heading">
					<h1>Aardhyn Lavender</h1>
					<nav>
						<button onClick={() => ScrollTo(references.projects)}>
							Projects
						</button>
						<button onClick={() => ScrollTo(references.present)}>
							Present
						</button>
						<button onClick={() => ScrollTo(references.contact)}>
							Contact
						</button>
					</nav>
				</section>
				<section className="details">
					<ul>
						<li>
							<img src={react} alt="react.js logo" />
							<a
								href="https://github.com/AardhynLavender/AardhynLavender"
								target="_blank"
								rel="noreferrer"
							>
								Source
							</a>
						</li>
						{/* <li>
							<p>BIT</p>
							<span id="progression"></span>
						</li> */}
						<li>
							<a
								href="https://unsplash.com/@godfrey15?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
								target="_blank"
								rel="noreferrer"
							>
								Photo Credit
							</a>
						</li>
					</ul>
				</section>
			</header>
			<main>
				<section id="projects" ref={references.projects}>
					<h2>Projects</h2>
					<section className="gallery">
						<Project
							name="Breakout"
							image={breakout}
							url="https://github.com/AardhynLavender/WinFormsBreakout/"
							content={
								<p>
									First year programming assignment built with
									C# and WinForms, awarding a grade of 108
									<sup>%</sup>
									<br />
									<br />I went above and beyond the brief to
									build fun and engaging deviation of Breakout
									I'll be proud of for years to come!
								</p>
							}
						/>
						<Project
							name="REST API"
							image={restApi}
							url="https://github.com/AardhynLavender/REST-API/"
							content={
								<p>
									Node.js REST API built with TypeScript,
									Express, with data stored on MongoDB,
									achieving a grade of 99.25<sup>%</sup>
									<br />
									<br />
									Provides standard CRUD operations,
									filtering, sorting, pagination, as well as
									authentication and rate limiting.
								</p>
							}
						/>
						<Project
							name="React CRUD"
							image={reactcrud}
							url="https://github.com/AardhynLavender/React-CRUD"
							content={
								<p>
									Tidy front-end CRUD client for the
									aforementioned backend API, meeting
									requirements with a grade of 95.8
									<sup>%</sup>
									<br />
									<br />
									Built with React.js, Typescript, and
									Reactstrap, along with Cypress Tests for the
									authentication functionality.
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
				<section id="present" ref={references.present}>
					<h2>Present</h2>
					<article>
						<section
							className="banner"
							style={{ backgroundImage: `url(${headerTwo})` }}
						>
							<img src={portrait} alt="Its me!" />
						</section>
						<section className="content">
							<p>
								<strong>
									I'm a computer science and programming
									enthusiast with a passion for web and native
									software engineering and the fundamentals of
									game programming and design. At present
									studying my second year of the
									<i> Bachelor of Information Technology </i>
									at Otago Polytechnic in New Zealand.
								</strong>
							</p>
							<p>
								This past semester we've covered web-based
								software and API development, relational
								database design though to construction, and
								operating system concepts and scripting.
							</p>
							<p>
								I'm right at home in languages including C/C++,
								C#, and TypeScript. I Use Visual Studio for an
								IDE, and Visual Studio Code with Vim for text
								editing. I work on Windows 11 (primarily),
								MacOS, and Linux based systems.
							</p>
							<p>
								<i>
									Thanks for dropping by my cozy corner of the
									net!
								</i>
							</p>
							<section className="favicons">
								<a
									href="https://github.com/AardhynLavender"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={github}
										alt="icon link to github"
									/>
								</a>
								<a
									href="https://www.linkedin.com/in/aardhyn-lavender-521007226/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={linkedin}
										alt="icon link to linkedin"
									/>
								</a>
								<img
									role="button"
									src={mail}
									alt="icon link to contact form"
									onClick={() => ScrollTo(references.contact)}
								/>
							</section>
						</section>
					</article>
				</section>
				<section id="contact" ref={references.contact}>
					<h2>Contact</h2>
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
				{/* <section id="upcoming" ref={references.upcoming}>
					<h2>Upcoming</h2>
					<section style={{ backgroundImage: `url(${upcoming})` }}>
						<h2>Just a little something</h2>
						<p>Every developer needs a side-project</p>
					</section>
				</section> */}
			</main>
			<footer>
				<img src={whitelogo} />
				<section className="favicons">
					<a
						href="https://github.com/AardhynLavender"
						target="_blank"
						rel="noreferrer"
					>
						<img src={github} alt="icon link to github" />
					</a>
					<a
						href="https://www.linkedin.com/in/aardhyn-lavender-521007226/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={linkedin} alt="icon link to linkedin" />
					</a>
					<img
						role="button"
						src={mail}
						alt="icon link to contact form"
						onClick={() => ScrollTo(references.contact)}
					/>
				</section>
			</footer>
		</div>
	);
}

export default App;
