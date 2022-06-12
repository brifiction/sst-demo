/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 30000,
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
