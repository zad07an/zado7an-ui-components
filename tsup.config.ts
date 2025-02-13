import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  tsconfig: "./tsconfig.app.json", // Explicitly point to your tsconfig
});
