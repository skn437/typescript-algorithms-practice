//? Package
import type {} from "@testing-library/jest-dom";

//? Source
import { arraySquare } from "@/src/practice/medium/arraySquare";

describe("Square Element Checker", () => {
	it("should check if an array has squared elements respective to another one", () => {
		expect(arraySquare([1, 2, 3, 4], [1, 4, 16, 9])).toBeTruthy();
		expect(arraySquare([1, 2, 3, 4], [1, 4, 16, 25])).toBeFalsy();
		expect(arraySquare([1, 2, 3, 1], [1, 4, 9, 1])).toBeTruthy();
	});
});
