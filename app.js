//app.js
App({
  onLaunch: function () {
    this.getNavHeight();
  },
  getNavHeight(){ // 获取导航栏信息
    const { statusBarHeight, windowWidth } = wx.getSystemInfoSync();
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    const navPadding = menuButtonInfo.top - statusBarHeight;
    const navHeight = menuButtonInfo.height + navPadding * 2 + statusBarHeight;
    this.globalData.navbarData = {
      statusBarHeight,
      windowWidth,
      navHeight,
      menuButtonInfo,
    }
  },
  globalData: {
    userInfo: null,
    navbarData: {}
  }
})