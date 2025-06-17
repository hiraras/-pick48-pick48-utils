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
    return String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${divider}`);
  },
};
