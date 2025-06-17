---
title: web3相关工具方法
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法            | 描述         | 入参                                                  | 返回值 |
| --------------- | ------------ | ----------------------------------------------------- | ------ |
| truncateAddress | 省略钱包地址 | `address: WalletAddress, config: TruncateConfig = {}` | 字符串 |

`TruncateConfig`

| 属性         | 描述         | 类型   | 默认值 |
| ------------ | ------------ | ------ | ------ |
| start        | 前面部分长度 | number | `6`    |
| end          | 结尾部分长度 | number | `6`    |
| replaceValue | 替换的占位符 | number | `...`  |

## 示例

```tsx
import React from 'react';
import { web3 } from '@pick48/pick48-utils';

export default () => {
  const address = '0xaF6F447b9b5083F1Eb3458A0ac0469120A511dD9';

  return (
    <div>
      <p>地址: {address}</p>
      <p>转化后: {web3.truncateAddress(address)}</p>
      <p>转化后: {web3.truncateAddress(address, { start: 2 })}</p>
      <p>转化后: {web3.truncateAddress(address, { end: 2 })}</p>
      <p>转化后: {web3.truncateAddress(address, { replaceValue: '---' })}</p>
    </div>
  );
};
```
