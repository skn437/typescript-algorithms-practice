module.exports = {
	plugins: {
		"postcss-import": {},
		"tailwindcss/nesting": {},
		tailwindcss: {},
		"postcss-flexbugs-fixes": {},
		"postcss-preset-env": {
			autoprefixer: {
				flexbox: "no-2009",
			},
			stage: 3,
			features: {
				"nesting-rules": false,
				"custom-selectors": true,
				"custom-properties": true,
			},
			minimumVendorImplementations: 2,
		},
	},
};
