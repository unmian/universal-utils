/*
 * @Author: Quarter
 * @Date: 2022-08-23 09:49:40
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-25 16:30:47
 * @FilePath: /universal-utils/src/index.ts
 * @Description: 入口文件
 */

import * as Coding from "./coding";
import * as Color from "./color";
import * as Common from "./common";
import * as Date from "./date";
import * as FormData from "./form-data";
import * as Number from "./number";
import * as Object from "./object";

const UTILS = {
  Coding,
  Color,
  Common,
  Date,
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
  Date,
  FormData,
  Number,
  Object,
}
