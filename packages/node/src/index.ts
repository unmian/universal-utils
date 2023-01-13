/*
 * @Author: Quarter
 * @Date: 2022-08-29 10:54:22
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-13 17:13:03
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
  Privacy,
  Storage,
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
  Privacy,
  Storage,
  Word,
  ...Common,
};

export default NUTILS;
export { Coding, Color, Common, Date, FormData, Number, Object, Privacy, Storage, Word };
