// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {},
	plugins: ['svelte3'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
};
