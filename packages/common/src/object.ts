/*
 * @Author: Quarter
 * @Date: 2022-08-23 17:18:54
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-23 17:22:50
 * @FilePath: /universal-utils/src/object.ts
 * @Description: 对象工具函数
 */

/**
 * @description: 包含属性
 * @param {object} obj 对象
 * @param {string|number|Array<string|number>} properties 属性列表
 * @return {object}
 */
export const includeProperties = (
  obj: object,
  properties: string | number | Array<string | number> = [],
): object => {
  const temp = {};
  if (Array.isArray(properties)) {
    properties.forEach((property) => {
      if (Reflect.has(obj, property)) {
        Reflect.set(temp, property, obj[property]);
      }
    });
  } else {
    Reflect.set(temp, properties, obj[properties]);
  }
  return temp;
};

/**
 * @description: 排除属性
 * @param {object} obj 对象
 * @param {string|number|Array<string|number>} properties 属性列表
 * @return {object}
 */
export const excludeProperties = (
  obj: object,
  properties: string | number | Array<string | number> = [],
): object => {
  const temp = { ...obj };
  if (Array.isArray(properties)) {
    properties.forEach((property) => {
      if (Reflect.has(temp, property)) {
        delete temp[property];
      }
    });
  } else {
    delete temp[properties];
  }
  return temp;
};
