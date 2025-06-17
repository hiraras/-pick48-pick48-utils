import { TruncateConfig } from '@pick48-utils/type';

export const truncate = (str: string, config: TruncateConfig = {}) => {
  const { start = 6, end = 6, replaceValue = '...' } = config;
  const exp = new RegExp(`(?<=^.{${start}}).+(?=.{${end}}$)`);
  return str.replace(exp, replaceValue);
};

export function getStringLength(str: string) {
  const zhReg = /[\u4e00-\u9fa5]+/g;
  const zhWords = str.match(zhReg) ?? ([] as string[]);
  const zhLen = zhWords.reduce((prev, word) => prev + word.length, 0);
  const otherLen = str.length - zhLen;
  const lastLen = zhLen * 2 + otherLen;
  return lastLen;
}
