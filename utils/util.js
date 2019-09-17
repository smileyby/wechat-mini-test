const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 编码
 * @param {Object} data
 */
function encode(data) {
  return encodeURIComponent(JSON.stringify(data));
}

/**
 * 解码
 * @param {Object} code
 */
function decode(code) {
  return JSON.parse(decodeURIComponent(code));
}

/**
 * query化
 * @param {Object} obj
 */
function querify(obj) {
  return Object.keys(obj).map((k) => {
    const v = obj[k];
    return `${k}=${v}`;
  }).join('&');
}

/**
 * 检测数据类型
 * @return {String} 返回数据类型函数
 */
function check(){
  var obj = {
    isNumber: 'Number',
    isString: 'String',
    isBoolean: 'Boolean',
    isNull: 'Null',
    isUndefined: 'Undefined',
    isPlanObject: 'Obejct',
    isArray: 'Array',
    isRegExp: 'RegExp',
    isFunction: 'Function'
  };
  var checkType = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var value = obj[key];
      check[key] = (function (classValue) {
        return function (val) {
          return new RegExp('\\[object ' + classValue + '\\]').test(Object.prototype.toString.call(val));
        }
      })(obj[key]);
    }
  }
  return checkType;
}
const checkType = check();

module.exports = {
  formatTime,
  encode,
  decode,
  querify,
  checkType
}
