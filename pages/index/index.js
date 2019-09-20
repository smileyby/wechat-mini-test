//index.js
//获取应用实例
const App = getApp();
const $api = require('../../api/testRequest.js').API;
const router = require('../../routes/index.js');

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    console.log('App onLoad');
  },
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
