/*
 * @Author: Quarter
 * @Date: 2023-03-22 10:28:30
 * @LastEditors: Quarter
 * @LastEditTime: 2023-03-22 16:05:22
 * @FilePath: /universal-utils/packages/browser/src/browser.ts
 * @Description: 浏览器判断
 */

// 浏览器类型
export type BrowserType = "Chrome" | "Firefox" | "Safari" | "Other";
// 浏览器内核
export type BrowserRenderingEngine = "Gecko" | "AppleWebKit" | "Other";
// 浏览器信息
export interface BrowserInfo {
  browser: BrowserType; // 浏览器类型
  engine: BrowserRenderingEngine; // 浏览器内核
  version: string; // 版本
}

/**
 * @description: 获取当前浏览器类型
 * @return {BrowserType}
 */
export const whichBrowser = (): BrowserType => {
  let browserType: BrowserType = "Other";
  const { userAgent } = navigator;
  // 识别浏览器
  if (userAgent.includes("Chrome")) {
    browserType = "Chrome";
  } else if (userAgent.includes("Safari")) {
    browserType = "Safari";
  } else if (userAgent.includes("Firefox")) {
    browserType = "Firefox";
  }

  return browserType;
};

/**
 * @description: 获取当前为哪一个浏览器
 * @return {BrowserType}
 */
export const whichRenderingEngine = (): BrowserRenderingEngine => {
  let renderingEngine: BrowserRenderingEngine = "Other";
  const { userAgent } = navigator;
  // 识别内核
  if (userAgent.includes("AppleWebKit")) {
    renderingEngine = "AppleWebKit";
  } else if (userAgent.includes("Gecko")) {
    renderingEngine = "Gecko";
  }

  return renderingEngine;
};

/**
 * @description: 获取浏览器信息
 * @return {BrowserInfo}
 */
export const getBrowserInfo = (): BrowserInfo => {
  const browserType = whichBrowser();
  let version = "";
  const { userAgent } = navigator;
  // 识别浏览器版本
  const matchStr = userAgent.match(new RegExp(`${browserType}/[0-9.]+`));
  if (matchStr && matchStr.length > 0) {
    version = matchStr[matchStr.length - 1].replace(new RegExp(`^${browserType}/`), "");
  }

  return {
    browser: browserType,
    engine: whichRenderingEngine(),
    version,
  };
};

/**
 * @description: 是否是 Chrome 浏览器
 * @return {boolean}
 */
export const isChrome = (): boolean => whichBrowser() === "Chrome";

/**
 * @description: 是否是 Firefox 浏览器
 * @return {boolean}
 */
export const isFirefox = (): boolean => whichBrowser() === "Firefox";

/**
 * @description: 是否是 Safari 浏览器
 * @return {boolean}
 */
export const isSafari = (): boolean => whichBrowser() === "Safari";

/**
 * @description: 是否是 WebKit 浏览器
 * @return {boolean}
 */
export const isWebkit = (): boolean => whichRenderingEngine() === "AppleWebKit";

/**
 * @description: 是否是 Gecko 内核
 * @return {boolean}
 */
export const isGecko = (): boolean => whichRenderingEngine() === "Gecko";
