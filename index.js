module.exports = {
  extends: [
    './lib',
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
