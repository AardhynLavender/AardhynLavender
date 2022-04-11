import React, { ReactElement, useRef } from "react";
import react from "../assets/reactLogo.png";
import headerTwo from "../assets/header-backdrop-two.jpg";
import breakout from "../assets/breakout-project.png";
import restApi from "../assets/restapi-project.png";
import portrait from "../assets/portrait.png";
import whitelogo from "../assets/logo_w.png";
import upcoming from "../assets/upcoming.png";
import linkedin from "../assets/linkedin_logo.png";
import github from "../assets/github_logo.png";
import mail from "../assets/mail.png";

import "../style/app.scss";

function App(): ReactElement {
	const references: Record<string, React.MutableRefObject<any>> = {
		present: useRef(null),
		projects: useRef(null),
		contact: useRef(null),
		upcoming: useRef(null),
	};

	const ScrollTo = (ref: React.MutableRefObject<any>): void =>
		ref?.current?.scrollIntoView();

	return (
		<div className="App">
			<header>
				<section className="projects">
					<ul>
						<li>
							<a
								href="https://github.com/AardhynLavender/WinFormsBreakout"
								target="_blank"
								rel="noreferrer"
							>
								Breakout
							</a>
						</li>
						<li>
							<a
								href="https://github.com/AardhynLavender/404"
								target="_blank"
								rel="noreferrer"
							>
								REST API
							</a>
						</li>
						<li>
							<a
								href="https://github.com/AardhynLavender/404"
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
							Upcoming
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
						<li>
							<p>BIT</p>
							<span id="progression"></span>
						</li>
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
						<article id="Breakout">
							<div
								className="banner"
								style={{
									backgroundImage: `url(${breakout})`,
								}}
							></div>
							<section className="content">
								<h3>Breakout</h3>
								<p>
									First year programming assignment built with
									C# and WinForms, awarding a grade of{" "}
									<b>
										{" "}
										108<sup>%</sup>
									</b>
									<br />
									<br />I went above and beyond the brief to
									build fun and engaging deviation of Breakout
									I'll be proud of for years to come!
								</p>
							</section>
							<section className="details"></section>
						</article>
						<article id="restApi">
							<div
								className="banner"
								style={{
									backgroundImage: `url(${restApi})`,
								}}
							></div>
							<section className="content">
								<h3>REST API</h3>
								<p>
									Node.js REST API built with TypeScript,
									Express, with data stored on MongoDB.
									<br />
									<br />
									Provides standard CRUD operations,
									filtering, sorting, pagination, as well as
									authentication and rate limiting.
								</p>
							</section>
							<section className="details"></section>
						</article>
						<article id="React CRUD">
							<div className="banner"></div>
							<section className="content">
								<h3>React CRUD</h3>
								<p>
									Tidy front-end client for the aforementioned
									backend API
									<br />
									<br />
									Built with React.js, Typescript, Reactstrap,
									plus a dash of Sass.
								</p>
							</section>
							<section className="details"></section>
						</article>
					</section>
					<a
						href="https://github.com/AardhynLavender?tab=repositories"
						target="_blank"
						rel="noreferrer"
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
							<h3>Hello, World!</h3>
							<p>
								<strong>
									I'm a computer science and programming
									enthusiast with a passion for Software
									Engineering and Game Development. At present
									studying my second year of the
									<i> Bachelor of Information Technology </i>
									at Otago Polytechnic in New Zealand.
								</strong>
							</p>
							<p>
								This semester we're covering web-based software
								and API development, relational database design
								though to construction, and operating system
								concepts and engineering.
							</p>
							<p>
								I'm right at home in C/C++, C#, and Typescript.
								I use Vim - and emulators for Vim in IDEs such
								as Visual Studio Code, and CLion. I work on
								Windows 11 (primarily), and MacOS/Linux based
								systems.
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
				<section id="upcoming" ref={references.upcoming}>
					<h2>Upcoming</h2>
					<section style={{ backgroundImage: `url(${upcoming})` }}>
						<h2>Something's on its way</h2>
						<p>And it's big. Real big.</p>
					</section>
				</section>
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
