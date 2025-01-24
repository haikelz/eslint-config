import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

import { DIRNAME, IGNORES_LIST } from "../constants.js";

export default tseslint.config({
  name: "haikel/next",
  files: ["**/*.ts", "**/*.js", "**/*.tsx", "**/*.jsx"],
  rules: {
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-expressions": "off",
  },
  ignores: IGNORES_LIST,
  languageOptions: {
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      tsconfigRootDir: DIRNAME,
    },
  },
  plugins: {
    "jsx-a11y": jsxA11y,
  },
});
