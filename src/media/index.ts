import QRCode from 'qrcode';

export const MEDIA_BASE_URL = 'https://static.meet48.xyz';

export async function getQrCode(text?: string) {
  if (!text) {
    return '';
  }
  const data = await QRCode.toDataURL(text);
  return data;
}

export function getMediaSrc(src?: string) {
  if (!src) {
    return undefined;
  }
  if (src.startsWith('http') || src.startsWith('//')) {
    return src;
  }
  // base64 格式的媒体url
  if (/^data:.*;base64,/.test(src)) {
    return src;
  }
  return `${MEDIA_BASE_URL}/${src}`;
}

// 读取文件转为url
export async function readFileToDataURL(file: File): Promise<string> {
  if (!file) {
    return '';
  }
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const imageUrl = event.target.result;
      resolve(imageUrl);
    };
    reader.onerror = (error: any) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

function padZero(num: number) {
  return `${num}`.padStart(2, '0');
}

// 将媒体时间转化为 `00:00:00` 的格式
export function convertMediaDuration(duration: number) {
  const d = Math.floor(duration);
  const hour = Math.floor(d / 3600);
  const minutes = Math.floor((d - hour * 3600) / 60);
  const second = d % 60;
  const ph = padZero(hour);
  const pm = padZero(minutes);
  const ps = padZero(second);
  if (d >= 3600) {
    return `${ph}:${pm}:${ps}`;
  }
  return `${pm}:${ps}`;
}

// 通过url获得视频对象的时长
export function getVideoDurationByURL(url: string): Promise<number> {
  if (!url) {
    console.log('url not exist');
    return Promise.resolve(0);
  }
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.src = getMediaSrc(url)!;
    video.addEventListener('loadedmetadata', () => {
      resolve(video.duration);
      video.remove();
    });
    video.addEventListener('error', () => {
      resolve(0);
      video.remove();
    });
    document.body.appendChild(video);
  });
}
