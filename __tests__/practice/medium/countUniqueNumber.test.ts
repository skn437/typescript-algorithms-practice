//? Package
import type {} from "@testing-library/jest-dom";

//? Source
import { countUniqueNumber } from "@/src/practice/medium/countUniqueNumber";

describe("Unique Number Counter", () => {
	it("should calculate the number of unique numbers in an array", () => {
		expect(
			countUniqueNumber([1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 7, 7, 13, 12, 12, 7, 7])
		).toBe(7);
		expect(countUniqueNumber([1])).toBe(1);
		expect(countUniqueNumber([])).toBe(0);
	});
});
