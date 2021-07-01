# ESLint + Prettier Config
> Airbnb's ESLint config with TypeScript support
## Overview

## Installation

To install the package, run:

```shell
$ npm install -D @vmo11/eslint-config-vmo
```
or
```shell
$ yarn add -D @vmo11/eslint-config-vmo
```

Included:
- eslint
- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jest
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-simple-import-sort
- eslint-plugin-testing-library
- prettier

## Usage

```tsx
// .eslintrc
{
  "extends": ["@vmo11/eslint-config-vmo"]
}
```
_Without React_
```tsx
// .eslintrc
{
  "extends": ["@vmo11/eslint-config-vmo/base"]
}
```
_With Jest_
```tsx
// .eslintrc
{
  "extends": ["@vmo11/eslint-config-vmo", "@vmo11/eslint-config-vmo/jest"]
}
```

## Prettier

This config supports Prettier integration out of the box. Rules that may conflict with ESLint are disabled via recommended configuration in [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).

If you wish to override any [Prettier options](https://prettier.io/docs/en/options.html), you can do so by specifying them under `prettier/prettier` rule in your ESLint config file. For example:

```jsx
// .eslintrc
{
  "extends": "@vmo11/eslint-config-vmo",
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 110
      }
    ]
  }
}
```

Make sure that these rules match the options specified in your `.prettierrc` file.

## Adding Scripts

Add the following to your `package.json` file to define a script that will lint all known files and output the results:

```jsx
"scripts": {
  // ..
  "lint": "eslint --ignore-path .gitignore ."
  // ..
}
```

To fix all automatically-fixable issues, you can add the following script to your `package.json` as well (in addition to above):

```jsx
"scripts": {
  // ..
  "lint:fix": "eslint --ignore-path .gitignore --fix ."
  // ..
}
```

Note that you can update the above scripts as you see fit, this is just an example. See ESLint [CLI reference](https://eslint.org/docs/user-guide/command-line-interface) for more details.
