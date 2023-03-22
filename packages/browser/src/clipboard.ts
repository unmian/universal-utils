/*
 * @Author: Quarter
 * @Date: 2023-03-22 09:31:49
 * @LastEditors: Quarter
 * @LastEditTime: 2023-03-22 16:18:58
 * @FilePath: /universal-utils/packages/browser/src/clipboard.ts
 * @Description: 剪切板
 */

import * as Browser from "./browser";

/**
 * @description: 获取剪切板读取权限
 * @return {Promise<void>}
 */
const checkReadPermission = (): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    if (!!navigator.clipboard && !!navigator.permissions) {
      const isWebkit = Browser.isWebkit();
      if (isWebkit) {
        navigator.permissions
          .query({ name: "clipboard-read" as PermissionName })
          .then(({ state }) => {
            if (state === "granted" || state === "prompt") {
              resolve();
            } else {
              reject(new Error("Permission Denied"));
            }
          })
          .catch(() => resolve());
      } else {
        resolve();
      }
    } else {
      reject(new Error("Permissions API 不支持"));
    }
  });

/**
 * @description: 获取剪切板写入权限
 * @return {Promise<void>}
 */
const checkWritePermission = (): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    if (!!navigator.clipboard && !!navigator.permissions) {
      const isWebkit = Browser.isWebkit();
      if (isWebkit) {
        navigator.permissions
          .query({ name: "clipboard-write" as PermissionName })
          .then(({ state }) => {
            if (state === "granted" || state === "prompt") {
              resolve();
            } else {
              reject(new Error("Permission Denied"));
            }
          })
          .catch(() => resolve());
      } else {
        resolve();
      }
    } else {
      reject(new Error("Permissions API 不支持"));
    }
  });

/**
 * @description: 写入剪贴板
 * @param {string} text 文本内容
 * @return {Promise<void>}
 */
export const write = (text: string): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    checkWritePermission()
      .then(() => navigator.clipboard.writeText(text))
      .then(() => resolve())
      .catch(() => {
        try {
          if (document.execCommand) {
            const input = document.createElement("input");
            input.style.position = "fixed";
            input.style.top = "0";
            input.style.left = "0";
            input.style.zIndex = "-1";
            input.style.opacity = "0";
            document.body.appendChild(input);
            input.value = text;
            input.select();
            document.execCommand("copy");
            input.remove();
          } else {
            reject(new Error("execCommand"));
          }
        } catch (err) {
          reject(err);
        }
      });
  });

/**
 * @description: 读取文本
 * @return {Promise<string>}
 */
export const read = (): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    checkReadPermission()
      .then(() => navigator.clipboard.readText())
      .then((value) => resolve(value))
      .catch(() => {
        try {
          if (document.execCommand) {
            const input = document.createElement("input");
            input.style.position = "fixed";
            input.style.top = "0";
            input.style.left = "0";
            input.style.zIndex = "-1";
            input.style.opacity = "0";
            document.body.appendChild(input);
            input.focus();
            document.execCommand("paste");
            const text = input.value;
            input.remove();
            resolve(text);
          } else {
            reject(new Error("execCommand"));
          }
        } catch (err) {
          reject(err);
        }
      });
  });
