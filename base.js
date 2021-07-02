const base = require('./lib/base.js');
const prettier = require('./lib/prettier.js');

module.exports = {
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
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
  },
  plugins: ['simple-import-sort', 'import'],
  rules: {
    ...base,
    ...prettier,
  },
};
