import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm", "cjs"], // Output both ESM and CJS formats
  dts: true, // Generate type declaration files
  tsconfig: "./tsconfig.app.json", // Explicitly point to your tsconfig if needed
});
