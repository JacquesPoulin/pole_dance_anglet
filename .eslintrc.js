module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'html'],
	rules: {
		'no-console': 'warn',
		'react/prop-types': 'off',
		'react/self-closing-comp': 'warn',
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
		],
		'import/order': [
			'warn',
			{
				pathGroups: [
					{
						pattern: '~/**',
						group: 'external',
						position: 'after',
					},
				],
				'newlines-between': 'always-and-inside-groups',
			},
		],
		'react/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				shorthandFirst: true,
				noSortAlphabetically: false,
				reservedFirst: true,
			},
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
