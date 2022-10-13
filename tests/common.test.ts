/*
 * @Author: Quarter
 * @Date: 2022-08-23 17:27:38
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 18:03:11
 * @FilePath: /universal-utils/tests/common.test.ts
 * @Description: 通用测试用例
 */

import UTILS from "common";
import { describe, expect, test } from "vitest";

describe("func isNull", () => {
  test("is null", () => {
    expect(UTILS.isNull(null)).toBe(true);
  });

  test("is not null", () => {
    expect(UTILS.isNull(undefined)).toBe(false);
    expect(UTILS.isNull(0)).toBe(false);
    expect(UTILS.isNull(false)).toBe(false);
    expect(UTILS.isNull("")).toBe(false);
  });
});

describe("func isUndefined", () => {
  test("is undefined", () => {
    expect(UTILS.isUndefined(undefined)).toBe(true);
  });

  test("is not undefined", () => {
    expect(UTILS.isUndefined(null)).toBe(false);
    expect(UTILS.isUndefined(0)).toBe(false);
    expect(UTILS.isUndefined(false)).toBe(false);
    expect(UTILS.isUndefined("")).toBe(false);
  });
});

describe("func isExist", () => {
  test("is exist", () => {
    expect(UTILS.isExist(false)).toBe(true);
    expect(UTILS.isExist("")).toBe(true);
    expect(UTILS.isExist(0)).toBe(true);
  });

  test("is not exist", () => {
    expect(UTILS.isExist(null)).toBe(false);
    expect(UTILS.isExist(undefined)).toBe(false);
  });
});

describe("func isEmpty", () => {
  test("is empty", () => {
    expect(UTILS.isEmpty(null)).toBe(true);
    expect(UTILS.isEmpty(undefined)).toBe(true);
    expect(UTILS.isEmpty("")).toBe(true);
  });

  test("is not empty", () => {
    expect(UTILS.isEmpty(false)).toBe(false);
    expect(UTILS.isEmpty(0)).toBe(false);
  });
});
