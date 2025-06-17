---
title: media - 媒体
nav:
  title: 工具库
  path: /utils
group:
  title: 工具库
  path: /utils
---

## 文档

| 方法                  | 描述                           | 入参               | 返回值            |
| --------------------- | ------------------------------ | ------------------ | ----------------- |
| getQrCode             | 将字符串转为二维码地址         | `text?: string`    | `Promise<string>` |
| getMediaSrc           | 获取完整的媒体地址             | `src?: string`     | `string`          |
| readFileToDataURL     | 读取文件转为临时 url           | `file: File`       | `Promise<string>` |
| convertMediaDuration  | 将时间转化为 `00:00:00` 的格式 | `duration: number` | `string`          |
| getVideoDurationByURL | 通过 url 获得视频对象的时长    | `url: string`      | `Promise<number>` |

## getQrCode 示例

```tsx
import React, { useState } from 'react';
import { media } from '@pick48/pick48-utils';

const { getQrCode } = media;

export default () => {
  const [url, setUrl] = useState('');
  async function handleGetQrCode(str = '123456789') {
    setUrl(await getQrCode(str));
  }
  return (
    <div>
      <div>{url && <img src={url} />}</div>
      <button onClick={() => handleGetQrCode()}>获取qrcode</button>
    </div>
  );
};
```

## getMediaSrc 示例

```tsx
import React, { useState } from 'react';
import { media } from '@pick48/pick48-utils';

const { getMediaSrc } = media;

export default () => {
  return (
    <div>
      <div>{getMediaSrc('http://www.abc.com')}</div>
      <div>{getMediaSrc('zzz/abc.png')}</div>
    </div>
  );
};
```

## readFileToDataURL 示例

```tsx
import React, { useState } from 'react';
import { media } from '@pick48/pick48-utils';

const { readFileToDataURL } = media;

export default () => {
  const [url, setURL] = useState('');
  async function handleChange(e) {
    const url = await readFileToDataURL(e.target.files[0]);
    setURL(url);
  }
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <div style={{ marginTop: 20 }}>url:</div>
      <div style={{ wordBreak: 'break-all', marginTop: 20 }}>{url}</div>
    </div>
  );
};
```

## convertMediaDuration 示例

```tsx
import React, { useState } from 'react';
import { media } from '@pick48/pick48-utils';

const { convertMediaDuration } = media;

export default () => {
  return <div>{convertMediaDuration(2000)}</div>;
};
```

## getVideoDurationByURL 示例

```tsx
import React, { useState } from 'react';
import { media } from '@pick48/pick48-utils';

const { getVideoDurationByURL, readFileToDataURL } = media;

export default () => {
  const [url, setURL] = useState('');
  const [duration, setDuration] = useState(0);
  async function handleChange(e) {
    const url = await readFileToDataURL(e.target.files[0]);
    setURL(url);
    const duration = await getVideoDurationByURL(url);
    console.log(duration);
    setDuration(duration);
  }
  return (
    <div>
      <input type="file" onChange={handleChange} placeholder="请选择视频" />
      <div style={{ margin: '20px 0' }}>duration: {duration}</div>
      {url && <video src={url} width="600" controls></video>}
    </div>
  );
};
```
