---
sidebar_position: 1
---

# Taro

## WXMLRT_$gwx:./base.wxml:template:781:16: Template `tmpl_0_25` not found.

### 原因

见 [issue](https://github.com/NervJS/taro/issues/12553)

### 解决

修改配置文件:
```js
 compiler: {
    type: "webpack5",
    prebundle: {
      enable: false,
      force: true,
    },
  },
```
