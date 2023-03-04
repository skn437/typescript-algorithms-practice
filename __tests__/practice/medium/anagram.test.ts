//? Package
import type {} from "@testing-library/jest-dom";

//? Source
import { anagram } from "@/src/practice/medium/anagram";

describe("Anagram", () => {
	it("should determine if two strings are anagram to each other", () => {
		expect(anagram("cinema", "iceman")).toBeTruthy();
		expect(anagram("cinema", "icemaa")).toBeFalsy();
	});
});
