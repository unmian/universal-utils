/*
 * @Author: Quarter
 * @Date: 2023-01-13 13:48:26
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-13 15:39:56
 * @FilePath: /universal-utils/packages/common/src/storage.ts
 * @Description: 存储
 */

import { UUID } from "./coding";

// 数据仓库
const DATA_DEPOSITORY = new Map<string, any>();

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
export const update = (key = "", value: any = undefined): void => {
  if (DATA_DEPOSITORY.has(key)) {
    DATA_DEPOSITORY.set(key, value);
  }
};

/**
 * @description: 获取指定数据
 * @param {string} key 键名
 * @return {any}
 */
export const get = (key = ""): any => {
  if (DATA_DEPOSITORY.has(key)) {
    return DATA_DEPOSITORY.get(key);
  }
  return undefined;
};

/**
 * @description: 移除指定数据
 * @param {string} key 键名
 * @return
 */
export const remove = (key = ""): void => {
  if (DATA_DEPOSITORY.has(key)) {
    DATA_DEPOSITORY.delete(key);
  }
};

/**
 * @description: 清空数据
 * @return
 */
export const clear = (): void => {
  DATA_DEPOSITORY.clear();
};
