/*
 * @Author: Quarter
 * @Date: 2022-08-24 14:26:01
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 18:43:41
 * @FilePath: /universal-utils/packages/common/src/form-data.ts
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
      if (value instanceof File || value instanceof Blob) {
        formData.append(key, JSON.stringify(data[key]));
      } else if (Array.isArray(value)) {
        value.forEach((item) => {
          if (Object.prototype.toString.call(item) === "[object Object]") {
            formData.append(`${key}[]`, JSON.stringify(item));
          } else {
            formData.append(`${key}[]`, item);
          }
        });
      } else if (Object.prototype.toString.call(value) === "[object Object]") {
        formData.append(key, JSON.stringify(data[key]));
      } else {
        formData.append(key, data[key]);
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
