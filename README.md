# @unmian/universal-utils

> 一个应用于日常开发的通用工具库

## 模块和功能

目前本项目中包含以下模块：

- **Browser(Browser):** 浏览器相关
  - **whichBrowser(Browser):** 获取浏览器
  - **whichRenderingEngine(Browser):** 获取浏览器内核
  - **getBrowserInfo(Browser):** 获取浏览器信息
  - **isChrome(Browser):** 是否为 Chrome 浏览器
  - **isFirefox(Browser):** 是否为 Firefox 浏览器
  - **isSafari(Browser):** 是否为 Safari 浏览器
  - **isWebkit(Browser):** 是否为 Webkit 内核
  - **isGecko(Browser):** 是否为 Gecko 内核
- **Clipboard(Browser):** 剪切板相关
  - **write(Browser):** 将文本写入剪贴板
  - **read(Browser):** 读取剪贴板文本
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
  - **copy:** 对象深拷贝
- **Privacy:** 隐私相关
  - **phone:** 电话号码处理
- **Storage:** 数据存储
  - **add:** 新增数据
  - **update:** 更新数据
  - **get:** 获取指定数据
  - **remove:** 移除指定数据
  - **clear:** 清空数据
- **URI:** uri 相关
  - **parse:** 解析 uri 字符串
  - **stringify:** 将 uri 序列化数据转换为字符串
- **Word:** 单词模块
  - **toCamelCase:** 转化为驼峰命名
  - **toSeparatorCase:** 转化为连词命名

## 项目依赖

- [travist/jsencrypt](https://github.com/travist/jsencrypt)

## 更新日志

### 0.8.1

- refactor: 调整浏览器内核 AppleWebKit 为 WebKit

### 0.8.0

- feat: 新增浏览器和剪切板模块

### 0.7.1

- refactor: uri 序列化数据新增 fullPath 字段

### 0.7.0

- feat: 新增 uri 相关模块

### 0.6.0

- feat: 新增隐私相关模块

### 0.5.9

- refactor: 调整数据存储模块中的异常为容错判断

### 0.5.8

- fix: 修复 Storage 导出问题

### ~~0.5.7~~

- feat: 新增数据存储模块

### 0.5.6

- feat: 新增对象深拷贝方法

### 0.5.5

- fix: 修复 uuid 方法 substring 逻辑错误

### 0.5.4

- refactor: 将 JSEncrypt 通过源码引入

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
