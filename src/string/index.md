---
title: 字符串相关工具方法
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法            | 描述                         | 入参                                       | 返回值 |
| --------------- | ---------------------------- | ------------------------------------------ | ------ |
| truncate        | 省略字符串                   | `str: string, config: TruncateConfig = {}` | string |
| getStringLength | 获取字符串长度(中文长度为 2) | `str: string`                              | number |

`TruncateConfig`

| 属性         | 描述         | 类型   | 默认值 |
| ------------ | ------------ | ------ | ------ |
| start        | 前面部分长度 | number | `6`    |
| end          | 结尾部分长度 | number | `6`    |
| replaceValue | 替换的占位符 | number | `...`  |

## truncate 示例

```tsx
import React from 'react';
import { string } from '@pick48/pick48-utils';

export default () => {
  const str = 'abcdefghigkmnl';

  return (
    <div>
      <p>原字符串: {str}</p>
      <p>转化后: {string.truncate(str)}</p>
      <p>转化后: {string.truncate(str, { start: 2 })}</p>
      <p>转化后: {string.truncate(str, { end: 2 })}</p>
      <p>转化后: {string.truncate(str, { start: 10, end: 10 })}</p>
      <p>转化后: {string.truncate(str, { replaceValue: '---' })}</p>
    </div>
  );
};
```

## getStringLength 示例

```tsx
import React from 'react';
import { string } from '@pick48/pick48-utils';

export default () => {
  const str = 'abc哈哈哈111';

  return (
    <div>
      <p>原字符串: {str}</p>
      <p>原字符串: {string.getStringLength(str)}</p>
    </div>
  );
};
```
