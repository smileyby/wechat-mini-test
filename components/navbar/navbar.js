// component/navbar/navbar.js
const router = require('../../routes/index.js');
const App = getApp();
Component({
  properties: {
    title: {
      type: String,
      value: '',
    },
    showBack: {
      type: Boolean,
      value: false,
    },
    showHome: {
      type: Boolean,
      value: false,
    },
    showTitle: {
      type: Boolean,
      value: true,
    },
    showSearch: {
      type: Boolean,
      value: false,
    },
    searchPlaceholer: {
      type: String,
      value: '请输入查询关键词'
    }
  },
  data: {
    statusBarHeight: 0, // 状态栏的高度
    height: 0, // 导航栏的高度
    top: 0, // 导航栏内容容器距离顶部的距离
    contentHeight: 0, // 标题栏内容容器的高度
    gap: 0, // 导航栏胶囊按钮距离右侧的间距
    searchRight: 0, // 搜索框距离右侧的距离
    textMinWidth: 0, // 标题容器的最小宽度
    textMaxWidth: 0, // 标题容器的最大宽度
    textMinLeft: 0, // 标题容器距离左侧的最小距离
    textMaxLeft: 0, // 标题内容距离左侧的最大距离
    menuWidth: 0, // 胶囊按钮的宽度
    menuHeight: 0, // 胶囊按钮的高度
  },
  attached(){
    let navbarData = App.globalData.navbarData;
    let menuButtonInfo = navbarData.menuButtonInfo;
    let gap = navbarData.windowWidth - menuButtonInfo.right;
    let searchRight = menuButtonInfo.width + gap * 2;
    let textMinWidth = navbarData.windowWidth - (gap * 5 + menuButtonInfo.width * 2);
    let textMaxWidth = navbarData.windowWidth - (gap * 5 + menuButtonInfo.width + 24);
    let textMaxLeft = menuButtonInfo.width + gap * 3;
    let textMinLeft = 24 + gap * 3;
    this.setData({
      height: navbarData.navHeight,
      statusBarHeight: navbarData.statusBarHeight,
      contentHeight: menuButtonInfo.height,
      top: menuButtonInfo.top,
      menuHeight: menuButtonInfo.height,
      menuWidth: menuButtonInfo.width,
      gap,
      searchRight,
      textMinWidth,
      textMaxWidth,
      textMinLeft,
      textMaxLeft
    });
    console.log(this.data);
  },
  methods: {
    goback(){ // 返回上一页
      wx.navigateBack({fail: function(err){
        console.log(err);
      }});
    },
    gohome(){ // 返回首页
      wx.switchTab({ url: '/pages/index/index' });
    },
    gosearch(){ // 跳转搜索页面
      wx.navigateTo({ url: '/pages/test2/test2' });
    }
  }
})
