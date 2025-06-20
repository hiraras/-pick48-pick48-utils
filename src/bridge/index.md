---
title: bridge - dapp通信方法
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法                | 描述                                                                                                  | 入参                                                            | 返回值 |
| ------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------ |
| setupBridge         | 设置与 dapp 的通信 bridge，bridge 作为回调的参数                                                      | `callback: (...rest: any[]) => void`                            | /      |
| callBridge          | 调用 dapp 提供的方法                                                                                  | `eventName: string,args: any, callback: (...rest: any) => void` | /      |
| registerBridgeEvent | 注册 web 事件，供 dapp 调用                                                                           | `eventName: string, callback: (...rest: any) => void`           | /      |
| goBack              | 返回客户端页面，目前安卓固定退出 webview，ios 若 toRoot 为 1 则退出 webview，否则类似浏览器的返回按钮 | `toRoot = 1`                                                    | /      |
| hideHeaderBar       | 隐藏原生的头部栏                                                                                      | /                                                               | /      |
| logoff              | 通知客户端注销用户                                                                                    | /                                                               | /      |

## 示例

```tsx
import React from 'react';
import { bridge } from '@pick48/pick48-utils';

export default () => {
  const { goBack } = bridge;
  return (
    <div>
      <button onClick={goBack}>go back</button>
    </div>
  );
};
```
