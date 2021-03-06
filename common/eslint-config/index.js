module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:unicorn/recommended',
		'plugin:jsdoc/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:array-func/all',
		'plugin:promise/recommended',
		'prettier/unicorn',
		'plugin:@typescript-eslint/eslint-recommended',
		'prettier',
		'prettier/unicorn'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'sort-class-members',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'block-scoped-var': 'error',
		'class-methods-use-this': 'error',
		'consistent-return': 'error',
		'default-case': 'error',
		'default-param-last': 'error',
		'eqeqeq': 'error',
		'max-classes-per-file': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-else-return': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-magic-numbers': ['error', { ignoreArrayIndexes: true, enforceConst: true }],
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-param-reassign': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'yoda': 'error',
		'radix': 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'no-delete-var': 'error',
		'init-declarations': 'error',
		'no-shadow': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-use-before-define': 'error',
		'callback-return': 'error',
		'no-buffer-constructor': 'error',
		'no-mixed-requires': 'error',
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-env': 'error',
		'no-process-exit': 'error',
		'func-names': ['error', 'always'],
		'func-style': ['error', 'declaration'],
		'id-length': ['error', { exceptions: ['i', 'x', 'y', 'a', 'b'], max: 30 }],
		'id-blacklist': ['error', 'data', 'item', 'stuff', 'element', 'idx', 'items', 'elements', 'obj', 'map', 'set'],
		'max-params': 'error',
		'new-cap': ['error', { properties: true }],
		'new-parens': 'error',
		'newline-per-chained-call': 'error',
		'no-bitwise': 'error',
		'no-new-object': 'error',
		'no-inline-comments': 'error',
		'no-mixed-operators': 'error',
		'no-multiple-empty-lines': ['error', { max: 2 }],
		'no-nested-ternary': 'error',
		'no-plusplus': 'error',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'one-var': ['error', 'never'],
		'padding-line-between-statements': ['error',
		  { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
		  { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']}],
		'quotes': ['error', 'single', { allowTemplateLiterals: true }],
		'arrow-body-style': ['error', 'always'],
		'generator-star-spacing': ['error', {before: true, after: false}],
		'no-useless-constructor': 'error',
		'no-useless-computed-key': 'error',
		'no-var': 'error',
		'object-shorthand': ['error', 'properties', { avoidQuotes: true }],
		'prefer-const': ['error', { destructuring: 'all' }],
		'prefer-destructuring': ['error', { VariableDeclarator: { object: true, array: false } }, { enforceForRenamedProperties: true }],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-yield': 'error',
		'symbol-description': 'error',
		'yield-star-spacing': ['error', 'before'],
		'quote-props': ['error', 'consistent-as-needed', { keywords: true }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'sort-class-members/sort-class-members': ['error', {
		  order: [
			'[static-properties]',
			'[static-methods]',
			'[properties]',
			'[conventional-private-properties]',
			'constructor',
			'[methods]',
			'[conventional-private-methods]'
		  ],
		  accessorPairPositioning: 'getThenSet',
		}]
	}
};