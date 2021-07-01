module.exports = {
  '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off',

  'import/newline-after-import': 'error',
  'newline-before-return': 'error',
  curly: 'error',
  'object-shorthand': 'error',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // Node.js builtin packages
        [
          '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
        ],
        // Packages. `react` related packages come first
        ['^react', '^@?\\w'],
        // Side effect imports
        ['^\\u0000'],
        // Internal packages
        ['^(src|internals)(/.*|$)'],
        // Parent imports. Put `..` last
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports. Put same-folder imports and `.` last
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Style imports
        ['^.+\\.(s?css|less)$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};
