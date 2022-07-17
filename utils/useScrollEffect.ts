import { useEffect } from "react";
import { ApplyViewportParallax } from "./Scroll";

const useScrollEffect = () =>
	useEffect(() => {
		const SCROLL_FACTOR: number = 0.3;
		const onScroll = (e: Event): void => {
			ApplyViewportParallax(window.scrollY, "header", SCROLL_FACTOR);
			// ImageHandleScroll(window.scrollY, "section#upcoming section");
		};
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

export default useScrollEffect;
