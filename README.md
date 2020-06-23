# Eslint lint configuration for TypeScript and React
[![npm](https://img.shields.io/npm/v/eslint-config-react-typescript.svg)](https://www.npmjs.com/package/eslint-config-react-typescript)
![github-workflow](https://github.com/ruanyl/eslint-config-react-typescript/workflows/Build/badge.svg)

## Installation

```
$ yarn add -D eslint @typescript-eslint/eslint-plugin eslint-config-react-typescript
```

## How to use

```javascript
module.exports = {
  extends: ['eslint-config-react-typescript'],
  env: {
    node: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
}
```

### For React TypeScript project:

```javascript
module.exports = {
  extends: ['eslint-config-react-typescript/lib/react'],
  env: {
    browser: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
}
```
