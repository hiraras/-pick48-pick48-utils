---
title: 数据类型判断
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法        | 描述      | 入参  | 返回值         |
| ----------- | --------- | ----- | -------------- |
| getType     | 获取类型  | `any` | `类型的字符串` |
| isNumber    | 数字      | `any` | `Boolean`      |
| isString    | 字符串    | `any` | `Boolean`      |
| isBoolean   | 布尔      | `any` | `Boolean`      |
| isSymbol    | Symbol    | `any` | `Boolean`      |
| isBigint    | Bigint    | `any` | `Boolean`      |
| isUndefined | Undefined | `any` | `Boolean`      |
| isNull      | Null      | `any` | `Boolean`      |
| isObject    | 对象      | `any` | `Boolean`      |
| isArray     | 数组      | `any` | `Boolean`      |
| isFunction  | 函数      | `any` | `Boolean`      |
| isPromise   | Promise   | `any` | `Boolean`      |
| isRegExp    | 正则      | `any` | `Boolean`      |
| isDate      | 日期      | `any` | `Boolean`      |
| isError     | 错误      | `any` | `Boolean`      |
| isSet       | Set       | `any` | `Boolean`      |
| isMap       | Map       | `any` | `Boolean`      |
| isUndef     | 未定义    | `any` | `Boolean`      |
| isDef       | 已定义    | `any` | `Boolean`      |
| isTruth     | 真值      | `any` | `Boolean`      |
| isTrue      | True      | `any` | `Boolean`      |
| isFalse     | False     | `any` | `Boolean`      |

## 示例

```tsx
import React from 'react';
import { dataType } from '@pick48/pick48-utils';

export default () => {
  const data = {};
  const getType = dataType.getType(data);
  const isNumber = dataType.isNumber(data);
  const isObject = dataType.isObject(data);
  const isDef = dataType.isDef(data);
  const isTruth = dataType.isTruth(data);

  return (
    <div>
      <p>data的类型是：{getType}</p>
      <p>data是数字：{`${isNumber}`}</p>
      <p>data是对象：{`${isObject}`}</p>
      <p>data已定义：{`${isDef}`}</p>
      <p>data是真值：{`${isTruth}`}</p>
    </div>
  );
};
```
