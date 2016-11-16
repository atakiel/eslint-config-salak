/**
 * This module exports ESLint rule configuration for rules that are React.js
 * specific.
 *
 * It compiles a set of rules, so that the jsx looks like the following example:
 *
 * ```javascript
 * <Foo
 *   bar="1"
 *   baz="2"
 * >
 *   <Bar
 *     bar="1"
 *     bar="2"
 *   />
 *   <Baz bar="1" />
 * </Foo>
 * ```
 *
 * @requires eslint-plugin-react
 * @see {@link https://github.com/yannickcr/eslint-plugin-react|eslint-plugin-react}
 * @type {Object}
 */
module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
  },
  "extends": [
  ],
  "plugins": [
    "react"
  ],
  /**
   * Rules are in alphabetical order.
   */
  "rules": {

    /**
     * Opinionated.
     *
     * Closing tag in JSX should be always after the last prop (on the
     * same line).
     *
     * E.g.
     *
     * ```javascript
     * <Foo
     *   bar={true}
     *   baz="baz"
     * />
     *
     * <Bar
     *   bar={true}
     *   baz="baz"
     * >
     *   <Foobar />
     * </Bar>
     * ```
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-closing-bracket-location": [2, {"selfClosing": "tag-aligned", "nonEmpty": "tag-aligned"}],

    /**
     * Opinionated.
     *
     * First prop should be on a newline, unless there's only one prop.
     *
     * ```javascript
     * <Foo bar="1" />
     * ```
     *
     * ```javascript
     * <Foo
     *   bar="1"
     *   baz="1"
     * />
     * ```
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],

    /**
     * Opinionated.
     *
     * This rule is disabled, as it currently doesn't support the wanted style.
     *
     * The first prop should be right after the component name, and the rest
     * of the props should be indented at the same level as the first one.
     *
     * ```javascript
     * <Foo
     *   bar="1"
     *   baz="2"
     * />
     * ```
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-indent-props": [2, 2],

    /**
     * Opinionated.
     *
     * Only one prop should be on a same line.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-max-props-per-line": [2]

  }
}
