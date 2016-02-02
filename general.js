module.exports = {

  "ecmaFeatures": {
  },
  "env": {
  },
  "extends": [
    "eslint:recommended",
  ],
  "plugins": [
  ],
  "rules": {
    // general rules
    "arrow-body-style": [0, "always"],
    "arrow-parens": [0, "always"],
    "arrow-spacing": [2, { "before": true, "after": true }],
    "eqeqeq": [2, "smart"],
    "no-const-assign": 2,
    "no-delete-var": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-unexpected-multiline": 2,
    "no-unused-vars": [1, {"vars": "all", "args": "none"}],
    "valid-jsdoc": 2,
  }

};
