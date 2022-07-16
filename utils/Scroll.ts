export const ScrollTo = (ref: React.MutableRefObject<any>): void => {
	console.log(ref);
	ref?.current?.scrollIntoView();
};

export const ApplyViewportParallax = (
	scrolled: number,
	image: string,
	scrollFactor: number
): void => {
	const element: HTMLElement | null = document.querySelector(image);
	if (
		element &&
		scrolled + window.innerHeight > element.getBoundingClientRect().top &&
		element.getBoundingClientRect().bottom > 0
	) {
		const positionX: number = scrolled * scrollFactor;
		element.style.backgroundPositionY = `${positionX}px`;
	}
};
