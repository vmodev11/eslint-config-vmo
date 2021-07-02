const base = require('./lib/base.js');
const react = require('./lib/react.js');
const prettier = require('./lib/prettier.js');
const ts = require('./lib/ts-rule.js');

module.exports = {
  extends: ['airbnb-typescript', 'airbnb/hooks', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['simple-import-sort', 'import'],
  rules: {
    ...base,
    ...react,
    ...prettier,
    ...ts,
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
  },
};
