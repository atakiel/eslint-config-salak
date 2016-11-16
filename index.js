/**
 * This module exports Salak's default ESLint rule configurations.
 *
 * It does this by extending `salak/error` and `salak/general`.
 *
 * @type {Object}
 */
module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
    }
  },
  "env": {
  },
  "extends": [
    "salak/error.js",
    "salak/general.js"
  ],
  "plugins": [
  ],
  "rules": {
  }
};
