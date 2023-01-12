/*
 * @Author: Quarter
 * @Date: 2022-08-23 17:18:54
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-12 11:33:00
 * @FilePath: /universal-utils/packages/common/src/object.ts
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

/**
 * @description: 对象深拷贝
 * @param {T} obj 对象
 * @return {T}
 */
export const copy = <T>(obj: T): T => {
  // 判断是否为对象
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (obj === null) {
    return null as unknown as typeof obj;
  } else if (Array.isArray(obj)) {
    // 实现array数据的深拷贝
    return [...obj].map((item) => copy(item)) as unknown as typeof obj;
  } else if (obj instanceof Set) {
    // 实现set数据的深拷贝
    return new Set([...obj]) as unknown as typeof obj;
  } else if (obj instanceof Map) {
    // 实现map数据的深拷贝
    return new Map([...obj]) as unknown as typeof obj;
  }
  const result = {} as unknown as typeof obj;
  Object.keys(obj).forEach((key) => {
    const value = Reflect.get(obj, key);
    Reflect.set(result, key, copy(value));
  });
  return result;
};
