import React from "react";
import { ReactElement } from "react";
import { References } from "../util/useReferences";
import Favicons from "./Favicons";

export const Footer = ({
	references,
}: {
	references: References;
}): ReactElement => (
	<>
		<img src="/assets/logo_w.png" alt="my logo" />
		<Favicons references={references} />
	</>
);
