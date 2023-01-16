/*
 * @Author: Quarter
 * @Date: 2023-01-16 14:47:36
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-16 16:30:51
 * @FilePath: /universal-utils/packages/common/src/uri.ts
 * @Description: uri 模块
 */

import { copy } from "./object";

// uri 结构
interface URISerialization {
  hash: string | null; // hash 内容
  hostname: string | null; // 主机名
  isSSL: boolean; // 是否是 SSL 协议
  isDefaultPort: boolean; // 是否是默认端口
  uri: string; // 完整地址
  pathname: string; // 路径地址
  port: number; // 端口
  protocol: "http:" | "https:"; // 协议
  query: { [key: string]: string }; // uri 参数
}

// 协议头验证规则
const PROTOCOL_REGEXP = /^http(s){0,1}:\/\//;
// https 验证规则
const HTTPS_REGEXP = /^https:\/\//;
// port值替换规则
const PORT_REGEXP = /:[0-9]+$/;
// path值替换规则
const PATH_REGEXP = /\/.+$/;
// hash值替换规则
const HASH_REGEXP = /#.+$/;
// uri参数替换规则
const PARAM_REGEXP = /\?.+$/;

// 初始值
const URI_SERIALIZATION: URISerialization = {
  hash: null, // hash 内容
  hostname: null, // 主机名
  isSSL: false, // 是否是 SSL 协议
  isDefaultPort: true, // 是否是默认端口
  uri: "/", // 完整地址
  pathname: "/", // 路径地址
  port: 80, // 端口
  protocol: "http:", // 协议
  query: {}, // uri 参数
};

/**
 * @description: 解析 uri 资源
 * @param {string} uri uri字符串
 * @return {URISerialization}
 */
export const parse = (uri: string): URISerialization => {
  const result = copy(URI_SERIALIZATION);
  let temp = uri;
  if (typeof temp === "string") {
    // 协议头处理
    if (HTTPS_REGEXP.test(uri)) {
      result.protocol = "https:";
      result.port = 443;
    }
    temp = temp.replace(PROTOCOL_REGEXP, "");
    // param 处理
    const questionMarkIndex = temp.indexOf("?");
    if (questionMarkIndex > -1) {
      temp
        .substring(questionMarkIndex + 1)
        .split("&")
        .forEach((str) => {
          const equalSign = str.indexOf("=");
          if (equalSign > -1) {
            Reflect.set(result.query, str.substring(0, equalSign), str.substring(equalSign + 1));
          }
        });
    }
    // hash 处理
    temp = temp.replace(PARAM_REGEXP, "");
    const hashIndex = temp.indexOf("#");
    if (hashIndex > -1) {
      result.hash = temp.substring(hashIndex + 1) || null;
    }
    // path 处理
    temp = temp.replace(HASH_REGEXP, "");
    const slashIndex = temp.indexOf("/");
    if (slashIndex > -1) {
      result.pathname = temp.substring(slashIndex);
    }
    // port 处理
    temp = temp.replace(PATH_REGEXP, "");
    const colonIndex = temp.lastIndexOf(":");
    if (colonIndex > -1) {
      try {
        result.port = parseInt(temp.substring(colonIndex + 1), 10);
      } catch (e) {
        // parse port failed
      }
    }
    // host 处理
    temp = temp.replace(PORT_REGEXP, "");
    result.hostname = temp || null;
  }
  // 判定值处理
  result.isSSL = result.protocol === "https:";
  result.isDefaultPort =
    (result.protocol === "http:" && result.port === 80) ||
    (result.protocol === "https:" && result.port === 443);
  result.uri = stringify(result);
  return result;
};

/**
 * @description: 将序列化数据转换为字符串
 * @param {URISerialization} uri 序列化数据
 * @return {string}
 */
export const stringify = (uri: URISerialization): string => {
  let str = "";
  // host 处理
  if (typeof uri.hostname === "string" && uri.hostname.length > 0) {
    if (
      (uri.protocol === "http:" && uri.port === 80) ||
      (uri.protocol === "https:" && uri.port === 443)
    ) {
      str += `${uri.protocol}//${uri.hostname}`;
    } else {
      str += `${uri.protocol}//${uri.hostname}:${uri.port}`;
    }
  }
  // path 处理
  if (uri.pathname.length > 0) {
    if (str.length === 0) {
      str += uri.pathname;
    } else if (uri.pathname !== "/") {
      str += uri.pathname;
    }
  }
  // hash 处理
  if (typeof uri.hash === "string" && uri.hash.length > 0) {
    str += `#${uri.hash}`;
  }
  // uri 参数处理
  let queryStr = "";
  for (const key in uri.query) {
    if (queryStr.length > 0) {
      queryStr += `&${key}=${Reflect.get(uri.query, key) || ""}`;
    } else {
      queryStr += `${key}=${Reflect.get(uri.query, key) || ""}`;
    }
  }
  if (queryStr.length > 0) {
    str += `?${queryStr}`;
  }
  return str;
};
