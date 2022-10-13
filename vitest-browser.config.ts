/*
 * @Author: Quarter
 * @Date: 2022-08-24 14:42:56
 * @LastEditors: Quarter
 * @LastEditTime: 2022-10-13 15:41:00
 * @FilePath: /universal-utils/vitest-browser.config.ts
 * @Description: vitest 配置
 */

/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["**/*.browser.test.ts"],
  },
  resolve: {
    alias: {
      browser: resolve(__dirname, "./packages/browser/src"),
      common: resolve(__dirname, "./packages/common/src"),
      node: resolve(__dirname, "./packages/node/src"),
    },
  },
});
