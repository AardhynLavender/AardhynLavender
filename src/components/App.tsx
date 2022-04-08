import React, { ReactElement } from "react";
import breakout from "../assets/breakout-project.png";
import restApi from "../assets/restapi-project.png";
import upcoming from "../assets/upcoming.png";
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
						<button>About</button>
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
				<section id="about"></section>
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
				<section id="upcoming">
					<h2>Upcoming</h2>
					<section style={{ backgroundImage: `url(${upcoming})` }}>
						<h2>Something is on its way</h2>
						<p>And it's big. Real big.</p>
					</section>
				</section>
				<section id="contact"></section>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
