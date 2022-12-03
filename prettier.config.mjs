/** @type {import("prettier").Config} */
const prettierConfig = {
  $schema: "https://json.schemastore.org/prettierrc",
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,

  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  pluginSearchDirs: false,
};

export default prettierConfig;
