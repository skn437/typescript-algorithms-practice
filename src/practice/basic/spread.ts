export const spread = (arr: object[]) => {
	return arr.reduce((acc, curr) => ({ ...acc, ...curr }), {});
};
