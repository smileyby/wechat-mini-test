const { routeMap, encodeKey } = require('./store.js');
const { encode, querify } = require('../util.js');

/**
 * function
 * @param {Obejct} routeObj { name, data, success, fail, complete }
 * @param {ObBoolean} isReplace 是否时重定向
 */
const forward = (routeObj = {}, isReplace = false) => {
  // 页面中解析的时候需要调用extract(options.encodeQuery)
  const { name, data, query, success, fail, complete } = routeObj;
  let url = '';
  const queryData = query || {};
  if (!name) {
    throw new Error('路由名称不能为空');
  }
  const route = routeMap[name];
  if (!route) {
    throw new Error('没有匹配到路由规则');
  }
  url = route.path;
  if (data) {
    queryData[encodeKey] = encode(data);
  }
  if (route.type !=='tab') {
    url += `?${querify(queryData)}`;
  }
  const opt = {
    url,
    success,
    fail, 
    complete
  }
  if (!url) {
    throw new Error('路由url不能位空');
  }
  if (isReplace) {
    wx.redirectTo(opt);
    return;
  }
  if (route.type === 'tab') {
    wx.switchTab(opt);
  } else {
    console.log(opt);
    wx.navigateTo(opt);
  }
}

/**
 * 前进
 * @param {object} option
 */
function push(option) {
  return forward.call(this, option);
}

/**
 * 替换
 * @param {object} option
 */
function replace(option) {
  return forward.call(this, option, true);
}

module.exports = {
  push,
  replace,
};