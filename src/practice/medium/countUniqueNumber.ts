let testArray = [1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 7, 7, 13, 12, 12, 7, 7];

export const countUniqueNumber = (arr: number[]) => {
	if (arr.length === 0) return 0;
	if (arr.length === 1) return 1;

	arr.sort((a, b) => a - b);
	console.log("array: ", arr);

	let i = 0;
	let j = 1;
	let count = 1;

	while (j < arr.length) {
		if (arr[i] === arr[j]) {
			j++;
		} else {
			j++;
			i = j - 1;
			count++;
		}
	}

	return count;
};
