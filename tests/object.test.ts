/*
 * @Author: Quarter
 * @Date: 2022-08-23 17:33:16
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-12 11:33:50
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
    expect(UTILS.Object.includeProperties({ 1: "123", 2: "234", 3: "345" }, [2, 3])).toMatchObject({
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
    expect(UTILS.Object.excludeProperties({ 1: "123", 2: "234", 3: "345" }, [2, 3])).toMatchObject({
      1: "123",
    });
  });
});

describe("func copy", () => {
  test("test number/boolean/string", () => {
    expect(UTILS.Object.copy(1)).toBe(1);
    expect(UTILS.Object.copy(true)).toBe(true);
    expect(UTILS.Object.copy("string")).toBe("string");
  });
  
  test("test simple object", () => {
    const source = {
      a: 1,
      b: true,
      c: "string",
    };
    const sourceStr = JSON.stringify(source);
    const target = UTILS.Object.copy(source);
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.a = 2;
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.b = false;
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.c = "not a string";
    expect(JSON.stringify(target)).toBe(sourceStr);
  });

  test("test complex object", () => {
    const source = {
      a: 1,
      b: true,
      c: "string",
      d: { a: 1, b: true, c: "string", d: { a: 1, b: true, c: "string" }, e: [1, true, "string"] },
      e: [1, true, "string", { a: 1, b: true, c: "string" }, [1, true, "string"]],
    };
    const sourceStr = JSON.stringify(source);
    const target = UTILS.Object.copy(source);
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.a = 2;
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.b = false;
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.c = "not a string";
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.d.a = 2;
    source.d.b = false;
    source.d.c = "not a string";
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.d.d.a = 2;
    source.d.d.b = false;
    source.d.d.c = "not a string";
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.d.d = { a: 1, b: true, c: "string" };
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.d.e[0] = 2;
    source.d.e[1] = false;
    source.d.e[2] = "not a string";
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.d.e = [1, true, "string"];
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.e[0] = 2;
    source.e[1] = false;
    source.e[2] = "not a string";
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.e[3] = { a: 1, b: true, c: "string" };
    expect(JSON.stringify(target)).toBe(sourceStr);
    source.e[4] = [1, true, "string"];
    expect(JSON.stringify(target)).toBe(sourceStr);
  });
});
