module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@novicell/eslint-config-nuxt',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': 'error',
    'vue/html-indent': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-for-template-key': 'off',
    semi: ['error', 'always'],
    'no-console': [
      'error',
      {
        allow: ['error', 'info', 'warn', 'debug']
      }
    ]
  }
};
