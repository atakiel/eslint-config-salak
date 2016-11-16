/**
 * This module exports ESLint rule configuration for rules that are React.js
 * specific.
 *
 * It extends configuration `salak/es6`.
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
    "es6": true
  },
  "extends": [
    "salak/es6.js"
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
     * The rule doesn't seem to allow using stateless functions, and
     * for this reason should not be used.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/display-name": [0],

    /**
     * Opinionated.
     *
     * All prop types are allowed.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/forbid-prop-types": [0],

    /**
     * Opinionated.
     *
     * Always use boolean values for props in JSX.
     *
     * ```javascript
     * <Foo bar={true} />
     * ```
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-boolean-value": [2, "always"],

    /**
     * Opinionated.
     *
     * Closing tag in JSX should be always after the last prop (on the
     * same line).
     *
     * E.g.
     *
     * ```javascript
     * <Foo bar={true}
     *      baz="baz" />
     *
     * <Bar bar={true}
     *      baz="baz">
     *      <Foobar />
     * </Bar>
     * ```
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-closing-bracket-location": [2, {"selfClosing": "after-props", "nonEmpty": "after-props"}],

    /**
     * Opinionated.
     *
     * In JSX props the curly braces should never have space after starting
     * brace or before closing brace.
     *
     * E.g.
     *
     * ```javascript
     * <Foo bar={true} />
     * ```
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-curly-spacing": [2, "never"],

    /**
     * Opinionated.
     *
     * In JSX props there should be no space before or after the equal sign.
     *
     * E.g.
     *
     * ```javascript
     * <Foo bar={true} />
     * ```
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-equals-spacing": [2, "never"],

    /**
     * Opinionated.
     *
     * No naming scheme for event handlers.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-handler-names": [0],

    /**
     * Opinionated.
     *
     * This rule is disabled, as it currently doesn't support the wanted style.
     *
     * The first prop should be right after the component name, and the rest
     * of the props should be indented at the same level as the first one.
     *
     * ```javascript
     * <Foo bar="1"
     *      baz="2" />
     * ```
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-indent-props": [0],

    /**
     * Opinionated.
     *
     * The indent in JSX is 2 spaces.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-indent": [2, 2],

    /**
     * Opinionated.
     *
     * Warns when a component is missing a `key` prop, when it probably would
     * need one.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-key": [2],

    /**
     * Opinionated.
     *
     * Only one prop should be on a same line.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-max-props-per-line": [2],

    /**
     * Opinionated.
     *
     * `.bind` or arrow functions shouldn't be used in props, as they always
     * create a new function.
     *
     * This becomes problematic when using `immutableMixin`, as `immutableMixin`
     * consideres the props to be changed and rerenders the component every
     * time, thus making the use of `immutableMixin` redundant.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-no-bind": [2, {"ignoreRefs": true}],

    /**
     * Unexpected.
     *
     * Same property shouldn't occur twice for the same component, as it
     * might result in unexpected behaviour.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-no-duplicate-props": [2],

    /**
     * Opinionated.
     *
     * It's okay to use string literals inside JSX. No need wrap them inside
     * braces.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-no-literals": [0],

    /**
     * Opinionated.
     *
     * Warns if component name is undefined when trying to use it in JSX.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-no-undef": [2],

    /**
     * Opinionated.
     *
     * Warns if component name is not written in PascalCase.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-pascal-case": [2],

    /**
     * Opinionated.
     *
     * No need to sort props in components alphabetically or otherwise.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-sort-props": [0],

    /**
     * Opinionated.
     *
     * Self-closing elements in JSX should have a single space before the
     * closing bracket.
     *
     * ```javascript
     * <Foo bar="1" />
     * ```
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-space-before-closing": [2, "always"],

    /**
     * Opinionated.
     *
     * The rule marks `React` to be used if using JSX, if
     * `no-unused-vars` is enabled.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-uses-react": [1],

    /**
     * Opinionated.
     *
     * The rule marks variables used as components to be used if using JSX,
     * if `no-unused-vars` is enabled.
     *
     * @see eslint-plugin-react rule group: "JSX-specific rules"
     */
    "react/jsx-uses-vars": [1],

    /**
     * Opinionated.
     *
     * React methods with "danger" in their name should not be used,
     * as they do dangerous things.
     *
     * If their usage is required, they should be used with comment
     * disabling the ESLint rule for that line, in order to
     * mark that the decision was made knowingly.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/no-danger": [2],

    /**
     * Opinionated.
     *
     * Using deprecated React method is okay while using the version they
     * are still available, yet marked as deprecated.
     *
     * This rule gives a warning for using deprecated methods.
     *
     * All deprecation warnings should be removed prior to upgrading
     * React to a newer version.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/no-deprecated": [1],

    /**
     * Opinionated.
     *
     * "Updating the state [in componentDidMount,] after a component mount
     * will trigger a second `render()` call and can lead to property/layout
     * thrashing." - rule documentation
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/no-did-mount-set-state": [2],

    /**
     * Opinionated.
     *
     * "Updating the state [in componentDidUpdate,] after a component update
     * will trigger a second `render()` call and can lead to property/layout
     * thrashing." - rule documentation
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/no-did-update-set-state": [2],

    /**
     * Opinionated.
     *
     * "NEVER mutate `this.state` directly, as calling `setState()` afterwards
     * may replace the mutation you made. Treat `this.state` as if it were
     * immutable." - rule documentation
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/no-direct-mutation-state": [2],

    /**
     * Opinionated.
     *
     * "`isMounted` is an anti-pattern, is not available when using ES6
     * classes, and it is on its way to being officially
     * deprecated." -rule documentation
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/no-is-mounted": [2],

    /**
     * Opinionated.
     *
     * Declaring multiple components in the same file is allowed.
     *
     * It's usually a good practice to declare smaller sub components in the
     * same file as the main component.
     *
     * The rule only allowes these sub components to be stateless functions,
     * and while that is good in most cases, some times it's useful to also
     * declare ES6 class subcomponents in the main components file.
     *
     * Although, as ES6 classes do not get hoisted, this usually means that
     * the main component gets pushed to the bottom of the file, which is a
     * kind of a downfall.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/no-multi-comp": [0],

    /**
     * Opinionated.
     *
     * Even though using `setState` is in most cases not needed, there can be
     * reasons to use it.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/no-set-state": [0],

    /**
     * Opinionated.
     *
     * String refs should not be used, as they seem to be considered legacy,
     * at least according to this rule's documentation.
     *
     * In general it's a good practice to try to avoid using refs in the
     * first place.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/no-string-refs": [2],

    /**
     * Opinionated.
     *
     * The rule seems to be warning for using `class` as property name instead
     * of proper `className`.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/no-unknown-property": [2],

    /**
     * Opinionated.
     *
     * Both ES5 style React components and ES6 style class components are
     * allowed.
     *
     * ES6 style class components are the preferred way of creating more
     * complicated components, but no error or warning will be given if they
     * are not used.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/prefer-es6-class": [0],

    /**
     * Opinionated.
     *
     * Stateless functions are the preferred way of writing simple components,
     * but no error or warning will be given if they are not used.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/prefer-stateless-function": [0],

    /**
     * Opinionated.
     *
     * Every component should have `propTypes` declared, as they improve
     * debugging and testing components.
     *
     * Naturally this doesn't affect stateless functions that don't support
     * `propTypes`.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/prop-types": [2],

    /**
     * Opinionated.
     *
     * The rule adds `React` in JSX's scope, so that it doesn't give error when
     * using ESLint rule `no-undef`.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/react-in-jsx-scope": [2],

    /**
     * Opinionated.
     *
     * Don't use `.JSX` endings in `require` methods.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/require-extension": [2],

    /**
     * Opinionated.
     *
     * When using JSX syntax for components, a component without children
     * should be self closing (i.e. `<Component />`).
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/self-closing-comp": [2],

    /**
     * Opinionated.
     *
     * Sort component methods by their group, and place in the group.
     *
     * Order:
     *
     * 1. static methods and properties
     * 2. lifecycle methods:
     *  * `displayName`,
     *  * `propTypes`,
     *  * `contextTypes`,
     *  * `childContextTypes`,
     *  * `mixins`,
     *  * `statics`,
     *  * `defaultProps`,
     *  * `constructor`,
     *  * `getDefaultProps`,
     *  * `getInitialState`,
     *  * `state`,
     *  * `getChildContext`,
     *  * `componentWillMount`,
     *  * `componentDidMount`,
     *  * `componentWillReceiveProps`,
     *  * `shouldComponentUpdate`,
     *  * `componentWillUpdate`,
     *  * `componentDidUpdate`,
     *  * `componentWillUnmount` (in this order).
     * 3. custom methods
     * 4. `render` method
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/sort-comp": [2],

    /**
     * Opinionated.
     *
     * `propTypes` can be in alphabetical order, but they don't have to be.
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/sort-prop-types": [0],

    /**
     * Opinionated.
     *
     * Multiline JSX blocks should be wrapped in parenthesis.
     *
     * ```javascript
     * return (
     *   <div>
     *     <Foobar />
     *   </div>
     * );
     * ```
     *
     * @see eslint-plugin-react rule group: "Supported rules"
     */
    "react/wrap-multilines": [1]
  }

};
