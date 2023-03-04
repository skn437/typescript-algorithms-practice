export const anagram = (str1: string, str2: string) => {
	if (str1.length !== str2.length) return false;

	let frequencyCounter1: any = {};
	let frequencyCounter2: any = {};

	for (let char of str1.toLowerCase()) {
		frequencyCounter1[char]
			? ++frequencyCounter1[char]
			: (frequencyCounter1[char] = 1);
	}

	for (let char of str2.toLowerCase()) {
		frequencyCounter2[char]
			? ++frequencyCounter2[char]
			: (frequencyCounter2[char] = 1);
	}

	for (let key in frequencyCounter1) {
		if (!(key in frequencyCounter2)) return false;

		if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
	}

	return true;
};
