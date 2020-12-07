module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-undef': 'off',
    'max-len': 'off',
    'react/prop-types': 'off',
  },
};
