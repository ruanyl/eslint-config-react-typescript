module.exports = {
  extends: './lib/index.js',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
}
