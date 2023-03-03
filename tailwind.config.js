/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/material-ui/**/*.{js,ts,jsx,tsx}",
		"./src/icons/**/*.{js,ts,jsx,tsx}",
		"./src/layout/**/*.{js,ts,jsx,tsx}",
		"./src/special/components/*.{js,ts,jsx,tsx}",
		"./src/special/material-ui/*.{js,ts,jsx,tsx}",
		"./src/html-parser/**/*.html",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
