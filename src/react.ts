import {Linter} from 'eslint';

const config: Linter.Config = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', './index.js'],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

export = config;
