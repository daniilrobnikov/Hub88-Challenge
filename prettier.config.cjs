/** @type {import("prettier").Config} */
module.exports = {
  $schema: "https://json.schemastore.org/prettierrc",
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,

  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  pluginSearchDirs: false,
};


