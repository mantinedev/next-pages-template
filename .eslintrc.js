module.exports = {
  extends: ['@mantine/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
