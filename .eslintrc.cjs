module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:svelte/prettier',
		'plugin:tailwindcss/recommended',
	],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	// rules: {
	// 	'import/extensions': [
	// 		'error',
	// 		'ignorePackages',
	// 		{
	// 			js: 'never',
	// 			ts: 'never',
	// 			svelte: 'never',
	// 		},
	// 	],
	// },
};
