//? Package
import type {} from "@testing-library/jest-dom";

//? Source
import { alphaNumericCounter } from "@/src/practice/medium/alphaNumericCounter";

const string = "Hello skn437!";

const object = {
	h: 1,
	e: 1,
	l: 2,
	o: 1,
	s: 1,
	k: 1,
	n: 1,
	4: 1,
	3: 1,
	7: 1,
};

const object2 = {};

describe("Alpha Numeric Counter", () => {
	it("should return an object after counting alpha numeric characters", () => {
		expect(alphaNumericCounter(string)).toEqual(object);
	});
});
