export const factorial = (num: number) => {
	let initialFactorial = 1;

	for (let i = num; i > 0; i--) {
		initialFactorial *= i;
	}

	return initialFactorial;
};

export const recursiveFactorial = (num: number): number => {
	if (num === 0 || num === 1) return 1;

	return num * recursiveFactorial(--num);
};
