// import js from '@eslint/js'

import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'



export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Disable all ESLint rules for JSX files
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
  // Rest of the config for JS files...
]
