module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    './base',
  ].map(require.resolve),
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['redux-saga', 'react', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-for': [2, {
      allowChildren: true,
    }],
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['preferButton'],
      },
    ],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/no-typos': 0, // https://github.com/yannickcr/eslint-plugin-react/issues/1607
    'redux-saga/no-yield-in-race': 2,
    'redux-saga/yield-effects': 2,
  },
  overrides: [
    {
      files: ['**/Containers/**/*.js', 'Containers/**/*.js'],

      // Containers can always be Class Components
      rules: {
        'react/prefer-stateless-function': 0,
      },
    },
  ],
};
