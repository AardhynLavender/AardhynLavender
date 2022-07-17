import { createStitches } from "@stitches/react";
import { StyledComponent } from "@stitches/react/types/styled-component";
import { Property } from "csstype";

/**
 * map color variables to properties
 */
const colorPalette: Record<string, string> = {
	accent: "var(--accent)",
	background: "var(--background)",
	backgroundDarker: "var(--background-darker)",
	backgroundLighter: "var(--background-lighter",
	foreground: "var(--foreground)",
	foregroundDarker: "var(--foreground-dark)",
	foregroundDarkest: "var(--foreground-darker",
	foregroundDarkester: "var(--foreground-darkester",
	white: "var(--white)",
	black: "var(--black)",
} as const;

/**
 * Attempt to extrapolate a color from a string
 * @returns a color string from the color palette or a fallback color string
 */
const CurryColorFunction =
	(property: "color" | "background-color") =>
	(color: keyof typeof colorPalette | Property.Color) => ({
		[property]: colorPalette[color] || color,
	});

/**
 * Configure stitches
 */
export const { styled, css, keyframes } = createStitches({
	utils: {
		fColor: CurryColorFunction("color"),
		bColor: CurryColorFunction("background-color"),
	},
});

/**
 * Stitches shorthand
 */
export const s = {
	a: styled("a"),
	button: styled("button"),
	code: styled("code"),
	div: styled("div"),
	form: styled("form"),
	h1: styled("h1"),
	h2: styled("h2"),
	h3: styled("h3"),
	h4: styled("h4"),
	h5: styled("h5"),
	h6: styled("h6"),
	img: styled("img"),
	input: styled("input"),
	p: styled("p"),
	pre: styled("pre"),
	span: styled("span"),
	table: styled("table"),
	td: styled("td"),
	th: styled("th"),
	thead: styled("thead"),
	tr: styled("tr"),
	ul: styled("ul"),
} as const;
