//? Package
import type {} from "@testing-library/jest-dom";

//? Source
import { factorial, recursiveFactorial } from "@/src/practice/basic/factorial";

describe("Factorial", () => {
	it("should correctly calculate factorials of non-negative integers", () => {
		expect(factorial(3)).toBe(6);
		expect(factorial(4)).toBe(24);
		expect(factorial(12)).toBe(479001600);
	});

	it("should calculate factorials using recursion", () => {
		expect(recursiveFactorial(3)).toBe(6);
		expect(recursiveFactorial(4)).toBe(24);
		expect(recursiveFactorial(12)).toBe(479001600);
	});
});
