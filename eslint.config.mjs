import js from "@eslint/js";
import ts from "typescript-eslint";
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import node from "eslint-plugin-n";
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
  comments.recommended,
  node.configs["flat/recommended-module"],
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
    rules: {
      "n/no-unpublished-import": [
        "error",
        {
          allowModules: [
            "vitest",
            "@eslint/js",
            "typescript-eslint",
            "@eslint-community/eslint-plugin-eslint-comments",
            "eslint-plugin-n",
            "eslint-plugin-unicorn",
            "eslint-plugin-vitest",
          ],
        },
      ],
    },
  },
  {
    ignores: ["dist", "coverage"],
  },
);
