/*
 * @Author: Quarter
 * @Date: 2023-01-13 16:45:31
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-13 17:10:14
 * @FilePath: /universal-utils/packages/common/src/privacy.ts
 * @Description: 隐私相关
 */

/**
 * @description: 电话号码隐私处理
 * @param {string} str 电话号码
 * @param {string} placeholder 替换的字符
 * @return {string}
 */
export const phone = (
  str: string | null | undefined,
  placeholder = "*",
): string | null | undefined => {
  if (typeof str === "string") {
    const filterPlaceholder =
      typeof placeholder === "string" && placeholder.length > 0 ? placeholder[0] : "*";
    const replaceStr = new Array(4).fill(filterPlaceholder).join("");
    if (/^[0-9]{11}$/.test(str)) {
      return `${str.substring(0, 3)}${replaceStr}${str.substring(7)}`;
    } else if (/^[0-9]{3,4}-[0-9]{8}$/.test(str)) {
      const strList = str.split("-");
      return [
        strList[0],
        `${strList[1].substring(0, 2)}${replaceStr}${strList[1].substring(6)}`,
      ].join("-");
    }
  }
  return str;
};
