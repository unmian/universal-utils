/*
 * @Author: Quarter
 * @Date: 2022-08-23 11:12:59
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 14:24:48
 * @FilePath: /universal-utils/config/browser.config.ts
 * @Description: vite 配置文件
 */

import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// 文档: https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "../src/browser.ts"),
      fileName: (format) => `browser.${format}.js`,
      name: "BUTILS",
    },
    minify: true,
    outDir: "lib",
  },
  plugins: [
    dts({
      outputDir: "types",
      cleanVueFileName: true,
      include: ["src/**"],
    }),
  ],
});
