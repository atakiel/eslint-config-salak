# eslint-config-salak

Opinionated style rules for ESLint.

## How to use

Prerequisites: You are expected to have [ESLint](http://eslint.org) installed, and means to run it.

Steps to use:

1. Install `eslint-config-salak`

    ```sh
    npm install --save-dev eslint-config-salak babel-eslint eslint-plugin-react
    ```

2. Create `.eslintrc` file in your project root, and add the following code in it:

    ```json
    {
      "extends": "salak"
    }
    ```

There are additional configs in salak that you can use:

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
