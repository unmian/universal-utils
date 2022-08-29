/*
 * @Author: Quarter
 * @Date: 2022-08-23 17:33:16
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 18:03:20
 * @FilePath: /universal-utils/tests/object.test.ts
 * @Description: 对象工具测试用例
 */

import UTILS from "common";
import { describe, expect, test } from "vitest";

describe("func includeProperties", () => {
  test("include properties", () => {
    expect(UTILS.Object.includeProperties({ a: "123", b: "234", c: "345" }, "a")).toMatchObject({
      a: "123",
    });
    expect(
      UTILS.Object.includeProperties({ a: "123", b: "234", c: "345" }, ["b", "c"]),
    ).toMatchObject({
      b: "234",
      c: "345",
    });
    expect(UTILS.Object.includeProperties({ 1: "123", 2: "234", 3: "345" }, 1)).toMatchObject({
      1: "123",
    });
    expect(
      UTILS.Object.includeProperties({ 1: "123", 2: "234", 3: "345" }, [2, 3]),
    ).toMatchObject({
      2: "234",
      3: "345",
    });
  });
});

describe("func excludeProperties", () => {
  test("exclude properties", () => {
    expect(UTILS.Object.excludeProperties({ a: "123", b: "234", c: "345" }, "a")).toMatchObject({
      b: "234",
      c: "345",
    });
    expect(
      UTILS.Object.excludeProperties({ a: "123", b: "234", c: "345" }, ["b", "c"]),
    ).toMatchObject({
      a: "123",
    });
    expect(UTILS.Object.excludeProperties({ 1: "123", 2: "234", 3: "345" }, 1)).toMatchObject({
      2: "234",
      3: "345",
    });
    expect(
      UTILS.Object.excludeProperties({ 1: "123", 2: "234", 3: "345" }, [2, 3]),
    ).toMatchObject({
      1: "123",
    });
  });
});
