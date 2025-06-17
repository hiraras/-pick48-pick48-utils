---
title: utils - 通用
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法             | 描述             | 入参                                            | 返回值            |
| ---------------- | ---------------- | ----------------------------------------------- | ----------------- |
| debouncePromise  | 异步函数防抖     | `fn: (...rest: any[]) => Promise<T>,time = 300` | `异步函数`        |
| getClipboardText | 获取剪切板的内容 | /                                               | `Promise<string>` |

## debouncePromise 示例

```tsx
import React from 'react';
import { utils } from '@pick48/pick48-utils';

export default () => {
  async function delay(duration = 300) {
    await new Promise(function (resolve) {
      setTimeout(resolve, duration);
    });
  }
  const handle = utils.debouncePromise(async function () {
    console.log('start');
    await delay();
    console.log('end');
  });
  handle();
  return null;
};
```

## getClipboardText 示例

```tsx
import React, { useState } from 'react';
import { utils } from '@pick48/pick48-utils';

export default () => {
  const [text, setText] = useState('text');
  async function handlePaste() {
    const t = await utils.getClipboardText();
    if (text) {
      setText(t.toString());
    }
  }
  return (
    <div>
      <p>{text}</p>
      <button onClick={handlePaste}>粘贴并替换</button>
    </div>
  );
};
```
