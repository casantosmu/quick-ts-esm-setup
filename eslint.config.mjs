import js from "@eslint/js";
import ts from "typescript-eslint";
import vitest from "eslint-plugin-vitest";

export default ts.config(
  js.configs.recommended,
  // Consider substituting for: "strictTypeChecked"
  ...ts.configs.recommendedTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // Consider adding "unicorn.configs["flat/recommended"]"
  {
    files: ["**/*.{test,spec}.{ts,js,cjs,mjs}"],
    plugins: { vitest },
    rules: vitest.configs.recommended.rules,
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    ...ts.configs.disableTypeChecked,
  },
  {
    ignores: ["dist", "coverage"],
  },
);
