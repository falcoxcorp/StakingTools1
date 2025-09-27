module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module'
  },
  plugins: [
    'react-refresh',
    "react",
    "@typescript-eslint"
  ],   
  rules: {
    "semi": "off",
    "@typescript-eslint/semi": "off",
    "react/react-in-jsx-scope": "off",
    "camelcase": "warn",
    "spaced-comment": "warn",
    "quotes": [
      "warn",
      "single"
    ],
    "no-duplicate-imports": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "prefer-promise-reject-errors": "off",
    'react-refresh/only-export-components': 'warn',
    "multiline-ternary": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}