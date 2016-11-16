/**
 * This module exports ESLint rule configuration for rules that are Node.js
 * specific.
 *
 * @type {Object}
 */
module.exports = {
  "ecmaFeatures": {
  },
  "env": {
    "node": true
  },
  "extends": [
    "salak/es6.js"
  ],
  "plugins": [
  ],
  "rules": {
    /**
     * No real preference on this.
     *
     * ESLint rule documentation gives a good reasoning for turning it on.
     *
     * @see ESLint rule group: "Node.js and CommonJS"
     */
    "callback-return": [2],

    /**
     * Opinionated.
     *
     * `require()` calls should take place on top-level, in order to
     * make them clearer.
     *
     * @see ESLint rule group: "Node.js and CommonJS"
     */
    "global-require": [2],

    /**
     * Opinionated.
     *
     * Require that error is handled when using callback pattern.
     *
     * @see ESLint rule group: "Node.js and CommonJS"
     */
    "handle-callback-err": [2, "^(err|error|.+Error)$" ],

    /**
     * Opinionated.
     *
     * As we are in node environment, console is okay to use.
     * It's the general means for showing user information.
     */
    "no-console": 0,

    /**
     * Opinionated.
     *
     * `require`s should be grouped by their type.
     *
     * @see ESLint rule group: "Node.js and CommonJS"
     */
    "no-mixed-requires": [2, {"grouping": true, "allowCall": true}],

    /**
     * Possible mistake.
     *
     * When importing Classes or other structures with constructors,
     * the module should first be imported,
     * and a new object should only be initialized on a different statement.
     *
     * From rule definition:
     *
     * ```javascript
     * // Possible error: `new` targets `require` instead of `app-header`.
     * var appHeader = new require('app-header');
     * ```
     *
     * What user probably tried to do:
     *
     * ```javascript
     * // correct object initialization
     * var appHeader = new (require('app-header'));
     * ```
     *
     * @see ESLint rule group: "Node.js and CommonJS"
     */
    "no-new-require": [2],

    /**
     * Possible error.
     *
     * Use Node's `path` for creating paths, instead of concatenating paths
     * such as `__dirname` or `__filename`.
     *
     * `path` will work in any operating system.
     *
     * Good:
     *
     * ```javascript
     * var fullPath = path.join(__dirname, "foo.js");
     * ```
     *
     * Bad:
     *
     * ```javascript
     * var fullPath = __dirname + "/foo.js";
     * ```
     *
     * @see ESLint rule group: "Node.js and CommonJS"
     */
    "no-path-concat": [2],

    /**
     * Best practice.
     *
     * In Node.js `process.env` is a global dependency and shouldn't not
     * be used, as it can make code harder to maintain.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-process-env": [2],

    /**
     * Best practice.
     *
     * Calling `process.exit()` is bad practice as it will immediately
     * halt node, without allowing the system the possibility to react
     * to it.
     *
     * @see ESLint rule group: "Node.js and CommonJS"
     */
    "no-process-exit": [2],

    /**
     * Opinionated.
     *
     * All modules are free to be used.
     *
     * @see ESLint rule group: "Node.js and CommonJS"
     */
    "no-restricted-modules": [0],

    /**
     * Opinionated.
     *
     * All imports are free to be used.
     *
     * @see ESLint rule group: "Node.js and CommonJS"
     */
    "no-restricted-imports": [0],

    /**
     * Opinionated.
     *
     * Don't use methods that are marked to be synchronous (ie. have `Sync`
     * in their name).
     *
     * @see ESLint rule group: "Node.js and CommonJS"
     */
    "no-sync": [2]

  }

};
