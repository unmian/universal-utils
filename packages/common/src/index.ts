/*
 * @Author: Quarter
 * @Date: 2022-08-23 09:49:40
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-13 14:48:59
 * @FilePath: /universal-utils/packages/common/src/index.ts
 * @Description: 入口文件
 */

import * as Coding from "./coding";
import * as Color from "./color";
import * as Common from "./common";
import * as Date from "./date";
import * as FormData from "./form-data";
import * as Number from "./number";
import * as Object from "./object";
import * as Storage from "./storage";
import * as Word from "./word";

const UTILS = {
  Coding,
  Color,
  Common,
  Date,
  Number,
  FormData,
  Object,
  Storage,
  Word,
  ...Common,
};

export default UTILS;
export { Coding, Color, Common, Date, FormData, Number, Object, Storage, Word };
