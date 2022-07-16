import React, { ReactElement } from "react";
import { References } from "../util/useReferences";
import { ScrollTo } from "../utils/Scroll";
import FaviconSet from "./FaviconSet";

const Favicons = ({ references }: { references: References }): ReactElement => {
	return (
		<FaviconSet
			favicons={[
				{
					url: "https://github.com/AardhynLavender",
					image: "/assets/github_logo.png",
				},
				{
					url: "https://www.linkedin.com/in/aardhyn-lavender-521007226/",
					image: "/assets/linkedin_logo.png",
				},
				{
					image: "/assets/mail.png",
					onClick: () => ScrollTo(references.contact),
				},
			]}
		></FaviconSet>
	);
};

export default Favicons;
