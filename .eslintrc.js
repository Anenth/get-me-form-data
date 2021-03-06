module.exports = {
  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype'
  ],
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  plugins: ['flowtype']
};
