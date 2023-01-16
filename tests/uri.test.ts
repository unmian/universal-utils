/*
 * @Author: Quarter
 * @Date: 2023-01-13 17:00:29
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-16 16:26:41
 * @FilePath: /universal-utils/tests/uri.test.ts
 * @Description: uri 相关单元测试
 */

import { URI } from "common";
import { describe, expect, test } from "vitest";

describe("func parse", () => {
  test("parse single type url", () => {
    expect(URI.parse("www.baidu.com")).toMatchObject({
      hash: null, // hash 内容
      hostname: "www.baidu.com", // 主机名
      isSSL: false, // 是否是 SSL 协议
      isDefaultPort: true, // 是否是默认端口
      uri: "http://www.baidu.com", // 完整地址
      pathname: "/", // 路径地址
      port: 80, // 端口
      protocol: "http:", // 协议
      query: {}, // uri 参数
    });
    expect(URI.parse("https://www.baidu.com")).toMatchObject({
      hash: null, // hash 内容
      hostname: "www.baidu.com", // 主机名
      isSSL: true, // 是否是 SSL 协议
      isDefaultPort: true, // 是否是默认端口
      uri: "https://www.baidu.com", // 完整地址
      pathname: "/", // 路径地址
      port: 443, // 端口
      protocol: "https:", // 协议
      query: {}, // uri 参数
    });
    expect(URI.parse("http://www.baidu.com:8080")).toMatchObject({
      hash: null, // hash 内容
      hostname: "www.baidu.com", // 主机名
      isSSL: false, // 是否是 SSL 协议
      isDefaultPort: false, // 是否是默认端口
      uri: "http://www.baidu.com:8080", // 完整地址
      pathname: "/", // 路径地址
      port: 8080, // 端口
      protocol: "http:", // 协议
      query: {}, // uri 参数
    });
    expect(URI.parse("/test")).toMatchObject({
      hash: null, // hash 内容
      hostname: null, // 主机名
      isSSL: false, // 是否是 SSL 协议
      isDefaultPort: true, // 是否是默认端口
      uri: "/test", // 完整地址
      pathname: "/test", // 路径地址
      port: 80, // 端口
      protocol: "http:", // 协议
      query: {}, // uri 参数
    });
    expect(URI.parse("#test")).toMatchObject({
      hash: "test", // hash 内容
      hostname: null, // 主机名
      isSSL: false, // 是否是 SSL 协议
      isDefaultPort: true, // 是否是默认端口
      uri: "/#test", // 完整地址
      pathname: "/", // 路径地址
      port: 80, // 端口
      protocol: "http:", // 协议
      query: {}, // uri 参数
    });
    expect(URI.parse("?name=test")).toMatchObject({
      hash: null, // hash 内容
      hostname: null, // 主机名
      isSSL: false, // 是否是 SSL 协议
      isDefaultPort: true, // 是否是默认端口
      uri: "/?name=test", // 完整地址
      pathname: "/", // 路径地址
      port: 80, // 端口
      protocol: "http:", // 协议
      query: {
        // uri 参数
        name: "test",
      },
    });
  });

  test("parse complex url", () => {
    expect(
      URI.parse("https://www.baidu.com:4443/custom/path#/test/hash?test1=&test2=a"),
    ).toMatchObject({
      hash: "/test/hash", // hash 内容
      hostname: "www.baidu.com", // 主机名
      isSSL: true, // 是否是 SSL 协议
      isDefaultPort: false, // 是否是默认端口
      uri: "https://www.baidu.com:4443/custom/path#/test/hash?test1=&test2=a", // 完整地址
      pathname: "/custom/path", // 路径地址
      port: 4443, // 端口
      protocol: "https:", // 协议
      query: {
        // uri 参数
        test1: "",
        test2: "a",
      },
    });
  });
});
