/**
 * This module exports ESLint rule configurations for rules that do various
 * general checks.
 *
 * It extends `eslint:recommended`.
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
    "eslint:recommended"
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
     * When using property setters, you should always provide also a getter
     * for the property.
     *
     * It's okay though, to only provide a getter without setter.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "accessor-pairs": [2, {"getWithoutSet": false, "setWithoutGet": true}],

    /**
     * Opinionated.
     *
     * Array methods should have a return in callback.
     * Only checks for default Array methods.
     *
     * @see ESLint rule group: "Best Practico es"
     */
    "array-callback-return": [2],

    /**
     * Opinionated.
     *
     * Even though variables are hoisted, it's usually bad practice to use them
     * outside the block they are defined, as it confuses people new to
     * javascript var hoisting.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "block-scoped-var": [2],

    /**
    * Opinionated.
    *
    * Enforce trailing comma on multiline object and array literals.
    *
    * This way adding a new item to the end of object or array literal
    * doesn't affect the previously last item in version control.
    *
    * Good:
    *
    * ```javascript
    * var foo = {
    *   bar: "baz",
    *   qux: "quux",
    * };
    *
    * var foo = {bar: "baz", qux: "quux"};
    * ```
    */
    "comma-dangle": [2, "always-multiline"],

    /**
     * Opinionated.
     *
     * Complexity is a complicated subject in itself.
     *
     * For now the rule is disabled.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "complexity": [0],

    /**
     * Opinionated.
     *
     * All return statements inside a function should either return a value,
     * or none of them should return a value.
     *
     *	# Bad
     *
     * ```javascript
     * function doSomething(condition) {
     *   if (condition) {
     *     return true;
     *   } else {
     *     return; // needs to return value as well
     *   }
     * }
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "consistent-return": [2],

    /**
     * Opinionated.
     *
     * Even though javascript allows omitting curly braces around blocks
     * consisting of a single statement, blocks should always be wrapped
     * inside curly braces.
     *
     * E.g.
     *
     * ```javascript
     * if (foo < 0) foo = 1; // Bad
     *
     * if (foo < 0) {
     *   foo = 1;
     * }
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "curly": [2, "all"],

    /**
     * Opinionated.
     *
     * Require `switch` statements to have `default` case.
     *
     *
     * E.g.
     *
     * ```javascript
     * switch (foo) {
     *   case 1:
     *     // do something
     *     break;
     *   case 2:
     *     // do something else
     *     break;
     *   default: // `default` case is always required to be given.
     *     // do something
     * }
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "default-case": [2],

    /**
     * Opinionated.
     *
     * When object and its properties (ie. methods) are placed on separated
     * lines, the dot should be placed in front of the property.
     *
     * # Good
     *
     * ```javascript
     * object
     *   .property();
     * ```
     *
     * # Bad
     *
     * ```javascript
     * object.
     *   property();
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "dot-location": [2, "property"],

    /**
    * Opinionated.
    *
    * Using `==` or `!=` instead of `===` or `!==` is usually unintentional
    * mistake.
    *
    * Require usage of `===`  and `!==`.
    *
    * The option `smart` enforces the use of `===` and `!==` except for the
    * following cases:
    *
    *  * Comparing two literal values
    *  * Evaluating the value of `typeof`
    *  * Comparing against `null`
    *
    * @see ESLint rule group: "Best Practices"
    */
    "eqeqeq": [2, "smart"],

    /**
     * Opinionated.
     *
     * It's allowed to use `for( .. in .. )` syntax without checking keys
     * for inherited properties.
     *
     * In general `for in` should only be used for going through simple
     * objects created with object literals or similar methods that don't
     * allow inheritance.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "guard-for-in": [0],

    /**
     * Opinionated.
     *
     * Disallow use of `alert`, `prompt` and `confirm`.
     *
     * They should never be used in production code. Instead they should be
     * replaced with custom UI components.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-alert": [2],

    /**
     * Deprecated functionality.
     *
     * "The use of `arguments.caller` and `arguments.callee` make several code
     * optimizations impossible. They have been deprecated in future
     * versions of JavaScript and their use is forbidden in ECMAScript 5
     * while in strict mode." - rule documentation
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-caller": [2],

    /**
     * Opinionated.
     *
     * Lexical declarations (`let`, `const`, `function` and `class`) should
     * not be used in `case`/`default` clauses, as they are defined for the
     * whole `switch` block, but only initialized in one of the cases.
     *
     * # Bad
     *
     * switch (foo) {
     *   case 1:
     *     let x = 1;
     *     break;
     *   case 2:
     *     const y = 2 + x; // BAD: `x` is declared but not initialized.
     *     break;
     *   case 3:
     *     function f() {}
     *     break;
     *   default:
     *     class C {}
     * }
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-case-declarations": [2],

    /**
     * Opinionated.
     *
     * The rule require regex literals to escape division operators.
     *
     * # Good
     *
     * ```javascript
     * function bar() { return /\=foo/; }
     * ```
     *
     * # Bad
     *
     * ```javascript
     * function bar() { return /=foo/; }
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-div-regex": [2],

    /**
     * Opinionated.
     *
     * "If an if block contains a return statement, the else block
     * becomes unnecessary. Its contents can be placed outside of
     * the block." -rule documentation
     *
     * # Bad
     *
     * ```javascript
     * function foo (bar) {
     *   if (bar) {
     *     return true;
     *   } else {
     *     return false;
     *   }
     * }
     * ```
     *
     * # Good
     *
     * ```javascript
     * function foo (bar) {
     *   if (bar) {
     *     return true;
     *   }
     *
     *   return false;
     * }
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-else-return": [2],

    /**
    * Opinionated.
    *
    * Blocks shoudn't be empty.
    *
    * Mark them with comment if they need to be left empty.
    *
    * # Good
    *
    * ```javascript
    * if (foo) {
    * // empty
    * }
    * ```
    *
    * # Bad
    *
    * ```javascript
    * if (foo) {
    * }
    * ```
    */
    "no-empty": [2],

    /**
     * Opinionated.
     *
     * Functions shouldn't be empty.
     *
     * Use `_.noop` or mark them with comment if they need to be left empty.
     *
     * # Good
     *
     * ```javascript
     * var a = function (foo) {
     * // empty
     * }
     *
     * var b = {
     *   c: _.noop
     * }
     * ```
     *
     * # Bad
     *
     * ```javascript
     * var a = function (foo) {
     * }
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-empty-function": [2],

    /**
     * Opinionated.
     *
     * When comparing against `null`, either use `===` or `!==`. Using
     * `==` and `!=` is prohibited.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-eq-null": [2],

    /**
     * Opinionated.
     *
     * Function `eval()` is dangerous and should not be used.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-eval": [2],

    /**
     * Opinionated.
     *
     * Native objects, such as `Object` should not be extended, as it makes
     * future use of those objects unexpected in other parts of the code.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-extend-native": [2],

    /**
     * Opinionated.
     *
     * Immediately invoked function expressions (IIFE) should use `.bind` only
     * if they use `this` in their function body, or use it to pass
     * pre-specified initial function arguments.
     *
     * # Good
     *
     * ```javascript
     * var x = function(a) {
     *   this.a = a;
     * }.bind(foo)
     *
     * var x = function(a) {
     *   return a + 1;
     * }.bind(foo, bar)
     * ```
     *
     * # Bad
     *
     * ```javascript
     * var x = function(a) {
     *   return a + 1; // Bad: doesn't use this, and no initial arguments given.
     * }.bind(foo)
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-extra-bind": [2],

    /**
     * Opinionated.
     *
     * "If a loop contains no nested loops or switches, labeling the loop is
     * unnecessary." - rule documentation
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-extra-label": [2],

    /**
     * Opinionated.
     *
     * It's good practice to label `switch case` fallthroughs with a comment,
     * in order to mark the fallthrough as intentional.
     *
     * Otherwise it will be considered an error.
     *
     * E.g.
     *
     * ```javascript
     * switch() {
     *   case 1:
     *     doSomething();
     *     // fallthrough
     *
     *   case 2:
     * }
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-fallthrough": [2],

    /**
     * Opinionated.
     *
     * Always use leading and trailing zeros in decimal numbers around the dot.
     *
     * # Good
     *
     * `0.2` and `2.0`
     *
     * # Bad
     *
     * `.2` and `2.`
     *
     * Otherwise can be confused for dot operator.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-floating-decimal": [2],

    /**
     * Opinionated.
     *
     * Even though sparse arrays may be confusing, they are allowed.
     *
     * E.g.
     *
     * ```javascript
     * var foo = [,,];
     * ```
     *
     * This rule configuration may be due to change.
     */
    "no-sparse-arrays": [0],

    /**
     * Opinionated.
     *
     * While some short of the shorter notations for type conversion can
     * look confusing, it's okay to use them.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-implicit-coersion": [0],

    /**
     * Opinionated.
     *
     * It's bad practice to use var or named functions at top level scope as
     * they will become global variables.
     *
     * The rule warns when you would be mistakenly doing that.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-implicit-globals": [2],

    /**
     * Opinionated.
     *
     * Using `eval` is bad as it can create security issues.
     *
     * In addition to `eval`, several other methods allow passing a string
     * that is then evaluated. Such methods are `setTimeout()`, `setInterval()`
     * and `execScript()` in IE. These should only be used with function as
     * param.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-implied-eval": [2],

    /**
     * Opinionated.
     *
     * The rule warns about using `this` in places where it is probably
     * `undefined` by mistake.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-invalid-this": [2],

    /**
     * Obsolete.
     *
     * This rule warns about the usage of `__iterator__`.
     *
     * Using `__iterator__` is made obsolete by the introduction of ES2015
     * iterators. In addition, it is not implemented in all of the browsers.
     *
     * ES2015 operators are allowed to be used.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-iterator": [2],

    /**
     * Opinionated.
     *
     * While labels can be useful in loops and switch statements, most of the
     * time they just make the code harder to follow. Thus they shouldn't be
     * used.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-labels": [2],

    /**
     * Opinionated.
     *
     * Lone blocks should be avoided.
     *
     * # Bad
     *
     * ```javascript
     * var foo;
     *
     * {
     *   var bar = 1;
     * }
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-lone-blocks": [2],

    /**
     * Opinionated.
     *
     * Don't use functions inside loops, as it can be confusing. See the rule
     * documentation.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-loop-func": [2],

    /**
     * Opinionated.
     *
     * Numbers should be first named with a variable and only then used.
     * This makes code much more readable.
     *
     * # Bad
     *
     * ```javascript
     * var totalHamburgers = 24 + 3 + 8;
     * ```
     *
     * # Good
     *
     * ```javascript
     * var leosHamburgers = 24;
     * var donsHamburgers = 3;
     * var mikesHamburgers = 8;
     *
     * var totalHamburgers = leosHamburgers + donsHamburgers + mikesHamburgers;
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-magic-numbers": [2,
      {
        "ignore": [0, 1, 100],
        "ignoreArrayIndexes": true
      }
    ],

    /**
     * Opinionated.
     *
     * "Multiple spaces in a row that are not used for indentation are
     * typically mistakes." - rule documentation
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-multi-spaces": [2],

    /**
     * Opinionated.
     *
     * Splitting strings to multiple lines with `\` is a bad practice.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-multi-str": [2],

    /**
     * Mistake.
     *
     * Trying to assign a value to native variable, such as `String` or
     * `Object` is confusing, and possibly a mistake.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-native-reassign": [2],

    /**
     * Opinionated.
     *
     * Using `new` for side effects is a bad practice. If there is no need for
     * storing the new instance of the object, the class or object should
     * probably be refactored as a function instead.
     *
     * E.g.
     *
     * ```javascript
     * new Something(); // bad
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-new": [2],

    /**
     * Opinionated.
     *
     * "It's possible to create functions in JavaScript using the `Function`
     * constructor, such as:
     *
     * ```javascript
     * var x = new Function("a", "b", "return a + b");
     * ```
     *
     * This is considered by many to be a bad practice due to the difficult
     * in debugging and reading these types of functions." - rule documentation
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-new-func": [2],

    /**
     * Opinionated.
     *
     * See rule documentation.
     *
     * # Bad
     *
     * ```javascript
     * var stringObject = new String("Hello world");
     * var numberObject = new Number(33);
     * var booleanObject = new Boolean(false);
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-new-wrappers": [2],

    /**
     * Deprecated.
     *
     * Using octal literals (number with leading zero, e.g. `071` = 57) was
     * deprecated in ES5.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-octal": [2],

    /**
     * Deprecated.
     *
     * Using octal escapes in strings (`"foobar \251"`) was deprecated in ES5.
     *
     * Unicode escapes should be used instead.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-octal-escape": [2],

    /**
     * Opinionated.
     *
     * It's allowed to assign new values to params. This mutates also
     * `arguments`, but you just need to know this. In ES6 environment
     * `arguments` shouldn't be used anyway.
     *
     * # Good
     *
     * ```javascript
     * var foo = function(a) {
     *   a = a || [];
     * };
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-param-reassign": [0],

    /**
     * Deprecated.
     *
     * Using `__proto__` has been deprecated in ES3.1, and shouldn't be used.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-proto": [2],

    /**
     * Opinionated.
     *
     * Redeclaring variables should not be allowed, as it makes code harder
     * to follow.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-redeclare": [2, { "builtinGlobals": true }],

    /**
     * Opinionated.
     *
     * Doing assignment in return statement is probably a typo.
     * If that was the original intent, the assignment should be wrapped
     * in parenthesis.
     *
     * ```javascript
     * var foo = function() {
     *   return (a = b + 2);
     * }
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-return-assign": [2],

    /**
     * Opinionated.
     *
     * Using script urls `javascript:` is a way to do `eval`, and is not
     * allowed.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-script-url": [2],

    /**
     * Mistake.
     *
     * "Self assignments [`foo = foo;`] have no effect, so probably those
     * are an error due to incomplete refactoring." - rule documentation
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-self-assign": [2],

    /**
     * Mistake.
     *
     * Self comparison (`foo === foo`) has no use, other than checking for
     * `NaN`, and for it `NaN()` or ES2015 `Number.isNaN()` should be used
     * 'instead.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-self-compare": [2],

    /**
     * Best practice.
     *
     * Disallow use of the comma operator. See rule documentation.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-sequences": [2],

    /**
     * Opinionated.
     *
     * Errors should be thrown using `Error` object.
     *
     * ```javascript
     * throw Error('foobar');
     * ```
     *
     * Throwing string literals is disallowed.
     *
     * ```javascript
     * throw 'foobar'; // bad
     * ```
     *
     * Using `Error` allows keeping track where it originated.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-throw-literal": [2],

    /**
     * Opinionated.
     *
     * If a variable is used in a loop condition, it should be changed during
     * loop execution in order to avoid infinite loops.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-unmodified-loop-condition": [2],

    /**
     * Mistake.
     *
     * "Unused expressions are those expressions that evaluate to a value but
     * are never used. For example:
     *
     * ```javascript
     * "Hello world";
     * ```
     *
     * This string is a valid JavaScript expression, but isn't actually used.
     * Even though it's not a syntax error it is clearly a logic error and it
     * has no effect on the code being executed." - rule documentation
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-unused-expressions": [2],

    /**
     * Opinionated.
     *
     * Labels should not be used.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-unused-labels": [2],

    /**
     * Opinionated.
     *
     * "This rule is aimed at eliminating unused variables, functions and
     * variables in parameters of functions, as such, warns when one is
     * found." -rule documentation
     *
     * All unused vars are a bad thing, but it's okay to use unused
     * parameters in args.
     *
     * E.g.
     *
     * ```javascript
     * function foo(first, second, third) { // this is all allowed
     *   second();
     * }
     * ```
     * In this example:
     *
     * * `first` needs to be allowed in order to get access to `second`.
     * * `third` needs to be allowed as it might be coming from a 3rd party
     *   library, and in that case it's good practice to list possible
     *   params, as long as there are only limited number of them.
     */
    "no-unused-vars": [1, {"vars": "all", "args": "none"}],

    /**
     * Opinionated.
     *
     * As `.call()` and `.apply()` are slower than normal function calls,
     * they should only be used when needed to change context of the function.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-useless-call": [2],

    /**
     * Opinionated.
     *
     * Concatenation of only separate string literals (`var foo = "a" + "b"`)
     * is useless. Instead of using concatenation, the strings should be
     * originally written together.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-useless-concat": [2],

    /**
     * Opinionated.
     *
     * `void` should not be used.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-void": [2],

    /**
     * Opinionated.
     *
     * Warning comments such as `// TODO: do something` are allowed, but
     * they will be marked with warning in order to be found easier, and to
     * make their existence known.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-warning-comments": [1],

    /**
     * Opinionated.
     *
     * `with` should not be used.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "no-with": [2],

    /**
     * Opinionated.
     *
     * Use single quotes normally.
     *
     * Template strings are allowed for multiline strings
     * and to insert variables into strings.
     *
     * It's also allowed to use double quotes in order to escape single
     * quotes inside the string.
     */
    "quotes": [2, "single", "avoid-escape"],

    /**
     * Opinionated.
     *
     * When using `parseInt()`, the second parameter (radix) should always be
     * given, in order to make clear what base was meant to be used.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "radix": [2],

    /**
     * Opinionated.
     *
     * Always use `"use strict"`.
     *
     * Many ES2015 features set the flag automatically. Such are e.g. modules
     * and classes.
     *
     * @see ESLint rule group: "Strict Mode"
     */
    "require-jsdoc": [2, {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true
      }
    }],

    /**
     * Opinionated.
     *
     * Always use `"use strict"`.
     *
     * Many ES2015 features set the flag automatically. Such are e.g. modules
     * and classes.
     *
     * @see ESLint rule group: "Strict Mode"
     */
    "strict": [2],

    /**
     * Opinionated.
     *
     * Commenting code with [JSDoc](http://usejsdoc.org/) makes the code
     * easier to read.
     *
     * According to the rule documentation, the rule "will warn when:
     *
     * 1. There is a JSDoc syntax error
     * 2. A `@param` or `@returns` is used without a type specified
     * 3. A `@param` or `@returns` is used without a description
     * 4. A comment for a function is missing `@returns`
     * 5. A parameter has no associated `@param` in the JSDoc comment
     * 6. `@param`s are out of order with named arguments".
     *
     * While this rule only checks JSDoc for valid syntax and certain missing
     * things, it's better than nothing.
     */
    "valid-jsdoc": [2],

    /**
     * Opinionated.
     *
     * Even though javascript hoists `var`s, declaring `var`s in the middle
     * of the code is allowed.
     *
     * @see ESLint rule group: "Best Practices"
     */
    "vars-on-top": [0],

    /**
     * Opinionated.
     *
     * Always wrap the function in iife calls in parenthesis.
     *
     * E.g.
     *
     * ```javascript
     * var x = (function () { return { y: 1 };})();
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "wrap-iife": [2, "inside"],

    /**
     * Opinionated.
     *
     * Yoda calls are disallowed.
     *
     * There is nothing wrong in yoda calls itself. Disallowing them is just
     * a means to make the code look a bit more uniform.
     *
     * # Good
     *
     * ```javascript
     * if (color === "red") {
     *   // ...
     * }
     * ```
     *
     * # Bad
     *
     * ```javascript
     * if ("red" === color) {
     *   // ...
     * }
     * ```
     *
     * @see ESLint rule group: "Best Practices"
     */
    "yoda": [2]

  }

};
