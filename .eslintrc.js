module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "no-console": "off",
    camelcase: "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        doubleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: "avoid",
      },
    ],
  },
};
