/*
 * @Author: Quarter
 * @Date: 2022-08-24 14:42:56
 * @LastEditors: Quarter
 * @LastEditTime: 2022-09-19 14:21:48
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
      browser: resolve(__dirname, "./packages/browser/src"),
      common: resolve(__dirname, "./packages/common/src"),
      node: resolve(__dirname, "./packages/node/src"),
    },
  },
});
