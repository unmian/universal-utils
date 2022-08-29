/*
 * @Author: Quarter
 * @Date: 2022-08-24 14:42:56
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 17:58:24
 * @FilePath: /universal-utils/vitest.config.ts
 * @Description: vitest 配置
 */

/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    // environment: "jsdom",
  },
  resolve: {
    alias: {
      browser: resolve(__dirname, "./packages/browser"),
      common: resolve(__dirname, "./packages/common"),
      node: resolve(__dirname, "./packages/node"),
    },
  },
});
