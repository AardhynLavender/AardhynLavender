import { ReactElement } from "react";

import headerTwo from "../assets/header-backdrop-two.jpg";
import portrait from "../assets/portrait.png";

export const About = (): ReactElement => (
	<>
		<h2>About</h2>
		<h3>Just a little about myself</h3>
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
						I'm a computer science and programming enthusiast with a
						passion for web and native software engineering and the
						fundamentals of game programming and design. At present
						studying my second year of the
						<i> Bachelor of Information Technology </i>
						at Otago Polytechnic in New Zealand.
					</strong>
				</p>
				<p>
					This past semester we've covered web-based software and API
					development, relational database design though to
					construction, and operating system concepts and scripting.
				</p>
				<p>
					I'm right at home in languages including C/C++, C#, and
					TypeScript. I Use Visual Studio for an IDE, and Visual
					Studio Code with Vim for text editing. I work on Windows 11
					(primarily), MacOS, and Linux based systems.
				</p>
				<p>
					<i>Thanks for dropping by my cozy corner of the net!</i>
				</p>
			</section>
		</article>
	</>
);
