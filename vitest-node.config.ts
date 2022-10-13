/*
 * @Author: Quarter
 * @Date: 2022-08-24 14:42:56
 * @LastEditors: Quarter
 * @LastEditTime: 2022-10-13 15:43:38
 * @FilePath: /universal-utils/vitest-node.config.ts
 * @Description: vitest 配置
 */

/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "node",
    include: ["**/*.node.test.ts"],
  },
  resolve: {
    alias: {
      browser: resolve(__dirname, "./packages/browser/src"),
      common: resolve(__dirname, "./packages/common/src"),
      node: resolve(__dirname, "./packages/node/src"),
    },
  },
});
