//index.js
//获取应用实例
const App = getApp();
const $api = require('../../api/testRequest.js').API;
const router = require('../../routes/index.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navHeight: 0
  },
  onLoad: function () {},
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  push: function(event){
    let page = event.currentTarget.dataset.page;
    router.push({ name: page});
  },
  replace: function(event){
    let page = event.currentTarget.dataset.replace;
    router.replace({name: page});
  }
})
