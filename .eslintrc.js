module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  globals: {
    __APP_ENV__: 'readonly',
    __VERSION__: 'readonly',
    __DEFAULT_LOCALE__: 'readonly',
    __BACKEND_BASEURL__: 'readonly',
  },
};
