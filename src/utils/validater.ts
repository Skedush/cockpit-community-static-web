import moment from 'moment';

// eslint-disable-next-line no-useless-escape
const LONGITUDE_REGEXP = /^[\-\+]?(0(\.\d{1,10})?|([1-9](\d)?)(\.\d{1,10})?|1[0-7]\d{1}(\.\d{1,10})?|180(\.0{1,10})?)$/; // 经度
// eslint-disable-next-line no-useless-escape
const LATITUDE_REGEXP = /^-?((0|[1-8]?[0-9]?)(([.][0-9]{1,10})?)|90(([.][0]{1,10})?))$/; // 纬度

const IP_REGEXP =
  '^((25[0-5]|2[0-4]\\d|[1]{1}\\d{1}\\d{1}|[1-9]{1}\\d{1}|\\d{1})($|(?!\\.$)\\.)){4}$';

const PORT_REGEXP = /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/;

export function validationIP(ip: string): boolean {
  if (!ip || ip.length <= 0) {
    return false;
  }
  const arr = ip.match(IP_REGEXP);
  return !!arr;
}

export function validationPort(port: string): boolean {
  if (!port || port.length <= 0) {
    return false;
  }
  const arr = port.match(PORT_REGEXP);
  return !!arr;
}

export function validationLongitude(longitude: string): boolean {
  if (!longitude || longitude.length <= 0) {
    return false;
  }
  const arr = longitude.match(LONGITUDE_REGEXP);
  return !!arr;
}

export function validationLatitude(latitude: string): boolean {
  if (!latitude || latitude.length <= 0) {
    return false;
  }

  const arr = latitude.match(LATITUDE_REGEXP);
  return !!arr;
}

export function isLatitude(rule, value, callback) {
  if (value) {
    validationLatitude(value + '')
      ? callback()
      : callback(new Error('纬度格式不正确！'));
  } else {
    callback();
  }
}

export function isLongitude(rule, value, callback) {
  if (value) {
    validationLongitude(value + '')
      ? callback()
      : callback(new Error('经度格式不正确！'));
  } else {
    callback();
  }
}

export function isIP(rule, value, callback) {
  if (value) {
    validationIP(value) ? callback() : callback(new Error('IP格式不正确！'));
  } else {
    callback();
  }
}

export function isPort(rule, value, callback) {
  if (value) {
    validationPort(value)
      ? callback()
      : callback(new Error('端口格式不正确！'));
  } else {
    callback();
  }
}

export function timeAfterNow(rule, value, callback) {
  if (value) {
    value.isAfter(moment())
      ? callback()
      : callback(new Error('时间必须在今天之后！'));
  } else {
    callback();
  }
}

export function endTimeAfterNow(rule, value, callback) {
  if (value) {
    value[1].isAfter(moment())
      ? callback()
      : callback(new Error('结束时间必须在今天之后！'));
  } else {
    callback();
  }
}
