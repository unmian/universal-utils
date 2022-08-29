/*
 * @Author: Quarter
 * @Date: 2022-08-24 14:26:01
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-24 14:30:20
 * @FilePath: /universal-utils/src/form-data.ts
 * @Description: 表单数据工具
 */

import { isExist } from "./common";

/**
 * @description: 解析成 FormData
 * @param {object} data 数据
 * @return {FormData}
 */
export const toFormData = (data: object): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (isExist(value)) {
      if (typeof value === "object") {
        formData.append(key, JSON.stringify(data[key]));
      } else {
        formData.append(key, String(data[key]));
      }
    }
  });
  return formData;
};

/**
 * @description: 解析成 Object
 * @param {FormData} data 数据
 * @return {object}
 */
export const toObject = (formData: FormData): object => {
  const obj = {};
  formData.forEach((value, key) => {
    Reflect.set(obj, key, value);
  });
  return obj;
};
