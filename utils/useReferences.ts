import { MutableRefObject, useRef } from "react";

const useReferences = (): Record<string, MutableRefObject<any>> => {
	return {
		projects: useRef(null),
		about: useRef(null),
		contact: useRef(null),
		present: useRef(null),
	};
};

export type References = ReturnType<typeof useReferences>;

export default useReferences;
