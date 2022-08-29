/*
 * @Author: Quarter
 * @Date: 2022-08-23 11:12:59
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 11:23:18
 * @FilePath: /universal-utils/config/browser.config.ts
 * @Description: vite 配置文件
 */

import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// 文档: https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "../src/browser/index.ts"),
      fileName: (format) => `index.${format}.js`,
      name: "UTILS",
    },
    minify: true,
    outDir: "lib/browser",
  },
  plugins: [
    dts({
      outputDir: "types",
      cleanVueFileName: true,
      include: ["src/**"],
    }),
  ],
});
