/**
 * This module exports ESLint rule configuration for rules to be used in
 * scenarios that mimic json syntax.
 *
 * Example case is a configuration file such as this.
 *
 * Configuration files in javascript that are used only as "json with comments",
 * should try to mimic json syntax as close as possible, in order to allow
 * moving the configuration back to json if needed.
 *
 * @type {Object}
 */
module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
    }
  },
  "env": {
    "node": true
  },
  "extends": [
  ],
  "plugins": [
  ],
  "rules": {
    /**
     * Opinionated.
     *
     * Json syntax doesn't allow dangling commas.
     *
     * E.g.
     *
     * ```javascript
     * "rules": {
     *   "some-rule": [2], // Bad: no dangling commas in json.
     * }
     * ```
     *
     * @see ESLint rule group: "Possible Errors"
     */
    "comma-dangle": [2, "never"],

    /**
     * Opinionated.
     *
     * Double quotes should be used around properties in object literals, as
     * that is required by json syntax.
     *
     * @see rule: `quotes`.
     * @see ESLint rule group: "Stylistic Issues"
     */
    "quote-props": [2, "always"],

    /**
     * Opinionated.
     *
     * Double quotes is the only quotation marker allowed by json syntax.
     *
     * @see rule: `quote-props`.
     * @see ESLint rule group: "Stylistic Issues"
     */
    "quotes": [2, "double"]
  }
};
