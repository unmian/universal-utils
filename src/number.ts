/*
 * @Author: Quarter
 * @Date: 2022-08-23 11:31:18
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-23 15:06:33
 * @FilePath: /universal-utils/src/number.ts
 * @Description: 数组处理
 */

/**
 * @description: 保留小数位数
 * @param {number} num 数字
 * @param {number} length 长度
 * @return {number}
 */
export const toFixed = (num: number, length = 2): number => {
  if (length > 10) {
    throw new Error("length is too large");
  }
  const scale = Math.pow(10, length);
  const temp = Math.round(num * scale);
  return temp / scale;
};

/**
 * @description: 字符填充
 * @param {number|string} num 数字
 * @return {string}
 */
export const toFilled = (num: number | string, length = 2, fill = "0"): string => {
  const numStr = typeof num === "string" ? num : num.toString();
  if (numStr.length >= 2) {
    return numStr;
  }
  return `${new Array(length - numStr.length).fill(fill).join("")}${numStr}`;
};
