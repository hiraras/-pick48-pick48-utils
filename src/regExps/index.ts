const regs = {
  regPhone: /^1[3456789]\d{9}$/, //  手机号
  regEmail:
    /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/, //  邮箱
  regIdCard:
    /^[1-9]d{5}(18|19|([23]d))d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{3}[0-9Xx]$/, //  身份证
  regIdCar:
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/, //  车牌
  regChinese: /[\u4E00-\u9FA5]/, //  中文
  regUrl:
    /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i, //  url
};

export default {
  regs,
  setFlags: (reg: RegExp, flags: string) => new RegExp(reg, flags),
  isPhone: (s: string) => regs.regPhone.test(s),
  isEmail: (s: string) => regs.regEmail.test(s),
  isIdCard: (s: string) => regs.regIdCard.test(s),
  isIdCar: (s: string) => regs.regIdCar.test(s),
  isChinese: (s: string) => regs.regChinese.test(s),
  isUrl: (s: string) => regs.regUrl.test(s),
};
