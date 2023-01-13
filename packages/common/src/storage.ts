/*
 * @Author: Quarter
 * @Date: 2023-01-13 13:48:26
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-13 14:57:35
 * @FilePath: /universal-utils/packages/common/src/storage.ts
 * @Description: 存储
 */

import { UUID } from "./coding";

// 数据仓库
const DATA_DEPOSITORY = new Map<string, any>();
// 键名正则
const KEY_REGEXP = /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/;

/**
 * @description: 新增数据
 * @param {any} value 数据
 * @return {string}
 */
export const add = (value: any): string => {
  const key = UUID();
  DATA_DEPOSITORY.set(key, value);
  return key;
};

/**
 * @description: 更新数据
 * @param {string} key 键名
 * @param {any} value 数据
 * @return
 */
export const update = (key: string, value: any): void => {
  if (typeof key !== "string") {
    throw new Error("key should be a string");
  }
  if (!KEY_REGEXP.test(key)) {
    throw new Error("key is not validated");
  }
  DATA_DEPOSITORY.set(key, value);
};

/**
 * @description: 获取指定数据
 * @param {string} key 键名
 * @return {any}
 */
export const get = (key: string): any => {
  if (typeof key !== "string") {
    throw new Error("key should be a string");
  }
  if (!KEY_REGEXP.test(key)) {
    throw new Error("key is not validated");
  }
  return DATA_DEPOSITORY.get(key);
};

/**
 * @description: 移除指定数据
 * @param {string} key 键名
 * @return
 */
export const remove = (key: string): void => {
  if (typeof key !== "string") {
    throw new Error("key should be a string");
  }
  if (!KEY_REGEXP.test(key)) {
    throw new Error("key is not validated");
  }
  DATA_DEPOSITORY.delete(key);
};

/**
 * @description: 清空数据
 * @return
 */
export const clear = (): void => {
  DATA_DEPOSITORY.clear();
};
