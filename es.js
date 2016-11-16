/**
 * This module exports ESLint rule configurations for rules that check various
 * ES6 (or ES2015) related situations.
 *
 * @type {Object}
 */
module.exports = {
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  "env": {
    "es6": true
  },
  "extends": [
  ],
  "plugins": [
  ],
  /*
   * # ES2015 Rules
   *
   *  Rules are in alphabetical order.
   */
  "rules": {
    /*
     * By leaving arrow parens and body styles to be freely chosen,
     * allows chaining multiple arrow functions in a very nice and curry manner.
     *
     * E.g.:
     *
     * ```javascript
     * const myFunction = style => header => counter => {
     *   // all params are available here: style, header, counter
     * };
     * ```
     *
     * Related rules: `arrow-parens`
     */
    "arrow-body-style": [0],

    /*
     * By leaving arrow parens and body styles to be freely chosen,
     * allows chaining multiple arrow functions in a very nice and curry manner.
     *
     * E.g.:
     *
     * ```javascript
     * const myFunction = style => header => counter => {
     *   // all params are available here: style, header, counter
     * };
     * ```
     *
     * Related rules: `arrow-body-style`
     */
    "arrow-parens": [0],

    /**
     * Opinionated.
     *
     * Arrow functions should have spacing after and before `=>`.
     *
     * E.g.
     *
     * ```javascript
     * const myFunction = (a) => { a };
     * ```
     */
    "arrow-spacing": [2, { "before": true, "after": true }],

    /*
     * Error rule.
     *
     * Super should always be called in a constructor of extended class,
     * but never on a class that doesn't extend.
     */
    "constructor-super": [2],

    /*
     * Opinionated.
     *
     * Generator functions should have star after function, for consistency.
     *
     * Eg.
     *
     * ```javascript
     * function* Generator() {}
     * ```
     */
    "generator-star-spacing": [2, {"before": false, "after": true}],

    /*
     * Error.
     *
     * Class should not be overriden.
     *
     * Disallow:
     *
     * ```javascript
     * class A { }
     * A = 0;
     * ```
     */
    "no-class-assign": [2],

    /*
     * Opinionated.
     *
     * Arrow functions should be clearly marked when using `>=`, `<=`
     * or `==` around them.
     */
    "no-confusing-arrow": [2],

    /*
     * Error.
     *
     * Const assigned variables should not be tried to be changed,
     * as it will rise runtime error.
     */
    "no-const-assign": [2],

    /*
     * Unexpected.
     *
     * Classes shouldn't have duplicate members.
     */
    "no-dupe-class-members": [2],

    /*
     * Opinionated.
     *
     * # Bad
     *
     *  ```javascript
     * // doesn't create any variables
     * var {a: {}} = foo;
     * ```
     *
     * In this code, no new variables are created because `a` is just a
     * location helper while the `{}` is expected to contain the variables
     * to create, as `b` in the next example:
     *
     * # Good
     *
     * ```javascript
     * // creates variable b
     * var {a: { b }} = foo;
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-empty-pattern": [2],

    /*
     * Error.
     *
     * Trying to instantiate `Symbol` using *new*, will rise `TypeError`.
     *
     * How to use:
     *
     * ```javascript
     * let foo = Symbol('foo');
     * ```
     */
    "no-new-symbol": [2],

    /*
     * Error.
     *
     * In the constructor of derived classes,
     * if `this`/`super` are used before `super()` calls,
     * it raises a reference error.
     */
    "no-this-before-super": 2,

    /*
     * Opinionated.
     *
     * Empty constructors are not needed as ES2015 provides them automatically.
     */
    "no-useless-constructor": [2],

    /*
     * Opinionated.
     *
     * It's okay to use var.
     */
    "no-var": [0],

    /*
     * Opinionated.
     *
     * Object shorthand syntax is allowed, but not required.
     */
    "object-shorthand": [0],

    /*
     * Opinionated.
     *
     * Normal functions in callbacks are allowed.
     */
    "prefer-arrow-callback": [0],

    /*
     * Opinionated.
     *
     * Use `const` when needed, but in the end it's up to coder to deside.
     */
    "prefer-const": [0],

    /*
     * Opinionated.
     *
     * Use `Reflect` methods when possible.
     */
    "prefer-reflect": [2],

    /*
     * Opinionated.
     *
     * Prefer rest params over `arguments`, as `arguments` does not have
     * methods of `Array.prototype`.
     */
    "prefer-rest-params": [2],

    /*
     * Opinionated.
     *
     * Prefer spread over using `.apply()`.
     *
     * In order to call variadiac functions, ES2015 allows using spread syntax.
     *
     * ```javascript
     * var args = [1, 2, 3, 4];
     * Math.max(...args);
     * ```
     */
    "prefer-spread": [2],

    /*
     * Opinionated.
     *
     * Template strings should be used instead of string concatenation.
     */
    "prefer-template": [2],

    /*
     * Opinionated.
     *
     * Generator functions should contain `yield`.
     */
    "require-yield": [2],

    /*
     * Opinionated.
     *
     * Embedded expressions inside template string should not contain leading
     * and trailing spacing.
     *
     * Allowed:
     *
     * ```javascript
     * var exampleString = `This is ${example} string`;
     * ```
     */
    "template-curly-spacing": [2, "never"],

    /*
     * Opinionated.
     *
     * The star in `yield` statement should be immediately after the keyword.
     *
     * ```javascript
     * function* generator() {
     *   yield* other();
     * }
     * ```
     */
    "yield-star-spacing": [2, {"before": false, "after": true}]

  }

};
