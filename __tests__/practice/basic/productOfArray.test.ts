//? Package
import type {} from "@testing-library/jest-dom";

//? Source
import { productOfArray } from "@/src/practice/basic/productOfArray";

describe("Array Product", () => {
	it("should calculate the product of all the elements of an array", () => {
		expect(productOfArray([1, 1, 2, 3, 5])).toBe(30);
		expect(productOfArray([2, 15, 60])).toBe(1800);
	});
});
