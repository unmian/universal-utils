/*
 * @Author: Quarter
 * @Date: 2022-08-29 10:54:22
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 14:20:19
 * @FilePath: /universal-utils/src/index.browser.ts
 * @Description: 浏览器端 API 入口
 */

import * as Coding from "./coding";
import * as Color from "./color";
import * as Common from "./common";
import * as Date from "./date";
import * as FormData from "./form-data";
import * as Number from "./number";
import * as Object from "./object";
import * as Word from "./word";

const BUTILS = {
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

export default BUTILS;
export { Coding, Color, Common, Date, FormData, Number, Object, Word };