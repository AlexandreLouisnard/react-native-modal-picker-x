module.exports = {
	env: {
		es6: true,
		node: true,
		'react-native/react-native': true,
	},
	parser: 'babel-eslint',
	extends: 'airbnb',
	plugins: ['react', 'react-native', 'jsx-a11y', 'import'],
	rules: {
		indent: ['error', 'tab', { ignoredNodes: ['JSXElement'] }],
		'no-tabs': 'off',
		'linebreak-style': ['warn', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-unused-vars': 'warn',
		'no-underscore-dangle': 'off',
		'max-len': 'off',
		'no-console': 'off',
		'no-restricted-syntax': 'warn',
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'class-methods-use-this': 'off',
		'no-trailing-spaces': 'off',
		'padded-blocks': 'warn',
		'no-else-return': 'warn',
		'prefer-const': 'warn',
		'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
		'no-bitwise': 'off',
		'no-param-reassign': 'off',
		'prefer-destructuring': 'warn',
		'no-nested-ternary': 'off',
		'no-await-in-loop': 'warn',
		'no-plusplus': 'off',
		'no-mixed-spaces-and-tabs': 'warn',
		'func-names': 'off',
		'object-curly-newline': ['warn', { ImportDeclaration: 'never', ExportDeclaration: 'never' }],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'import/prefer-default-export': 'off',
		'import/order': 'off',
		'react/prefer-stateless-function': 'off',
		'react/no-unused-prop-types': 'warn',
		'react/destructuring-assignment': 'off',
		'react/jsx-closing-bracket-location': ['warn', 'after-props'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-max-props-per-line': ['warn', { maximum: 1 }],
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
		'react/sort-comp': [
			'warn',
			{
				order: ['static-methods', 'instance-variables', 'lifecycle', 'everything-else', 'render'],
				groups: {
					lifecycle: [
						'displayName',
						'propTypes',
						'contextTypes',
						'childContextTypes',
						'mixins',
						'statics',
						'defaultProps',
						'constructor',
						'getDefaultProps',
						'state',
						'getInitialState',
						'getChildContext',
						'getDerivedStateFromProps',
						'componentWillMount',
						'UNSAFE_componentWillMount',
						'componentDidMount',
						'componentWillReceiveProps',
						'UNSAFE_componentWillReceiveProps',
						'shouldComponentUpdate',
						'componentWillUpdate',
						'UNSAFE_componentWillUpdate',
						'getSnapshotBeforeUpdate',
						'componentDidUpdate',
						'componentDidCatch',
						'componentWillUnmount',
					],
				},
			},
		],
	},
};
