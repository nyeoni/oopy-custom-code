module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: [
    'eslint-plugin-html'
  ],
  settings: {
    'html/javascript-mime-types': ['text/javascript', 'text/worker', '']
  }
}
