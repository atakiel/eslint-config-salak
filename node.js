module.exports = {

  "ecmaFeatures": {
  },
  "env": {
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "safari/es6"
  ],
  "plugins": [
  ],
  "rules": {
    /**
     * As we are in node environment, console is okay to use.
     * It's the general means for showing user information.
     */
    "no-console": 0,

    "no-const-assign": 2,
    "no-delete-var": 2,
    "no-dupe-class-members": 2,
    "no-unexpected-multiline": 2,
    "no-unused-vars": [1, {"vars": "all", "args": "none"}],
    "valid-jsdoc": 2,
  }

};
