import { notification } from 'antd';
import { NoticeType } from 'antd/es/message/interface';
import { capitalize } from '../string';

/**
 * 防抖函数，用于延迟执行异步函数，并在延迟期间忽略新的调用。
 * @template T 返回值类型
 * @param {Function} fn 需要进行防抖处理的异步函数
 * @param {number} time 延迟时间，默认为300毫秒
 * @returns {Function} 返回一个新的函数，该函数在延迟时间内只执行一次
 */
export const debouncePromise = <T>(
  fn: (...rest: any[]) => Promise<T>,
  time = 300,
) => {
  let timer: NodeJS.Timeout;
  let promise: Promise<T> | undefined;
  let res: ((value: T | PromiseLike<T>) => void) | undefined;
  const timeoutHandle = (...args: any[]) => {
    res!(fn(...args));
    promise = undefined;
    res = undefined;
  };
  return (...args: any[]) => {
    if (!promise) {
      promise = new Promise(function (resolve) {
        res = resolve;
        timer = setTimeout(() => timeoutHandle(...args), time);
      });
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => timeoutHandle(...args), time);
    }
    return promise;
  };
};

// 粘贴
export async function getClipboardText() {
  try {
    const text = await navigator.clipboard.readText();
    return text;
  } catch (e) {
    console.log('粘贴失败', e);
  }
  return '';
}

export function throttle(func: (...rest: any[]) => void, delay = 300) {
  let lastTime = 0;
  let timer: NodeJS.Timeout;

  return function (...rest: any[]) {
    const now = Date.now();
    clearTimeout(timer);

    if (now - lastTime >= delay) {
      func(...rest);
      lastTime = now;
    } else {
      timer = setTimeout(() => {
        func(...rest);
        lastTime = now;
      }, lastTime + delay - now);
    }
  };
}

type NotifyType = Exclude<NoticeType, 'loading'>;

const notify = (
  msg: string,
  desc = '',
  type: NotifyType = 'warning',
  destroy = false,
) => {
  if (destroy) {
    notification.destroy();
  }
  notification[type]({ message: msg, description: desc });
};

export const notice = (
  msg: string,
  type: NotifyType = 'warning',
  destroy = false,
) => {
  notify(capitalize(type), msg, type, destroy);
};

function getError(error: unknown) {
  if (error instanceof Error) {
    return error;
  }
  return new Error(
    typeof error === 'object' ? JSON.stringify(error) : String(error),
  );
}

export const errorNotice = (error: unknown, destroy = false) => {
  try {
    throw getError(error);
  } catch (e: unknown) {
    if ((e as Error).message === '') {
      return;
    }
    notice((e as Error).message, 'error', destroy);
  }
};

export const web3ErrorNotice = (error: unknown, destroy = true) => {
  const e = getError(error);
  // 分割空行的正则
  const reg = /\n\s*\n/;
  errorNotice(e.message.split(reg)[0], destroy);
};
