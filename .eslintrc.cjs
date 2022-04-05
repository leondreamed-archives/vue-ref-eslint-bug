module.exports = {
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2018,
		sourceType: 'module',
		extraFileExtensions: ['.vue'],
		project: './tsconfig.json'
	},
	rules: {
		'@typescript-eslint/restrict-plus-operands': 'error'
	}
}
