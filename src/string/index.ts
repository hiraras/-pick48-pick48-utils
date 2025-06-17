import { TruncateConfig } from '@pick48-utils/type';

export const truncate = (str: string, config: TruncateConfig = {}) => {
  const { start = 6, end = 6, replaceValue = '...' } = config;
  const exp = new RegExp(`(?<=^.{${start}}).+(?=.{${end}}$)`);
  return str.replace(exp, replaceValue);
};
