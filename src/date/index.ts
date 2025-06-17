import dayjs from 'dayjs';

type FormatConfig = {
  format?: string;
  offset?: number;
};

export default {
  // 格式化时间 默认UTC时间
  formatTime(timestamp: number, config: FormatConfig = {}) {
    const { format = 'YYYY-MM-DD HH:mm:ss', offset = -8 } = config;
    return dayjs(timestamp).add(offset, 'hour').format(format);
  },
};
