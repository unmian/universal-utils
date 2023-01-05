/*
 * @Author: Quarter
 * @Date: 2022-10-13 14:46:38
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-05 14:47:51
 * @FilePath: /universal-utils/tests/coding.test.ts
 * @Description:
 */

import UTILS from "common";
import { describe, expect, test } from "vitest";

describe("func UUID", () => {
  test("generate uuid correct", () => {
    const uuid = UTILS.Coding.UUID();
    const rule = /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/;
    expect(rule.test(uuid)).toBe(true);
  });
});
