# eslint-config-salak

Opinionated style rules for ESLint.

## How to use

Prerequisites: You are expected to have [ESLint](eslint.org) installed, and means to run it.

Install `eslint-config-salak`.

```sh
npm install --save-dev <path to eslint-config-salak> babel-eslint eslint-plugin-react
```

Create `.eslintrc` file in your project root, and add the following code in it:

```json
{
  "extends": "salak"
}
```

There's additional configs in salak that you can use:

* `es` - es6 and es7 specific rules
* `general` - general rules
* `error` - error rules
* `node` - node specific rules
* `browser` - browser specific rules
* `json` - json specific rules
* `react` - react specific rules

Salak automatically uses `es`, `error` and `general`.

If you want to use any of the other rules, you can define so in `.eslintrc`:

```json
{
  "extends": [
      "salak/es",
      "salak/react"
    ]
}
```

## What is
