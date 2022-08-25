/*
 * @Author: Quarter
 * @Date: 2022-08-23 09:49:40
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-24 15:22:51
 * @FilePath: /universal-utils/src/index.ts
 * @Description: 入口文件
 */

import * as Coding from "./coding";
import * as Color from "./color";
import * as Common from "./common";
import * as FormData from "./form-data";
import * as Number from "./number";
import * as Object from "./object";

const UTILS = {
  Coding,
  Color,
  Common,
  Number,
  FormData,
  Object,
  ...Common,
};

export default UTILS;
export {
  Coding,
  Color,
  Common,
  FormData,
  Number,
  Object,
}
