---
title: 时间格式化
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法       | 描述                             | 入参                                           | 返回值              |
| ---------- | -------------------------------- | ---------------------------------------------- | ------------------- |
| formatTime | 传入时间戳返回指定格式的时间文本 | `timestamp: number, config: FormatConfig = {}` | `年-月-日 时:分:秒` |

`FormatConfig`

| 属性   | 描述         | 类型   | 默认值                |
| ------ | ------------ | ------ | --------------------- |
| format | 格式化字符串 | string | `YYYY-MM-DD HH:mm:ss` |
| offset | 时间偏移量   | number | `-8`                  |

## 示例

```tsx
import React from 'react';
import { date } from '@pick48/pick48-utils';

export default () => {
  const data = new Date();
  const time1 = date.formatTime(+data);
  const time2 = date.formatTime(+data, {
    format: 'YYYY年MM月DD日 HH时mm分ss秒',
  });
  const time3 = date.formatTime(+data, {
    format: 'YYYY年MM月DD日 HH时mm分ss秒',
    offset: 0,
  });

  return (
    <div>
      <p>【当前时间】 {time1}</p>
      <p>【YYYY年MM月DD日 HH时mm分ss秒】 {time2}</p>
      <p>【YYYY年MM月DD日 HH时mm分ss秒】(北京时间) {time3}</p>
    </div>
  );
};
```
