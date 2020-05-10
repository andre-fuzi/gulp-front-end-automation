module.exports = {
  "env": {
    "browser": true,
    "es2017": true,
    "node": true,
    "commonjs": true
  },
  "extends": ["eslint:recommended", "standard"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "root": true,
  "rules": {
    "linebreak-style": ["error", "unix"],
    "no-alert": "error",
    "no-console": "warn",
    "one-var-declaration-per-line": ["error", "initializations"],
    "quote-props": ["error", "consistent"],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "always",
      "asyncArrow": "always"
    }]
  }
}
