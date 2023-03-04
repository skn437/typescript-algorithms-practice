//? Package
import type {} from "@testing-library/jest-dom";

//? Source
import { spread } from "@/src/practice/basic/spread";

const array = [
	{
		anime1: "Death Note",
	},
	{
		anime2: "Samurai Champloo",
	},
	{
		anime3: "Samurai X",
	},
];

const object = {
	anime1: "Death Note",
	anime2: "Samurai Champloo",
	anime3: "Samurai X",
};

describe("Spread Operator", () => {
	it("should use spread operator properly", () => {
		expect(spread(array)).toEqual(object);
	});
});
