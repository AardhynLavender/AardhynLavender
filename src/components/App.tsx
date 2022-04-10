import React, { ReactElement } from "react";
import header from "../assets/header-backdrop.jpg";
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
	return (
		<div className="App">
			<header>
				<section className="projects">
					<ul>
						<li>Breakout</li>
						<li>REST API</li>
						<li>React CRUD</li>
						<li id="highlight">Upcoming</li>
					</ul>
				</section>
				<section className="heading">
					<h1>Aardhyn Lavender</h1>
					<nav>
						<button>Projects</button>
						<button>Present</button>
						<button>Contact</button>
					</nav>
				</section>
				<section className="details">
					<ul>
						<li>
							<a
								href="https://github.com/AardhynLavender/AardhynLavender"
								target="_blank"
							>
								View Source
							</a>
						</li>
						<li>
							<p>BIT</p>
							<span id="progression"></span>
						</li>
						<li>
							<a href="https://unsplash.com/@godfrey15?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Photo Credit
							</a>
						</li>
					</ul>
				</section>
			</header>
			<main>
				<section id="projects">
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
									{/* prettier-ignore */}
									<b> 108<sup>%</sup></b>
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
					<button>More</button>
				</section>
				<section id="present">
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
								>
									<img
										src={github}
										alt="icon link to github"
									/>
								</a>
								<a
									href="https://www.linkedin.com/in/aardhyn-lavender-521007226/"
									target="_blank"
								>
									<img
										src={linkedin}
										alt="icon link to linkedin"
									/>
								</a>
								<a href="#contact">
									<img
										src={mail}
										alt="icon link to contact form"
									/>
								</a>
							</section>
						</section>
					</article>
				</section>
				<section id="upcoming">
					<h2>Upcoming</h2>
					<section style={{ backgroundImage: `url(${upcoming})` }}>
						<h2>Something's on its way</h2>
						<p>And it's big. Real big.</p>
					</section>
				</section>
				<section id="contact"></section>
			</main>
			<footer>
				<img src={whitelogo} />
				<section className="favicons">
					<a
						href="https://github.com/AardhynLavender"
						target="_blank"
					>
						<img src={github} alt="icon link to github" />
					</a>
					<a
						href="https://www.linkedin.com/in/aardhyn-lavender-521007226/"
						target="_blank"
					>
						<img src={linkedin} alt="icon link to linkedin" />
					</a>
					<a href="#contact">
						<img src={mail} alt="icon link to contact form" />
					</a>
				</section>
			</footer>
		</div>
	);
}

export default App;
