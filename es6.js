module.exports = {

  "ecmaFeatures": {
    "modules": true
  },
  "env": {
    "es6": true
  },
  "extends": [
  ],
  "plugins": [
  ],
  "rules": {
    // ES6 RULES

    /**
     * By leaving arrow parens and body styles to be freely chosen,
     * allows chaining multiple arrow functions in a very nice and curry manner,
     * e.g.:
     *
     * const myFunction = style => header => counter => {
     *   // all params are available here: style, header, counter
     * }
     *
     * Related rules: arrow-parens
     */
    "arrow-body-style": [0],

    /**
     * By leaving arrow parens and body styles to be freely chosen,
     * allows chaining multiple arrow functions in a very nice and curry manner,
     * e.g.:
     *
     * const myFunction = style => header => counter => {
     *   // all params are available here: style, header, counter
     * }
     *
     * Related rules: arrow-body-style
     */
    "arrow-parens": [0],

    /**
     *
     */
    "arrow-spacing": [2, { "before": true, "after": true }],

    /**
     *
     */
    "no-this-before-super": 2,
  }

};
