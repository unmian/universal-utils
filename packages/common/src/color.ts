/*
 * @Author: Quarter
 * @Date: 2022-08-23 09:49:58
 * @LastEditors: Quarter
 * @LastEditTime: 2022-08-27 11:40:17
 * @FilePath: /universal-utils/src/color.ts
 * @Description: 颜色处理
 */

import { isEmpty } from "./common";
import { toFilled, toFixed } from "./number";

// 颜色模式
export type ColorMode = "dark" | "light";
// RGB颜色
export interface RGBColor {
  red: number; // 红色
  green: number; // 绿色
  blue: number; // 蓝色
}
// RGBA颜色
export interface RGBAColor extends RGBColor {
  alpha: number; // 颜色
  hasAlpha: boolean; // 是否有透明度
}

// 空白正则
const blankReg = /[\s\n\t]+/g;
// hex 颜色正则
const hexReg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
// rgb 颜色正则
const rgbReg = /^(rgb\((\d{1,3},){2}\d{1,3}\))|(rgba\((\d{1,3},){3}((0(\.\d+)?)|1)\))$/;

/**
 * @description: 颜色字符串解析
 * @param {string} color 颜色字符串
 * @return {string}
 */
export const parse = (color: string): RGBAColor => {
  let colorStr = color.replace(blankReg, "");
  const RGBAColor: RGBAColor = {
    red: 255,
    green: 255,
    blue: 255,
    alpha: 1,
    hasAlpha: false,
  };
  // hex 颜色
  if (hexReg.test(colorStr)) {
    colorStr = colorStr.replace(/#/g, "").toLocaleLowerCase();
    const colorArr: number[] = [];
    for (let i = 0; i < Math.floor(colorStr.length / 2); i++) {
      const num = parseInt(colorStr.substring(2 * i, 2 * i + 2), 16);
      if (i > 2) {
        colorArr.push(toFixed(num / 255, 2));
      } else {
        colorArr.push(num);
      }
    }
    RGBAColor.red = isEmpty(colorArr[0]) ? 255 : colorArr[0];
    RGBAColor.green = isEmpty(colorArr[1]) ? 255 : colorArr[1];
    RGBAColor.blue = isEmpty(colorArr[2]) ? 255 : colorArr[2];
    if (colorArr.length > 3) {
      RGBAColor.alpha = isEmpty(colorArr[3]) ? 1 : colorArr[3];
      RGBAColor.hasAlpha = true;
    }
    // rgb 颜色
  } else if (rgbReg.test(colorStr)) {
    colorStr = colorStr.replace(/[rgba()]+/g, "");
    const colorArr = colorStr.split(",").map((item) => parseInt(item, 10));
    RGBAColor.red = isEmpty(colorArr[0]) ? 255 : colorArr[0];
    RGBAColor.green = isEmpty(colorArr[1]) ? 255 : colorArr[1];
    RGBAColor.blue = isEmpty(colorArr[2]) ? 255 : colorArr[2];
    if (colorArr.length > 3) {
      RGBAColor.alpha = isEmpty(colorArr[3]) ? 1 : colorArr[3];
      RGBAColor.hasAlpha = true;
    }
  } else {
    throw new Error(`${color}: this is not a color string`);
  }
  return RGBAColor;
};

/**
 * @description: 转换为 hex 颜色
 * @param {number} red 红色
 * @param {number} green 绿色
 * @param {number} blue 蓝色
 * @param {number} alpha 透明度
 * @return {string}
 */
const toHex = (red: number, green: number, blue: number, alpha?: number): string => {
  const colorArr = [red, green, blue];
  if (alpha !== undefined) {
    colorArr.push(Math.floor(alpha * 255));
  }
  const colorHexArr = colorArr.map((item) => toFilled(item.toString(16), 2));
  return `#${colorHexArr.join("")}`;
};

/**
 * @description: 颜色字符串解析
 * @param {string} color 颜色字符串
 * @return {string}
 */
const toRGB = (red: number, green: number, blue: number, alpha?: number): string => {
  if (alpha !== undefined) {
    return `rgba(${red},${green},${blue},${alpha})`;
  }
  return `rgb(${red},${green},${blue})`;
};

/**
 * @description: hex颜色转rgb颜色
 * @param {string} hex 颜色字符串
 * @return {string}
 */
export const hex2rgb = (hex: string): string => {
  const hexColor = hex.replace(blankReg, "");
  if (!hexReg.test(hexColor)) {
    throw new Error(`${hex}: this is not a hex string`);
  }
  const RGBAColor = parse(hexColor);
  if (RGBAColor.hasAlpha) {
    return toRGB(RGBAColor.red, RGBAColor.green, RGBAColor.blue, RGBAColor.alpha);
  }
  return toRGB(RGBAColor.red, RGBAColor.green, RGBAColor.blue);
};

/**
 * @description: rgb颜色转hex颜色
 * @param {string} rgb 颜色字符串
 * @return {string}
 */
export const rgb2hex = (rgb: string): string => {
  const rgbColor = rgb.replace(blankReg, "");
  if (!rgbReg.test(rgbColor)) {
    throw new Error(`${rgb}: this is not a rgb string`);
  }
  const RGBAColor = parse(rgbColor);
  if (RGBAColor.hasAlpha) {
    return toHex(RGBAColor.red, RGBAColor.green, RGBAColor.blue, RGBAColor.alpha);
  }
  return toHex(RGBAColor.red, RGBAColor.green, RGBAColor.blue);
};

/**
 * @description: 颜色模式
 * @param {string} color 颜色代码
 * @return {ColorMode}
 */
export const colorMode = (color: string): ColorMode => {
  const RGBAColor = parse(color);
  const brightness = (RGBAColor.red * 299 + RGBAColor.green * 587 + RGBAColor.blue * 114) / 255000;
  if (brightness >= 0.5) {
    return "light";
  }
  return "dark";
};

/**
 * @description: 是否是亮色
 * @param {string} color 颜色代码
 * @return {boolean}
 */
export const isLight = (color: string): boolean => colorMode(color) === "light";

/**
 * @description: 是否是暗色
 * @param {string} color 颜色代码
 * @return {boolean}
 */
export const isDark = (color: string): boolean => colorMode(color) === "dark";

/**
 * @description: 加深或者变浅颜色
 * @param {RGBColor} color 颜色
 * @param {number} level 程度, 0 - 1
 * @return {RGBColor}
 */
const lightenDarken = (color: RGBColor, level = 0): RGBColor => {
  const { red, green, blue } = color;
  if (level >= 0) {
    return {
      red: red + Math.floor((255 - red) * level),
      green: green + Math.floor((255 - green) * level),
      blue: blue + Math.floor((255 - blue) * level),
    };
  }
  return {
    red: red - Math.floor(red * level),
    green: green - Math.floor(green * level),
    blue: blue - Math.floor(blue * level),
  };
};

/**
 * @description: 变浅颜色
 * @param {string} color 颜色
 * @param {number} level 程度, 0 - 1
 * @param {boolean} isRGB 是否是 rgb
 * @return {string}
 */
export const lighten = (color: string, level = 0, isRGB = false): string => {
  // 参数解析
  const rgbaColor = parse(color);
  if (level < 0 || level > 1) {
    throw new Error(`${level}: level must between 0 and 1`);
  }

  const lightenColor = lightenDarken(rgbaColor, level);
  if (isRGB) {
    if (rgbaColor.hasAlpha) {
      return toRGB(lightenColor.red, lightenColor.green, lightenColor.blue, rgbaColor.alpha);
    }
    return toRGB(lightenColor.red, lightenColor.green, lightenColor.blue);
  }
  if (rgbaColor.hasAlpha) {
    return toHex(lightenColor.red, lightenColor.green, lightenColor.blue, rgbaColor.alpha);
  }
  return toHex(lightenColor.red, lightenColor.green, lightenColor.blue);
};

/**
 * @description: 加深颜色
 * @param {string} color 颜色
 * @param {number} level 程度, 0 - 1
 * @param {boolean} isRGB 是否是 rgb
 * @return {String}
 */
export const darken = (color: string, level = 0, isRGB = false): string => {
  // 参数解析
  const rgbaColor = parse(color);
  if (level < 0 || level > 1) {
    throw new Error(`${level}: level must between 0 and 1`);
  }

  const darkenColor = lightenDarken(rgbaColor, -level);
  if (isRGB) {
    if (rgbaColor.hasAlpha) {
      return toRGB(darkenColor.red, darkenColor.green, darkenColor.blue, rgbaColor.alpha);
    }
    return toRGB(darkenColor.red, darkenColor.green, darkenColor.blue);
  }
  if (rgbaColor.hasAlpha) {
    return toHex(darkenColor.red, darkenColor.green, darkenColor.blue, rgbaColor.alpha);
  }
  return toHex(darkenColor.red, darkenColor.green, darkenColor.blue);
};

/**
 * @description: 拆分渐变色
 * @param {string} startColor 开始色
 * @param {string} endColor 结束色
 * @param {number} step 分段
 * @param {boolean} isRGB 是否使用是rgb格式
 * @return {Array<string>}
 */
export const splitGradientColor = (
  startColor: string,
  endColor: string,
  steps: number,
  isRGB = false,
): string[][] => {
  // 解析参数
  const startRGBAColor = parse(startColor);
  const endRGBAColor = parse(endColor);
  if (steps < 1) {
    throw new Error(`${steps}: steps must more than 1`);
  }

  // 计算R\G\B每一步的差值
  const redStep = (endRGBAColor.red - startRGBAColor.red) / steps;
  const greenStep = (endRGBAColor.green - startRGBAColor.green) / steps;
  const blueStep = (endRGBAColor.blue - startRGBAColor.blue) / steps;

  // 计算各节点颜色，包括开始和结尾
  const colorArr = new Array(steps).fill("").map((_, index) => {
    const startRed = Math.ceil(redStep * index + startRGBAColor.red);
    const startGreen = Math.ceil(greenStep * index + startRGBAColor.green);
    const startBlue = Math.ceil(blueStep * index + startRGBAColor.blue);
    const endRed = Math.ceil(redStep * (index + 1) + startRGBAColor.red);
    const endGreen = Math.ceil(greenStep * (index + 1) + startRGBAColor.green);
    const endBlue = Math.ceil(blueStep * (index + 1) + startRGBAColor.blue);
    return isRGB
      ? [toRGB(startRed, startGreen, startBlue), toRGB(endRed, endGreen, endBlue)]
      : [toHex(startRed, startGreen, startBlue), toHex(endRed, endGreen, endBlue)];
  });
  return colorArr;
};
