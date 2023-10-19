import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: "dotenv/config",
    coverage: {
      all: true,
      exclude: ["src/index.ts"],
    },
  },
});
