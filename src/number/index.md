---
title: number
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法               | 描述                           | 入参                            | 返回值                 |
| ------------------ | ------------------------------ | ------------------------------- | ---------------------- |
| convertBytes       | 数据容量转换                   | `size=0, unit='b', precision=2` | `{size, unit, result}` |
| divideNum          | 分割数字                       | `num: number, divider = ','`    | `string`               |
| round              | 保留字符串位数(可避免数值失真) | `num: number, accuracy = 0`     | `number`               |
| getRandomInteger   | 获取随机数(包括首尾)           | `start = 0, end = 100`          | `number`               |
| getNumberPrecision | 获取数字精度                   | `num: number`                   | `number`               |

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
      <p>
        测试代码：divideNum(1234567.123456789, '_')，结果：
        {divideNum(1234567.123456789, '_')}
      </p>
    </div>
  );
};
```

## round 示例

```tsx
import React from 'react';
import { number } from '@pick48/pick48-utils';

const { round } = number;

export default () => {
  return (
    <div>
      <p>{0.1 + 0.2}</p>
      <p>{round(0.1 + 0.2, 1)}</p>
      <p>{round(10.25, 1)}</p>
    </div>
  );
};
```

## getRandomInteger 示例

```tsx
import React from 'react';
import { number } from '@pick48/pick48-utils';

const { getRandomInteger } = number;

export default () => {
  return (
    <div>
      <p>{getRandomInteger()}</p>
      <p>{getRandomInteger(100, 600)}</p>
    </div>
  );
};
```

## getNumberPrecision 示例

```tsx
import React from 'react';
import { number } from '@pick48/pick48-utils';

const { getNumberPrecision } = number;

export default () => {
  return (
    <div>
      <p>{getNumberPrecision(12)}</p>
      <p>{getNumberPrecision(12.1)}</p>
      <p>{getNumberPrecision(12.123)}</p>
    </div>
  );
};
```
