/*
 * @Author: Quarter
 * @Date: 2022-08-29 10:54:22
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 17:23:45
 * @FilePath: /universal-utils/packages/node/src/index.ts
 * @Description: 浏览器端 API 入口
 */

import {
  Coding,
  Color,
  Common,
  Date,
  FormData,
  Number,
  Object,
  Word,
} from "@unmian/universal-utils-common";

const NUTILS = {
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

export default NUTILS;
export { Coding, Color, Common, Date, FormData, Number, Object, Word };
