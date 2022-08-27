/*
 * @Author: Quarter
 * @Date: 2022-08-27 11:52:41
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-27 12:00:24
 * @FilePath: /universal-utils/tests/word.test.ts
 * @Description: 单词工具函数测试
 */

import UTILS from "utils";
import { describe, expect, test } from "vitest";

describe("func toCamelCase", () => {
  test("right result", () => {
    expect(UTILS.Word.toCamelCase("test-word")).toBe("testWord");
    expect(UTILS.Word.toCamelCase("test-word_again")).toBe("testWord_again");
  });

  test("custom seporator", () => {
    expect(UTILS.Word.toCamelCase("test_word", { separator: "_" })).toBe("testWord");
    expect(UTILS.Word.toCamelCase("test-word_again", { separator: "_" })).toBe("test-wordAgain");
  });

  test("complete mode", () => {
    expect(UTILS.Word.toCamelCase("test-word", { complete: true })).toBe("TestWord");
  });
});

describe("func toSeparatorCase", () => {
  test("right result", () => {
    expect(UTILS.Word.toSeparatorCase("testWord")).toBe("test_word");
    expect(UTILS.Word.toSeparatorCase("TestWord")).toBe("test_word");
  });

  test("custom seporator", () => {
    expect(UTILS.Word.toSeparatorCase("testWord", { separator: "-" })).toBe("test-word");
    expect(UTILS.Word.toSeparatorCase("TestWord", { separator: "-" })).toBe("test-word");
  });
});
