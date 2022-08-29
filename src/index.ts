/*
 * @Author: Quarter
 * @Date: 2022-08-23 09:49:40
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 11:01:38
 * @FilePath: /universal-utils/src/index.ts
 * @Description: 入口文件
 */

import * as Coding from "./common/coding";
import * as Color from "./common/color";
import * as Common from "./common/common";
import * as Date from "./common/date";
import * as FormData from "./common/form-data";
import * as Number from "./common/number";
import * as Object from "./common/object";
import * as Word from "./common/word";

const UTILS = {
  Coding,
  Color,
  Common,
  Date,
  Number,
  FormData,
  Object,
  Word,
  ...Common,
};

export default UTILS;
export { Coding, Color, Common, Date, FormData, Number, Object, Word };
