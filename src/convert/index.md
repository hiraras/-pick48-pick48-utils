---
title: convert - 数据转化
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法        | 描述                     | 入参            | 返回值                 |
| ----------- | ------------------------ | --------------- | ---------------------- |
| getJsonData | 将 json 字符串转化为对象 | `data: unknown` | `json对象或null或本身` |

## 示例

```tsx
import React from 'react';
import { convert } from '@pick48/pick48-utils';

export default () => {
  return (
    <div>
      <p>{convert.getJsonData(1)}</p>
      <p>{convert.getJsonData(' ') + ''}</p>
      <p>{convert.getJsonData() + ''}</p>
      <p>{convert.getJsonData(true) + ''}</p>
      <p>{convert.getJsonData([1, 2, 3]) + ''}</p>
      <p>{JSON.stringify(convert.getJsonData(JSON.stringify({ abc: 1 })))}</p>
    </div>
  );
};
```
