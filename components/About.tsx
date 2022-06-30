import { ReactElement } from "react";

import SectionHeader from "./SectionHeader";

export const About = (): ReactElement => (
	<>
		<SectionHeader
			heading="About"
			subheading="Just a little about myself"
		/>
		<article>
			<aside>
				<img src="assets/portrait.png" alt="Its me!" />
				<div>
					<h4>Howdy!</h4>
					<p>
						I'm a computer science and programming enthusiast with a
						passion for web and native software engineering and the
						fundamentals of game programming and design.
						<br />
						<br />
						At present studying my second year of the
						<i> Bachelor of Information Technology </i>
						at Otago Polytechnic in New Zealand.
					</p>
				</div>
			</aside>
			<section className="content">
				<div>
					<h3>This Past Semester</h3>
					<p>
						We've covered web-based software and API development,
						relational database design though to construction, and
						operating system concepts and scripting.
					</p>
					<br />
					<p>
						Looking forward to extending my MERN stack application
						development skills with GraphQL, advanced
						Authentication, and possibly production grade deployment
						with Azure/Vercel.
					</p>
				</div>
				<br />
				<div>
					<h3>Tech Stack</h3>
					<ul>
						<li>Langauges including C/C++, C#, and TypeScript</li>
						<li>MERN stack for web-based software</li>
						<li>
							WinForms Framework for Windows native development
						</li>
						<li>
							SDL2 C API for multiplatform software and game
							programming
						</li>
						<li>
							Fundamentals of HTML5, CSS3, and modern Javascript (
							ES6+)
						</li>
					</ul>
				</div>
				<div>
					<h3>Tooling</h3>
					<ul>
						<li>
							Visual Studio for an IDE, and Visual Studio Code
							with Vim for text editing
						</li>
						<li>Windows 11/10, MacOS, and Linux distributions</li>
						<li>
							Git CLI for version control with GitHub for project
							collaboration
						</li>
						<li>Shell scripting with Bash and PowerShell/Batch</li>
					</ul>
				</div>
			</section>
		</article>
	</>
);
