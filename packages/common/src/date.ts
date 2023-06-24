/*
 * @Author: Quarter
 * @Date: 2022-08-25 15:55:26
 * @LastEditors: Quarter
 * @LastEditTime: 2023-04-05 14:39:32
 * @FilePath: /universal-utils/packages/common/src/date.ts
 * @Description: 日期工具函数
 */

import { isExist } from "./common";
import { toFilled } from "./number";

/**
 * @description: 日期格式化
 * @param {Date|string|number} date 日期
 * @param {string} formator 格式化标准字符串
 * @return {string}
 */
export const formate = (date: Date | string | number, formator = "yyyy-MM-dd hh:mm:ss"): string => {
  const d = date instanceof Date ? date : new Date(date);
  const o = {
    "y+": d.getFullYear(), // 年份
    "M+": d.getMonth() + 1, // 月份
    "d+": d.getDate(), // 日
    "h+": d.getHours(), // 小时
    "m+": d.getMinutes(), // 分
    "s+": d.getSeconds(), // 秒
    "q+": Math.floor((d.getMonth() + 3) / 3), // 季度
    "S+": d.getMilliseconds(), // 毫秒
  };
  let result = formator;
  Object.keys(o).forEach((reg) => {
    result = result.replace(new RegExp(`(${reg})`, "g"), (match) => {
      if (reg === "y+") {
        const str = toFilled(o[reg], match.length);
        return str.substring(str.length - match.length);
      }
      return toFilled(o[reg], match.length);
    });
  });

  return result;
};

/**
 * @description: 计算每月天数
 * @param {number} month 月份
 * @param {number} year 年份
 * @return {number}
 */
export const getMonthDays = (month = 1, year: number = new Date().getFullYear()): number => {
  if (!isExist(year) || !isExist(month)) {
    return 0;
  }
  if (year < 0 || month <= 0 || month > 12) {
    return 0;
  }
  const oneDay = 24 * 60 * 60 * 1000;
  let nextMonth = new Date(`${year}-${toFilled(month + 1, 2)}-01 00:00:00`);
  if (month === 12) {
    nextMonth = new Date(`${year + 1}-01-01 00:00:00`);
  }
  return new Date(nextMonth.getTime() - oneDay).getDate();
};
