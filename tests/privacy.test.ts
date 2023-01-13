/*
 * @Author: Quarter
 * @Date: 2023-01-13 17:00:29
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-13 17:05:47
 * @FilePath: /universal-utils/tests/privacy.test.ts
 * @Description: 隐私相关单元测试
 */
import UTILS from "common";
import { describe, expect, test } from "vitest";

describe("func phone", () => {
  test("mobile phone number", () => {
    expect(UTILS.Privacy.phone("13911112222")).toBe("139****2222");
  });

  test("landline phone number", () => {
    expect(UTILS.Privacy.phone("025-84288888")).toBe("025-84****88");
  });

  test("not a phone number", () => {
    expect(UTILS.Privacy.phone("1391111222")).toBe("1391111222");
    expect(UTILS.Privacy.phone("139111122222")).toBe("139111122222");
    expect(UTILS.Privacy.phone("02-584288888")).toBe("02-584288888");
    expect(UTILS.Privacy.phone("025-8428888")).toBe("025-8428888");
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
