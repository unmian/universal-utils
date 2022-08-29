/*
 * @Author: Quarter
 * @Date: 2022-08-23 15:08:14
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 09:43:25
 * @FilePath: /universal-utils/tests/number.test.ts
 * @Description: 数字单元测试
 */

import UTILS from "utils";
import { describe, expect, test } from "vitest";

describe("func toFixed", () => {
  test("less than length", () => {
    expect(UTILS.Number.toFixed(50, 2)).toBe(50);
    expect(UTILS.Number.toFixed(0.1, 2)).toBe(0.1);
  });

  test("more than length", () => {
    expect(UTILS.Number.toFixed(50.12138, 2)).toBe(50.12);
    expect(UTILS.Number.toFixed(0.12138, 2)).toBe(0.12);
    expect(UTILS.Number.toFixed(0.12538, 2)).toBe(0.13);
  });
});

describe("func toFilled", () => {
  test("less than length, number param", () => {
    expect(UTILS.Number.toFilled(0, 2)).toBe("00");
    expect(UTILS.Number.toFilled(8, 2)).toBe("08");
    expect(UTILS.Number.toFilled(12, 2)).toBe("12");
  });

  test("less than length, string param", () => {
    expect(UTILS.Number.toFilled("0", 2)).toBe("00");
    expect(UTILS.Number.toFilled("f", 2)).toBe("0f");
    expect(UTILS.Number.toFilled("0f", 2)).toBe("0f");
  });

  test("more than length, number param", () => {
    expect(UTILS.Number.toFilled(128, 2)).toBe("128");
    expect(UTILS.Number.toFilled(1024, 2)).toBe("1024");
  });

  test("more than length, string param", () => {
    expect(UTILS.Number.toFilled("128", 2)).toBe("128");
    expect(UTILS.Number.toFilled("0afc", 2)).toBe("0afc");
  });
});
