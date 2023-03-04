const alphaNumericChecker = (char: string) => {
	const code = char.charCodeAt(0);

	if (
		(code >= 48 && code <= 57) ||
		(code >= 65 && code <= 90) ||
		(code >= 97 && code <= 122)
	)
		return true;

	return false;
};

export const alphaNumericCounter = (str: string) => {
	let obj: any = {};

	for (let char of str) {
		if (alphaNumericChecker(char)) {
			char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
		}
	}

	return obj;
};
