const getType = (val: any): string =>
  Object.prototype.toString.call(val).slice(8, -1).toLowerCase();

export default {
  getType,
  //  基本类型
  isNumber: (val: any) => typeof val === 'number', //  数字
  isString: (val: any) => typeof val === 'string', //  字符串
  isBoolean: (val: any) => typeof val === 'boolean', //  布尔
  isSymbol: (val: any) => typeof val === 'symbol', //  Symbol
  isBigint: (val: any) => typeof val === 'bigint', //  Bigint
  isUndefined: (val: any) => val === undefined, //  undefined
  isNull: (val: any) => val === null, //  null

  //  复合类型
  isObject: (val: any) => getType(val) === 'object', //  对象
  isArray: (val: any) => Array.isArray(val), //  数组
  isFunction: (val: any) => getType(val) === 'function', //  函数
  isPromise: (val: any) => getType(val) === 'promise', //  Promise
  isRegExp: (val: any) => getType(val) === 'regexp', //  正则
  isDate: (val: any) => getType(val) === 'date', //  时间
  isError: (val: any) => getType(val) === 'error', //  错误
  isSet: (val: any) => getType(val) === 'set', //  Set
  isMap: (val: any) => getType(val) === 'map', //  Map

  // 真假值
  isUndef: (val: any) => val === undefined || val === null, //  undefined 或者 null
  isDef: (val: any) => val !== undefined && val !== null, //  非undefined 和 非null
  isTruth: (val: any) =>
    val !== undefined &&
    val !== null &&
    val !== false &&
    val !== '' &&
    val !== 0, //  真值
  isTrue: (val: any) => val === true, //  true
  isFalse: (val: any) => val === false, //  false
};
