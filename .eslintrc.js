module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/standard",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: [1, "double", { avoidEscape: true }],
    semi: [1, "always", { omitLastInOneLineBlock: true }],
    "comma-dangle": [1, "always-multiline"],
    "space-before-function-paren": [1, { anonymous: "never", named: "never", asyncArrow: "always" }],
    "vue/html-indent": [1, 2, { attribute: 1, baseIndent: 1, closeBracket: 0, alignAttributesVertically: false, ignores: [] }],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
