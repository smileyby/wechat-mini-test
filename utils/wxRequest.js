const API_BETA_URL = 'https://erp-beta.yjyz.com/';
const wxRequest = (url, method = 'GET', data={}, header={}, dataType='json', responseType='text') => {
  wx.showLoading({
    title: '加载中...',
    mask: true
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: API_BETA_URL + url,
      data: data,
      header: header,
      method: method,
      dataType: dataType,
      responseType: responseType,
      success: function(res){
        if (res.statusCode === 200) {
          resolve(res);
        } else {
          reject(res);
        }
        wx.hideLoading();
      },
      fail: function(err){
        reject(err);
        wx.hideLoading();
      }
    })
  })
}
module.exports = wxRequest;