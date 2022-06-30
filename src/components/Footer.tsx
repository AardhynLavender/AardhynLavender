import { ReactElement } from "react";

import whitelogo from "../assets/logo_w.png";

interface IProps {
	favicons: ReactElement;
}

export const Footer = (props: IProps): ReactElement => (
	<>
		<img src={whitelogo} />
		{props.favicons}
	</>
);
