module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:flowtype/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    sourceType: "module"
  },
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-console": "off",
    "no-trailing-spaces": [
      "error"
    ],
    "no-unused-vars": [
      "error",
      { "args": "none" }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "flowtype/no-weak-types": [
      2,
      {
        "any": false,
        "Object": true,
        "Function": true
      }
    ],
    "flowtype/require-parameter-type": [
      2,
      {
        "excludeArrowFunctions": true
      }
    ],
    "flowtype/require-variable-type": [
      2,
      {
          "excludeVariableMatch": "^[A-Z]"
      }
    ],
    "flowtype/require-valid-file-annotation": [
      2,
      "always",
      {
        "annotationStyle": "block"
      }
    ]
  }
};
