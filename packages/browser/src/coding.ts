/*
 * @Author: Quarter
 * @Date: 2022-08-24 11:50:59
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-29 17:24:12
 * @FilePath: /universal-utils/packages/browser/src/coding.ts
 * @Description: 编码工具
 */

import { JSEncrypt } from "jsencrypt";
import { Common } from "@unmian/universal-utils-common";

// RSA 密钥大小
type RSAKeySize = "512" | "1024" | "2048" | "4096";

/**
 * @description: RSA 加密
 * @param {string} publicKey 公钥
 * @param {string} raw 内容
 * @return {string}
 */
export const RSAEncrypt = (publicKey: string, raw: string, size: RSAKeySize = "2048"): string => {
  if (Common.isEmpty(publicKey)) {
    throw new Error("public key must be provided");
  }
  if (Common.isEmpty(raw)) {
    throw new Error("raw must be provided");
  }
  if (window === undefined) {
    throw new Error();
  }
  const encryptor = new JSEncrypt({
    // eslint-disable-next-line camelcase
    default_key_size: size,
  });
  encryptor.setPublicKey(publicKey);
  const result = encryptor.encrypt(raw);
  if (typeof result === "boolean") {
    throw new Error("RSA encrypt failed");
  }
  return result;
};

/**
 * @description: RSA 解密
 * @param {string} privateKey 私钥
 * @param {string} raw 字符串
 * @return {string}
 */
export const RSADecrypt = (privateKey: string, raw: string, size: RSAKeySize = "2048"): string => {
  if (Common.isEmpty(privateKey)) {
    throw new Error("private key must be provided");
  }
  if (Common.isEmpty(raw)) {
    throw new Error("raw must be provided");
  }
  if (window === undefined) {
    throw new Error();
  }
  const decryptor = new JSEncrypt({
    // eslint-disable-next-line camelcase
    default_key_size: size,
  });
  decryptor.setPrivateKey(privateKey);
  const result = decryptor.decrypt(raw);
  if (typeof result === "boolean") {
    throw new Error("RSA decrypt failed");
  }
  return result;
};
