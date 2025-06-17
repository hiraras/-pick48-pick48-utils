---
title: 正则表达式
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

### 正则表达式

| 对象       | 描述     |
| ---------- | -------- |
| regPhone   | 手机号码 |
| regEmail   | 邮箱     |
| regIdCard  | 身份证   |
| regIdCar   | 车牌号   |
| regChinese | 中文     |
| regUrl     | URL      |

### 方法

| 方法      | 描述             | 入参                               | 返回值         |
| --------- | ---------------- | ---------------------------------- | -------------- |
| setFlags  | 为正则添加修饰符 | `string` （igmsuy 六个字母的组合） | 带修饰符的正则 |
| isPhone   | 手机号码         | `string`                           | Boolean        |
| isEmail   | 邮箱             | `string`                           | Boolean        |
| isIdCard  | 身份证           | `string`                           | Boolean        |
| isIdCar   | 车牌号           | `string`                           | Boolean        |
| isChinese | 中文             | `string`                           | Boolean        |
| isUrl     | URL              | `string`                           | Boolean        |

## 示例

```tsx
import React from 'react';
import { regExps } from '@pick48/pick48-utils';

export default () => {
  const data = 18967423680;
  const isPhone = regExps.isPhone(data);
  const regChinese = regExps.regs.regChinese;

  return (
    <div>
      <p>检测数据：{data}</p>
      <p>
        正则表达式 regExps.regs.regPhone 为：{regExps.regs.regPhone.toString()}
      </p>
      <p>结果：{`${isPhone}`}</p>
      <br />
      <p>中文正则：{`${regChinese}`}</p>
      <p>修饰符处理：{`${regExps.setFlags(regChinese, 'ig')}`}</p>
    </div>
  );
};
```
