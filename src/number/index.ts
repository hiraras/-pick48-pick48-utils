export default {
  convertBytes: (size = 0, unit = 'B', precision = 2) => {
    const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const INTERVAL = 1024;
    const index = UNITS.indexOf(unit.toLocaleUpperCase());
    if (index < 0 || size === 0) {
      return { size, unit };
    }
    const offset = Math.floor(Math.log(size) / Math.log(INTERVAL));
    const step = 10 ** precision;
    const sizeVal = Math.floor((size / 1024 ** offset) * step) / step;
    const unitVal = UNITS[index + offset];
    return {
      size: sizeVal,
      unit: unitVal,
      result: `${sizeVal}${unitVal}`,
    };
  },
  divideNum: (num: number, divider = ','): string => {
    const numberParts = num.toString().split('.');
    numberParts[0] = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, divider);
    return numberParts.join('.');
  },
  round(num: number, accuracy = 0) {
    return Math.round(num * 10 ** accuracy) / 10 ** accuracy;
  },
  // 生成随机整数 包括 start 和 end
  getRandomInteger(start = 0, end = 100) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  },
  // 获取数字精度
  getNumberPrecision(num: number) {
    const match = `${num}`.match(/\.\d+/g);
    return match ? match[0].length - 1 : 0;
  },
};
