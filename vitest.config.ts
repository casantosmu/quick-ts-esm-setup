import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["tests/load-env.ts"],
    coverage: {
      include: ["src"],
      exclude: [
        "src/index.ts",
        "**/*.{test,spec}.ts",
        "**/{tests,test,__tests__}/**",
      ],
    },
  },
});
