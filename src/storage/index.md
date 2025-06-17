---
title: storage
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法              | 描述               | 入参                                       | 返回值   |
| ----------------- | ------------------ | ------------------------------------------ | -------- |
| getSessionItem    | 获取 sessionItem   | `key: string`                              | `string` |
| setSessionItem    | 设置 sessionItem   | `key: string, val: string`                 | `/`      |
| removeSessionItem | 删除 sessionItem   | `key: string`                              | `/`      |
| getLocalItem      | 获取 localItem     | `key: string`                              | `string` |
| setLocalItem      | 设置 localItem     | `key: string, val: string`                 | `/`      |
| removeLocalItem   | 删除 localItem     | `key: string`                              | `/`      |
| parseCookie       | 解析 cookie 为对象 | `cookie=document.cookie`                   | `对象`   |
| setCookie         | 设置 cookie        | `key:string, value:string, expires:number` | `/`      |

## 示例

```tsx
import React from 'react';
import { storage } from '@pick48/pick48-utils';

export default () => {
  storage.setSessionItem('test', 'abc');
  const data = storage.getSessionItem('test');
  storage.setCookie('t', '123', 60 * 1000);
  const cookieObj = storage.parseCookie();

  return (
    <div>
      <p>data: {data}</p>
      <p>cookie对象: {JSON.stringify(cookieObj)}</p>
    </div>
  );
};
```
