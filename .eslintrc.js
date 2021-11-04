module.exports = {
  env: {
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "prettier/prettier": "error",
  },
};
