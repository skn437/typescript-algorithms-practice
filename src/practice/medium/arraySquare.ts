export const arraySquare = (arr1: number[], arr2: number[]) => {
	if (arr1.length !== arr2.length) return false;

	let frequencyCounter1: any = {};
	let frequencyCounter2: any = {};

	for (let val of arr1) {
		frequencyCounter1[val]
			? ++frequencyCounter1[val]
			: (frequencyCounter1[val] = 1);
	}

	for (let val of arr2) {
		frequencyCounter2[val]
			? ++frequencyCounter2[val]
			: (frequencyCounter2[val] = 1);
	}

	for (let key in frequencyCounter1) {
		if (!(parseInt(key) ** 2 in frequencyCounter2)) return false;

		if (
			frequencyCounter1[parseInt(key)] !== frequencyCounter2[parseInt(key) ** 2]
		)
			return false;
	}

	return true;
};
