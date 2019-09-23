var QQMapWX = require('../../libs/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultAvator: '../../static/images/icon/default_avator.png',
    latitude: '',
    longitude: '',
    markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: '4UFBZ-GQZ66-7KGSI-E6OIA-56QV3-SIFWY'
    });
    wx.getLocation({
      success: res => {
        let latitude = res.latitude;
        let longitude = res.longitude;
        this.setData({
          latitude,
          longitude,
          markers: [{
            id: 0,
            latitude,
            longitude,
            iconPath: '../../static/images/icon/circle.png',
            width: 28,
            height: 28,
            callout: {
              content: '我的家园',
              color: '#000',
              borderRadius: '4px',
              fontSize: '24rpx',
              padding: '30rpx',
              display: 'ALWAYS'
            }
          }]
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  push: function(){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  }
})