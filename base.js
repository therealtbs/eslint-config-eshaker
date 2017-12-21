module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'eslint-config-airbnb-base/rules/strict',
  ].map(require.resolve),
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_context_', '_model_'],
        allowAfterThis: true,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': 'off',
    'newline-per-chained-call': 'off',
    'no-console': 'warn',
    'no-use-before-define': 'off',
    'prefer-template': 'error',
    'class-methods-use-this': 'off',
    'require-yield': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
      },
    ],
  },
};
