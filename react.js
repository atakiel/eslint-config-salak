module.exports = {

  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "env": {
    "es6": true
  },
  "extends": [
    "safari/es6"
  ],
  "plugins": [
    "react"
  ],
  "rules": {
    // react plugin
    "react/jsx-key": 2,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 2,
    "react/no-deprecated": 2,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 2,
    "react/wrap-multilines": 1
  }

};
