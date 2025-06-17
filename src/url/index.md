---
title: URL
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法            | 描述                          | 入参 | 返回值 |
| --------------- | ----------------------------- | ---- | ------ |
| getSearchParams | 将 url 上的 search 转化为对象 | /    | Object |

## 示例

```tsx
import React from 'react';
import { url } from '@pick48/pick48-utils';

export default () => {
  return (
    <div>
      <p>{JSON.stringify(url.getSearchParams())}</p>
    </div>
  );
};
```
