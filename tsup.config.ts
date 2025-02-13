import { defineConfig } from "tsup";
import alias from "esbuild-plugin-alias";
import path from "path";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm", "cjs"],
  dts: {
    resolve: true,
    entry: "index.ts",
  },
  outExtension({ format }) {
    return {
      js: format === "esm" ? ".esm.js" : ".cjs",
      dts: ".d.ts",
    };
  },
  tsconfig: "./tsconfig.app.json",
  esbuildPlugins: [
    alias({
      "@components": path.resolve(__dirname, "./src/components"),
    }),
  ],
});
