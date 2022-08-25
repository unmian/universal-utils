/*
 * @Author: Quarter
 * @Date: 2022-08-23 11:21:17
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-23 17:26:09
 * @FilePath: /universal-utils/tests/color.test.ts
 * @Description: 颜色测试
 */

import UTILS from "utils";
import { describe, expect, test } from "vitest";

describe("func hex2rgb", () => {
  test("wrong param", () => {
    expect(() => UTILS.Color.hex2rgb("000000")).toThrow();
    expect(() => UTILS.Color.hex2rgb("#00000")).toThrow();
    expect(() => UTILS.Color.hex2rgb("#0000000")).toThrow();
  });

  test("rgb test", () => {
    expect(UTILS.Color.hex2rgb("#000000")).toBe("rgb(0,0,0)");
    expect(UTILS.Color.hex2rgb("#ffffff")).toBe("rgb(255,255,255)");
  });

  test("rgba test", () => {
    expect(UTILS.Color.hex2rgb("#00000000")).toBe("rgba(0,0,0,0)");
    expect(UTILS.Color.hex2rgb("#ffffffff")).toBe("rgba(255,255,255,1)");
  });
});

describe("func rgb2hex", () => {
  test("wrong param", () => {
    expect(() => UTILS.Color.rgb2hex("#00000")).toThrow();
    expect(() => UTILS.Color.rgb2hex("rgb(0,0,0,)")).toThrow();
    expect(() => UTILS.Color.rgb2hex("rgba(0,0,0,)")).toThrow();
  });

  test("rgb test", () => {
    expect(UTILS.Color.rgb2hex("rgb(0,0,0)")).toBe("#000000");
    expect(UTILS.Color.rgb2hex("rgb(255,255,255)")).toBe("#ffffff");
  });

  test("rgba test", () => {
    expect(UTILS.Color.rgb2hex("rgba(0,0,0,0)")).toBe("#00000000");
    expect(UTILS.Color.rgb2hex("rgba(255,255,255,1)")).toBe("#ffffffff");
  });
});