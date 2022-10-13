/*
 * @Author: Quarter
 * @Date: 2022-08-25 16:29:03
 * @LastEditors: Quarter
 * @LastEditTime: 2022-09-19 14:32:29
 * @FilePath: /universal-utils/tests/date.test.ts
 * @Description: 日期工具函数测试
 */

import UTILS from "common";
import { describe, expect, test } from "vitest";

describe("func formate", () => {
  test("without formate parameter", () => {
    expect(UTILS.Date.formate(new Date(1661416337739))).toBe("2022-08-25 16:32:17");
  });

  test("with formate parameter", () => {
    expect(UTILS.Date.formate(new Date(1661416337739), "yy")).toBe("22");
    expect(UTILS.Date.formate(new Date(1661416337739), "yyyy")).toBe("2022");
    expect(UTILS.Date.formate(new Date(1661416337739), "M")).toBe("8");
    expect(UTILS.Date.formate(new Date(1661416337739), "MM")).toBe("08");
    expect(UTILS.Date.formate(new Date(1661416337739), "d")).toBe("25");
    expect(UTILS.Date.formate(new Date(1661416337739), "dd")).toBe("25");
    expect(UTILS.Date.formate(new Date(1661416337739), "h")).toBe("16");
    expect(UTILS.Date.formate(new Date(1661416337739), "hh")).toBe("16");
    expect(UTILS.Date.formate(new Date(1661416337739), "m")).toBe("32");
    expect(UTILS.Date.formate(new Date(1661416337739), "mm")).toBe("32");
    expect(UTILS.Date.formate(new Date(1661416337739), "s")).toBe("17");
    expect(UTILS.Date.formate(new Date(1661416337739), "ss")).toBe("17");
    expect(UTILS.Date.formate(new Date(1661416337739), "S")).toBe("739");
    expect(UTILS.Date.formate(new Date(1661416337739), "SS")).toBe("739");
    expect(UTILS.Date.formate(new Date(1661416337739), "SSS")).toBe("739");
    expect(UTILS.Date.formate(new Date(1661416337739), "yy/M/d hh:mm:ss")).toBe("22/8/25 16:32:17");
  });
});

describe("func getMonthDays", () => {
  test("invalid parameter", () => {
    expect(UTILS.Date.getMonthDays(1, -1)).toBe(0);
    expect(UTILS.Date.getMonthDays(0, 2023)).toBe(0);
    expect(UTILS.Date.getMonthDays(13, 2023)).toBe(0);
  });

  test("valid parameter", () => {
    expect(UTILS.Date.getMonthDays(1, 2023)).toBe(31);
    expect(UTILS.Date.getMonthDays(2, 2023)).toBe(28);
    expect(UTILS.Date.getMonthDays(3, 2023)).toBe(31);
    expect(UTILS.Date.getMonthDays(4, 2023)).toBe(30);
    expect(UTILS.Date.getMonthDays(5, 2023)).toBe(31);
    expect(UTILS.Date.getMonthDays(6, 2023)).toBe(30);
    expect(UTILS.Date.getMonthDays(7, 2023)).toBe(31);
    expect(UTILS.Date.getMonthDays(8, 2023)).toBe(31);
    expect(UTILS.Date.getMonthDays(9, 2023)).toBe(30);
    expect(UTILS.Date.getMonthDays(10, 2023)).toBe(31);
    expect(UTILS.Date.getMonthDays(11, 2023)).toBe(30);
    expect(UTILS.Date.getMonthDays(12, 2023)).toBe(31);
  });
});
