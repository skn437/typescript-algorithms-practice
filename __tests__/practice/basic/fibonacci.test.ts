//? Package
import type {} from "@testing-library/jest-dom";

//? Source
import { fibonacci } from "@/src/practice/basic/fibonacci";

describe("Fibonacci", () => {
	it("should give fibonacci number of a given order", () => {
		expect(fibonacci(2)).toBe(1);
		expect(fibonacci(3)).toBe(2);
		expect(fibonacci(4)).toBe(3);
	});
});
