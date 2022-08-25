/*
 * @Author: Quarter
 * @Date: 2022-08-24 11:50:59
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-24 15:23:34
 * @FilePath: /universal-utils/src/Coding.ts
 * @Description: 编码工具
 */

import { JSEncrypt } from "jsencrypt";
import * as Hashes from "jshashes";
import { isEmpty } from "./common";

// RSA 密钥大小
type RSAKeySize = "512" | "1024" | "2048" | "4096";

const Base64 = new Hashes.Base64();
const MD5 = new Hashes.MD5({
  uppercase: true,
  utf8: true,
});
const SHA1 = new Hashes.SHA1({
  uppercase: true,
  utf8: true,
});
const SHA256 = new Hashes.SHA256({
  uppercase: true,
  utf8: true,
});
const SHA512 = new Hashes.SHA512({
  uppercase: true,
  utf8: true,
});
const RMD160 = new Hashes.RMD160({
  uppercase: true,
  utf8: true,
});

/**
 * @description: base64 编码
 * @param {string} raw 内容
 * @return {string}
 */
export const Base64Encoding = (raw: string): string => {
  if (window && typeof window.btoa === "function") {
    return window.btoa(raw);
  }
  return Base64.encode(raw);
};

/**
 * @description: base64 编码
 * @param {string} raw 内容
 * @return {string}
 */
export const Base64Decoding = (raw: string): string => {
  if (window && typeof window.atob === "function") {
    return window.atob(raw);
  }
  return Base64.decode(raw);
};

/**
 * @description: MD5 散列
 * @param {string} raw 内容
 * @param {boolean} uppercase 是否大写
 * @return {string}
 */
export const MD5Hash = (raw: string, uppercase = true): string => {
  MD5.setUpperCase(uppercase);
  return MD5.hex(raw);
};

/**
 * @description: SHA1 散列
 * @param {string} raw 内容
 * @param {boolean} uppercase 是否大写
 * @return {string}
 */
export const SHA1Hash = (raw: string, uppercase = true): string => {
  SHA1.setUpperCase(uppercase);
  return SHA1.hex(raw);
};

/**
 * @description: SHA256 散列
 * @param {string} raw 内容
 * @param {boolean} uppercase 是否大写
 * @return {string}
 */
export const SHA256Hash = (raw: string, uppercase = true): string => {
  SHA256.setUpperCase(uppercase);
  return SHA256.hex(raw);
};

/**
 * @description: SHA512 散列
 * @param {string} raw 内容
 * @param {boolean} uppercase 是否大写
 * @return {string}
 */
export const SHA512Hash = (raw: string, uppercase = true): string => {
  SHA512.setUpperCase(uppercase);
  return SHA512.hex(raw);
};

/**
 * @description: RMD160 散列
 * @param {string} raw 内容
 * @param {boolean} uppercase 是否大写
 * @return {string}
 */
export const RMD160Hash = (raw: string, uppercase = true): string => {
  RMD160.setUpperCase(uppercase);
  return RMD160.hex(raw);
};

/**
 * @description: RSA 加密
 * @param {string} publicKey 公钥
 * @param {string} raw 内容
 * @return {string}
 */
export const RSAEncrypt = (publicKey: string, raw: string, size: RSAKeySize = "2048"): string => {
  if (isEmpty(publicKey)) {
    throw new Error("public key must be provided");
  }
  if (isEmpty(raw)) {
    throw new Error("raw must be provided");
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
  if (isEmpty(privateKey)) {
    throw new Error("private key must be provided");
  }
  if (isEmpty(raw)) {
    throw new Error("raw must be provided");
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

/**
 * @description: 生成 uuid
 * @return {string}
 */
export const UUID = (): string => {
  const s: string[] = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substring(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  // eslint-disable-next-line no-bitwise
  s[19] = hexDigits.substring(((s[19] as any) & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = "-";
  s[13] = "-";
  s[18] = "-";
  s[23] = "-";

  return s.join("");
};
