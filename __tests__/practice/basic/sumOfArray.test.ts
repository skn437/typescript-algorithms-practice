//? Package
import type {} from "@testing-library/jest-dom";

//? Source
import { sumOfArray } from "@/src/practice/basic/sumOfArray";

describe("Array Sum", () => {
	it("should calculate the sum of all the elements of an array", () => {
		expect(sumOfArray([1, 2, 3, 4, 5])).toBe(15);
		expect(sumOfArray([1, 2, 3, 4, 5, 10])).toBe(25);
	});
});
