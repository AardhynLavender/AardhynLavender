import { ReactElement } from "react";
import { ScrollTo } from "../utils/Scroll";
import { Navigation } from "./Navigation";

interface IProps {
	references: Record<string, React.MutableRefObject<any>>;
}

export const Header = (props: IProps): ReactElement => {
	const { references } = props;
	return (
		<>
			<section className="projects">
				<Navigation references={references} />
			</section>
			<section className="heading">
				<h1>Aardhyn Lavender</h1>
				<nav>
					<button onClick={() => ScrollTo(references.projects)}>
						Projects
					</button>
					<button onClick={() => ScrollTo(references.about)}>
						About
					</button>
					<button onClick={() => ScrollTo(references.contact)}>
						Contact
					</button>
				</nav>
			</section>
			<section className="details">
				<ul>
					<li>
						<img src="/assets/reactLogo.png" alt="react.js logo" />
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
		</>
	);
};
