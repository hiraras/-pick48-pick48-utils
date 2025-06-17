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
