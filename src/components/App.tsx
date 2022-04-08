import React, { ReactElement } from "react";
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
			<main></main>
			<footer></footer>
		</div>
	);
}

export default App;
