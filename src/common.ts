/*
 * @Author: Quarter
 * @Date: 2022-08-23 15:52:26
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-25 11:30:56
 * @FilePath: /universal-utils/src/common.ts
 * @Description: 通用
 */

/**
 * @description: 是否为空
 * @param {any} param 参数
 * @return {boolean}
 */
export const isNull = (param: any): boolean => param === null;

/**
 * @description: 是否为 undefined
 * @param {any} param 参数
 * @return {boolean}
 */
export const isUndefined = (param: any): boolean => param === undefined;

/**
 * @description: 是否存在
 * @param {any} param 参数
 * @return {boolean}
 */
export const isExist = (param: any): boolean => param !== null && param !== undefined;

/**
 * @description: 是否为空
 * @param {any} param 参数
 * @return {boolean}
 */
export const isEmpty = (param: any): boolean =>
  param === null || param === undefined || param === "";
