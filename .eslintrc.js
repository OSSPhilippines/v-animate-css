module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'semistandard',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'generator-star-spacing': 'off',
    'arrow-parens': 'off',
    'one-var': 'off',
    semi: [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'keyword-spacing': [2, { before: true, after: true }],
    'space-before-blocks': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'no-console': 'off',
    'no-multi-str': 'off',
  },
};
