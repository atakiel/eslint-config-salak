/**
 * This module exports ESLint rule configuration for rules that are browser
 * specific.
 *
 * @type {Object}
 */
module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
    }
  },
  "env": {
    "browser": true
  },
  "extends": [
    "salak/es"
  ],
  "plugins": [
  ],
  "rules": {

    /*
     * Opinionated.
     *
     * As we are in browser environment, `console` shouldn't be used.
     * It's main use case in browser is many times debugging,
     * and there exist better means of debugging in browser environment.
     *
     * As not all browsers implement `console`, calling console might also
     * result in `Error`.
     */
    "no-console": 2

  }

};
