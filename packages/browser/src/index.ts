/*
 * @Author: Quarter
 * @Date: 2022-08-29 10:54:22
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-13 14:51:35
 * @FilePath: /universal-utils/packages/browser/src/index.ts
 * @Description: 浏览器端 API 入口
 */

import * as BrowserCoding from "./coding";
import {
  Coding as CommonCoding,
  Color,
  Common,
  Date,
  FormData,
  Number,
  Object,
  Storage,
  Word,
} from "@unmian/universal-utils-common";

const Coding = {
  ...CommonCoding,
  ...BrowserCoding,
};

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
export { Coding, Color, Common, Date, FormData, Number, Object, Storage, Word };
