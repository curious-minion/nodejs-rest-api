module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
  },
}
