import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";

import { DIRNAME, IGNORES_LIST } from "../constants.js";

export default [
  {
    languageOptions: {
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: DIRNAME,
        sourceType: "module",
      },
      parser: typescriptEslintParser,
      globals: {
        node: true,
      },
    },
    plugins: { "@typescript-eslint/eslint-plugin": typescriptEslintPlugin },
    ignores: IGNORES_LIST,
    rules: {
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off",
    },
  },
];
