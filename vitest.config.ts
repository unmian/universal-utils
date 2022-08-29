/*
 * @Author: Quarter
 * @Date: 2022-08-24 14:42:56
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 11:03:06
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
      utils: resolve(__dirname, "./src"),
    },
  },
});
