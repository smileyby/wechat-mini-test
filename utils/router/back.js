/**
 * 返回
 * @param {Object} option { detla }
 */
function back(option){
  let { delta, success, fail, complete } = option;
  delta = Number(delta);
  let opt = {
    delta, 
    success, 
    fail, 
    complete
  }
  wx.navigateBack(opt);
}
module.exports = back;