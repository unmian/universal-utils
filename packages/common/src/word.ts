/*
 * @Author: Quarter
 * @Date: 2022-08-27 11:32:40
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-27 12:01:00
 * @FilePath: /universal-utils/src/word.ts
 * @Description: 单词工具函数
 */

// 驼峰命名配置项
export interface CamelCaseOptions {
  separator?: string; // 连词符号
  complete?: boolean; // 是否使用大驼峰
}
// 连词命名配置项
export interface SeparatorCaseOptions {
  separator?: string; // 分隔符
}

/**
 * @description: 将字符串转化为驼峰命名
 * @param {string} str 字符串
 * @param {CamelCaseOptions} options 配置项
 * @return {string}
 */
export const toCamelCase = (str = "", options: CamelCaseOptions = {}) => {
  const { separator = "-", complete = false } = options;
  const reg = new RegExp(`([${separator}][a-z])`, "g");
  let temp = str
    .replace(reg, (p1) => p1[1].toLocaleUpperCase())
    .replace(new RegExp(separator, "g"), "");
  if (complete && temp.length > 0) {
    temp = temp[0].toLocaleUpperCase() + temp.substring(1);
  }
  return temp;
};

/**
 * @description: 从驼峰命名转换连词模式
 * @param {string} str 字符串
 * @param {DecamelizeOptions} options 配置项
 * @return {string}
 */
export const toSeparatorCase = (str = "", options: SeparatorCaseOptions = {}) => {
  const { separator = "_" } = options;
  let template = str;
  if (str.length > 0) {
    template = template[0].toLocaleLowerCase() + template.substring(1);
  }
  return template
    .replace(/[A-Z]{1}/g, (p1) => `${separator}${p1.toLocaleLowerCase()}`)
    .replace(/[0-9]+/g, (p1) => `${separator}${p1}`);
};
