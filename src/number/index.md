---
title: 数值处理
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法         | 描述         | 入参                            | 返回值               |
| ------------ | ------------ | ------------------------------- | -------------------- |
| convertBytes | 数据容量转换 | `size=0, unit='b', precision=2` | {size, unit, result} |

## convertBytes 示例

```tsx
import React from 'react';
import { number } from '@pick48/pick48-utils';

const { convertBytes } = number;

export default () => {
  const size = 1234500;

  const b = convertBytes(size);
  const b3 = convertBytes(size, 'B', 3);
  const kb = convertBytes(size, 'KB');
  const mb = convertBytes(size, 'MB');
  const gb = convertBytes(size, 'GB');

  return (
    <div>
      <p>【测试数值】 {size}</p>

      <p>【单位：比特】 {JSON.stringify(b)}</p>
      <p>【单位：比特，保留三位小数】 {JSON.stringify(b3)}</p>
      <p>【单位：KB】 {JSON.stringify(kb)}</p>
      <p>【单位：MB】 {JSON.stringify(mb)}</p>
      <p>【单位：GB】 {JSON.stringify(gb)}</p>
    </div>
  );
};
```

## divideNum 示例

```tsx
import React from 'react';
import { number } from '@pick48/pick48-utils';

const { divideNum } = number;

export default () => {
  const size = 1234500;

  const b = divideNum(size);
  const b3 = divideNum(size, 'B', 3);
  const kb = divideNum(size, 'KB');
  const mb = divideNum(size, 'MB');
  const gb = divideNum(size, 'GB');

  return (
    <div>
      <p>测试代码：divideNum(123)，结果：{divideNum(123)}</p>
      <p>测试代码：divideNum(1234567)，结果：{divideNum(1234567)}</p>
      <p>测试代码：divideNum(1234567, '_')，结果：{divideNum(1234567, '_')}</p>
    </div>
  );
};
```
