# @unmian/universal-utils

> 一个应用于日常开发的通用工具库

## 模块和功能

目前本项目中包含以下模块：

- **Browser:** 浏览器相关
  - **whichBrowser:** 获取浏览器
  - **whichRenderingEngine:** 获取浏览器内核
  - **getBrowserInfo:** 获取浏览器信息
  - **isChrome:** 是否为 Chrome 浏览器
  - **isFirefox:** 是否为 Firefox 浏览器
  - **isSafari:** 是否为 Safari 浏览器
  - **isWebkit:** 是否为 Webkit 内核
  - **isGecko:** 是否为 Gecko 内核
- **Clipboard:** 剪切板相关
  - **write:** 将文本写入剪贴板
  - **read:** 读取剪贴板文本
- **Coding:** 编码相关
  - **Base64Encoding:** Base64 编码
  - **Base64Decoding:** Base64 解码
  - **MD5Hash:** MD5 散列值计算
  - **SHA1Hash:** SHA1 散列值计算
  - **SHA256Hash:** SHA256 散列值计算
  - **SHA512Hash:** SHA512 散列值计算
  - **RMD160Hash:** RMD160 散列值计算
  - **RSAEncrypt:** RSA 非对称算法加密
  - **RSADecrypt:** RSA 非对称算法解密
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
