# @unmian/universal-utils

> 一个应用于日常开发的通用工具库

## 模块和功能

目前本项目中包含以下模块：

- **Coding:** 编码相关
  - **Base64Encoding:** Base64 编码
  - **Base64Decoding:** Base64 解码
  - **MD5Hash:** MD5 散列值计算
  - **SHA1Hash:** SHA1 散列值计算
  - **SHA256Hash:** SHA256 散列值计算
  - **SHA512Hash:** SHA512 散列值计算
  - **RMD160Hash:** RMD160 散列值计算
  - **RSAEncrypt(Browser):** RSA 非对称算法加密
  - **RSADecrypt(Browser):** RSA 非对称算法解密
  - **UUID:** 生成 UUID
- **Color:** 色彩相关
  - **parse:** 按照 R、G、B、A 的结构解析颜色字符串
  - **hex2rgb:** hex 转 rgb
  - **rgb2hex:** rgb 转 hex
  - **colorMode:** 识别颜色模式（暗色、亮色）
  - **isLight:** 是否是亮色
  - **isDark:** 是否是暗色
  - **lighten:** 颜色淡化
  - **darken:** 颜色加深
  - **splitGradientColor:** 渐变颜色分段
- **Common:** 常用功能（可无需使用模块名）
  - **isNull:** 是否为 null
  - **isUndefined:** 是否为 undefined
  - **isExist:** 是否为 null 或者 undefined
  - **isEmpty:** 是否为 null、undefined、false 或者空字符串
- **Date:** 日期相关
  - **formate:** Date 格式化
  - **getMonthDays:** 获取制定月的天数
- **FormData:** 表单数据相关
  - **toFormData:** Object 转 FormData
  - **toObject:** FormData 转 Object
- **Number:** 数字相关
  - **toFixed:** 数学上的保留小数位数
  - **toFilled:** 前缀字符填充
- **Object:** 对象相关
  - **includeProperties:** 从对象中挑选属性构建新的对象
  - **excludeProperties:** 从对象中排除属性构建新的对象
- **Word:** 单词模块
  - **toCamelCase:** 转化为驼峰命名
  - **toSeparatorCase:** 转化为连词命名

## 项目依赖

- [travist/jsencrypt](https://github.com/travist/jsencrypt)

## 更新日志

### 0.5.3

- feat: Date 模块添加 getMonthDays 方法

### 0.5.2

- fix: 修复 toFormData 中的判断逻辑错误

### 0.5.0

- refactor: 按照通用、浏览器环境、NodeJS 环境拆分项目

### 0.4.3

- refactor: 调整文件结构

### 0.4.2

- refactor: 调整文件结构

### 0.4.1

- fix: 修复构建和模块导入导出错误

### ~~0.4.0~~

- refactor: 拆分 node 和 browser 环境以防止依赖错误

### 0.3.0

- refactor: 优化渐变颜色分段返回数据结构
- feat: 添加单词模块

### 0.2.2

- fix: 修复渐变颜色分段中的逻辑错误

### 0.2.1

- fix: 修复渐变颜色分段未取整的问题

### 0.2.0

- feat: 新增日期模块
- feat: 新增 Date.formate 方法

### 0.1.1

- fix: 修复 isExist 方法逻辑错误

### ~~0.1.0~~

- feat: 第一个版本
