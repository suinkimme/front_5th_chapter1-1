import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests",
    exclude: ["**/e2e/**", "**/*.e2e.spec", "**/node_modules/**"],
  },
  base: process.env.NODE_ENV === "production" ? "/front_5th_chapter1-1/" : "/",
});
