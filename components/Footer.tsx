import React from "react";
import { ReactElement } from "react";

interface IProps {
	favicons: ReactElement;
}

export const Footer = (props: IProps): ReactElement => (
	<>
		<img src="/assets/logo_w.png" alt="my logo" />
		{props.favicons}
	</>
);
