import {Linter} from 'eslint';

const config: Linter.Config = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsdoc'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {selector: 'typeLike', format: ['PascalCase']},
      {selector: 'enum', format: ['PascalCase', 'UPPER_CASE']},
    ],
    // note you must disable the base rule as it can report incorrect errors
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['warn'],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // note you must disable the base rule as it can report incorrect errors
    indent: 'off',
    // Problems with the indent rule, disable it and let prettier handle the formatting
    // https://github.com/typescript-eslint/typescript-eslint/issues/1824
    '@typescript-eslint/indent': 'off',
    // note you must disable the base rule as it can report incorrect errors
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // better to enable  this
    '@typescript-eslint/no-explicit-any': 'off',
    // better to enable  this
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    // note you must disable the base rule as it can report incorrect errors
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'all'],
    'default-case': 'error',
    eqeqeq: ['error', 'smart'],
    'id-blacklist': [
      'off',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/newline-after-description': 'error',
    'max-len': [
      'error',
      {
        code: 200,
      },
    ],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-eval': 'error',
    'no-new-wrappers': 'error',
    'no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    radix: 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
  },
};

export = config;
