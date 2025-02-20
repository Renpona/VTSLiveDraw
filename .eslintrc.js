module.exports = {
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "extends": [
    "eslint:recommended",
    "@eleks/eleks",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "globals": {
    "ENV": false
  },
  "rules": {
    "quotes": [2, "single"],
    "strict": [2, "never"],
    "indent": [1, 2, {
      "SwitchCase": 1,
      "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }
    }],
    "one-var": 0,
    "no-return-assign": 0,
    "no-multi-spaces": 0,
    "react/prop-types": 0,
    // jsx
    "react/jsx-closing-bracket-location": [1, {
      "selfClosing": "after-props",
      "nonEmpty": "after-props"}
    ],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-space-before-closing": [2, "always"],

    // es6
    "arrow-body-style": [2, "as-needed"], //require braces in arrow function body
    "arrow-parens": [2, "as-needed"], //require parens in arrow function arguments
    "arrow-spacing": [2, {
        "before": true,
        "after": true
    }], // require space before/after arrow function"s arrow
    "constructor-super": 2, //verify calls of super() in constructors (recommended)
    "generator-star-spacing": [2, {
        "before": true,
        "after": true
    }], // enforce spacing around the * in generator functions
    //"no-unused-vars": 2,
    "no-class-assign": 2, //disallow modifying variables of class declarations (recommended)
    "no-confusing-arrow": 0, //disallow arrow functions where they could be confused with comparisons
    "no-const-assign": 2, //disallow modifying variables that are declared using const (recommended)
    "no-dupe-class-members": 2, //disallow duplicate name in class members (recommended)
    "no-new-symbol": 2, //disallow use of the new operator with the Symbol object (recommended)
    "no-this-before-super": 2, //disallow use of this/super before calling super() in constructors (recommended)
    "no-var": 0, //require let or const instead of var
    //"no-useless-constructor": 1, //disallow unnecessary constructor
    "object-shorthand": [2, "always"], // require method and property shorthand syntax for object literals
    "prefer-arrow-callback": 1, //suggest using arrow functions as callbacks
    "prefer-const": 1, //suggest using const declaration for variables that are never modified after declared
    "prefer-reflect": 0, //suggest using Reflect methods where applicable
    "prefer-rest-params": 0, //suggest using the rest parameters instead of arguments
    "prefer-spread": 1, //suggest using the spread operator instead of .apply().
    "prefer-template": 1, //suggest using template literals instead of strings concatenation
    "require-yield": 2, //disallow generator functions that do not have yield
    "yield-star-spacing": [2, {"before": true, "after": true}], //enforce spacing around the * in yield* expressions (fixable)


    "curly": [2, "multi-or-nest"],
    "no-magic-numbers": [1, { "ignore": [0] }],
    "no-useless-constructor": 0,
    // "no-unused-vars": 0,
    "no-case-declarations": 0,
    "no-debugger": 1,
    "no-alert": 1
  },
  "plugins": [
    "react"
  ]
};
