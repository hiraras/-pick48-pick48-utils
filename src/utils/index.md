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

| 方法             | 描述                           | 入参                                                         | 返回值            |
| ---------------- | ------------------------------ | ------------------------------------------------------------ | ----------------- |
| debouncePromise  | 异步函数防抖                   | `fn: (...rest: any[]) => Promise<T>,time = 300`              | `异步函数`        |
| getClipboardText | 获取剪切板的内容               | /                                                            | `Promise<string>` |
| throttle         | 节流                           | `func: (...rest: any[]) => void, delay = 300`                | `节流函数`        |
| notice           | 封装 antd 的 notification 提示 | `msg: string, type: NotifyType = 'warning', destroy = false` | /                 |
| errorNotice      | 用于 error 类型的提示          | `error: unknown, destroy = false`                            | /                 |
| web3ErrorNotice  | web3 相关错误类型的提示        | `error: unknown, destroy = true`                             | /                 |

## NotifyType

```ts
type NotifyType = 'info' | 'success' | 'error' | 'warning';
```

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

## throttle 示例

```tsx
import React from 'react';
import { utils } from '@pick48/pick48-utils';

export default () => {
  function handleClick() {
    console.log(111);
  }
  const throttleFunc = utils.throttle(handleClick, 3000);
  return (
    <div>
      <button onClick={throttleFunc}>点击在控制台输出</button>
    </div>
  );
};
```

## notice 相关示例

```tsx
import React from 'react';
import { utils } from '@pick48/pick48-utils';

const { notice, errorNotice, web3ErrorNotice } = utils;
export default () => {
  const web3ErrorText = `error title 
  \n error detail`;
  return (
    <div>
      <fieldset>
        <legend>notice</legend>
        <button onClick={() => notice('这是描述', 'info')}>notice info</button>
        <button onClick={() => notice('这是描述', 'success')}>
          notice success
        </button>
        <button onClick={() => notice('这是描述', 'error')}>
          notice error
        </button>
        <button onClick={() => notice('这是描述')}>notice warning</button>
        <button onClick={() => notice('这是描述', 'error', true)}>
          notice destroy
        </button>
      </fieldset>
      <fieldset>
        <legend>errorNotice</legend>
        <button onClick={() => errorNotice('这是描述')}>errorNotice</button>
      </fieldset>
      <fieldset>
        <legend>errorNotice</legend>
        <button onClick={() => web3ErrorNotice(new Error(web3ErrorText))}>
          web3ErrorNotice
        </button>
      </fieldset>
    </div>
  );
};
```
