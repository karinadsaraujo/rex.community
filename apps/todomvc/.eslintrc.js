module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'standard',
    'standard-react'
  ],
  globals: {
    HTMLElement: true,
    HTMLDivElement: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json',
    useJSXTextNode: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-prototype-builtins': 'off',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^[h]$',
        argsIgnorePattern: '^_'
      }
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: '999.999.999'
    }
  }
}
