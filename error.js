/**
 * This module consists of configurations for ESLint rules that check for
 * possible typos and other mistakes, that may result in errors or unexpected
 * or unwanted results.
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
  ],
  "plugins": [
  ],
  /**
   * Rules are in alphabetical order.
   */
  "rules": {
    /**
     * Opinionated.
     *
     * No assignments should be done in conditional statements.
     *
     * If it's absolutely required, it should be marked by using additional
     * parenthesis around the assignment.
     *
     * # Good
     *
     * ```javascript
     * do {
     *  doSomething(a);
     * } while ((a = a + 1));
     * ```
     *
     * # Bad
     *
     * ```javascript
     * if (a = 'weirdStuff') { // possible typo
     *   log('a was called');
     * }
     * ```
     */
    "no-cond-assign": [2, "except-parens"],

    /**
     * Opinionated.
     *
     * Const values such as `true`, `false`, `0` should not be used as sole
     * in conditions.
     *
     * # Good
     *
     * ```javascript
     * var TRUE = true;
     * while (TRUE) {
     *   yield* "forevah!"
     * }
     * ```
     *
     * # Bad
     *
     * ```javascript
     * if (false) {
     *   throw new Error('Whoops');
     * }
     * ```
     */
    "no-constant-condition": [2],

    /**
     * Possible mistake.
     *
     * As control character pattern matching is relatively rare, it's okay
     * to expect it to be a mistake.
     */
    "no-control-regex": [2],

    /**
     * Opinionated.
     *
     * Production code shouldn't contain debugger use, but even for development
     * there are better means for debugging.
     */
    "no-debugger": [2],

    /**
     * Unexpected.
     *
     * "The delete operator will only delete the properties of objects.
     * It cannot "delete" variables or anything else. Using them on variables
     * might lead to unexpected behavior." -rule documentation
     */
    "no-delete-var": [2],

    /**
     * Error.
     *
     * "In strict mode you will receive a SyntaxError if a function takes
     * multiple arguments with the same name." -rule documentation
     */
    "no-dupe-args": [2],

    /**
     * Unexpected.
     *
     * "Creating objects with duplicate keys in objects can cause unexpected
     * behavior in your application." -rule documentation
     */
    "no-dupe-keys": [2],

    /**
     * Bad practice.
     *
     * # Bad
     *
     * ```javascript
     * switch (a) {
     *   case 1:
     *     break;
     *   case 2:
     *     break;
     *   case 1:         // duplicate literal 1
     *     break;
     *   default:
     *     break;
     * }
     * ```
     */
    "no-duplicate-case": [2],

    /**
     * Opinionated.
     *
     * "Empty character classes in regular expressions do not match anything
     * and can result in code that may not work as intended." -rule
     * documentation
     */
    "no-empty-character-class": [2],

    /**
     * Possible mistake.
     *
     * "When an error is caught using a `catch` block, it's possible to
     * accidentally (or purposely) overwrite the reference to the error." -rule
     * documentation
     */
    "no-ex-assign": [2],

    /**
     * Best practice.
     *
     * Doing more than two boolean casts has no extra advantage. Same applies
     * to statements when syntax automatically does the final cast to boolean.
     *
     * # Bad
     *
     * ```javascript
     * var foo = !!!someVar; // three boolean casts
     * var bar = !!otherVar ? 1 : 0; // three boolean casts
     * ```
     */
    "no-extra-boolean-cast": [2],

    /**
     * Opinionated.
     *
     * Extra parenthesis is allowed.
     *
     * @todo This shouldn't be in errors
     */
    "no-extra-parens": [0],

    /**
     * Opinionated.
     *
     * No extra semicolons should be used, as they just make the code
     * more confusing to read.
     */
    "no-extra-semi": [2],

    /**
     * Possible mistake.
     *
     * Overwriting function declarations is a possible mistake.
     *
     * # Bad
     *
     * ```javascript
     * function foo () { return 0; }
     * foo = 'bar';
     * ```
     */
    "no-func-assign": [2],

    /**
     * Opinionated.
     *
     * No function declarations inside blocks.
     */
    "no-inner-declarations": [2, "functions"],

    /**
     * Possible mistake.
     *
     * "This rule validates string arguments passed to the RegExp constructor."
     * -rule documentation
     */
    "no-invalid-regexp": [2],

    /**
     * Possible mistake.
     *
     * Use only regular whitespace characters (spaces, tabs and line changes).
     */
    "no-irregular-whitespace": [2],

    /**
     * Possible mistake.
     *
     * The rule checks for a possible typo.
     *
     * ```javascript
     * if(!a in b) {
     * // do something
     * }
     * ```
     *
     * is not the same as:
     *
     * ```javascript
     * if(!(a in b)) {
     * // do something
     * }
     * ```
     */
    "no-negated-in-lhs": [2],

    /**
     * Error.
     *
     * "This rule is aimed at preventing the accidental calling of global
     * objects as functions." -rule documentation
     *
     * Such global objects are eg. `Math` and `JSON`.
     *
     * # Bad
     *
     * ```javascript
     * var foo = Math();
     * ```
     */
    "no-obj-calls": [2],

    /**
     * Possible mistake.
     *
     * Keep regular expressions simple by disallowing extra spaces in them.
     * Exact number of spaces can be hard to see, so limit the amount to one.
     *
     * # Good
     *
     * ```javascript
     * var re = /foo {3}bar/;
     * ```
     *
     * # Bad
     *
     * ```javascript
     * var re = /foo   bar/;
     * ```
     */
    "no-regex-spaces": [2],

    /**
     * Possible mistake.
     *
     * The rule helps spotting cases where missing semicolon might make two
     * lines to be read as a multiline statement.
     */
    "no-unexpected-multiline": [2],


    /**
     * Possible mistake.
     *
     * The rule helps spot unreachable code.
     */
    "no-unreachable": [2],

    /**
     * Possible mistake.
     *
     * Use `isNaN(someNumber)` instead of comparing the number against `NaN`,
     * as in `if (someNumber == NaN)`.
     *
     * *Note:* In many cases, what user would actually want to do is to use
     * ES2015 method `Number.isNaN(someNumber)`, but this rule doesn't check
     * for that.
     */
    "use-isnan": [2],

    /**
     * Possible mistake.
     *
     * "This rule aims to prevent errors from likely typos by ensuring that
     * when the result of a typeof operation is compared against a string,
     * that the string is a valid value." -rule documentation
     */
    "valid-typeof": [2]

  }
}
