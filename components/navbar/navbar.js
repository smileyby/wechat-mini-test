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
    searchRight: 0, // 搜索按钮距离右侧的距离
    searchWidth: 0, // 搜索按钮宽度
    titleWidth: 0, // 标题宽度
    titleLeft: 0, // 标题左边距
    titleTextAlign: '', // 标题对齐方式
    buttonGroupHeight: 0, // 按钮组的高度
    buttonGroupWidth: 0, // 按钮组的宽度
    buttonGroupJustifyContent: '', // 按钮组的对齐方式 
  },
  attached(){
    this.init();
  },
  methods: {
    init(){ // 初始化插件参数
      let data = this.data;
      let navbarData = App.globalData.navbarData;
      let menuButtonInfo = navbarData.menuButtonInfo;
      let windowWidth = navbarData.windowWidth;
      let menuButtonInfoWidth = menuButtonInfo.width;
      let gap = navbarData.windowWidth - menuButtonInfo.right;

      // 计算按钮组属性
      let showTwoButton = data.showBack && data.showHome;
      let showOneButton = data.showBack || data.showHome;
      let buttonGroupWidth = showTwoButton ? menuButtonInfoWidth : showOneButton ? menuButtonInfoWidth / 2 : 0;
      let buttonGroupJustifyContent = showTwoButton ? 'space-between' : 'center';

      // 计算title属性信息
      let textMaxWidth = windowWidth - (gap * 3 + menuButtonInfoWidth);
      let textMinWidth = windowWidth - (gap * 5 + buttonGroupWidth + menuButtonInfoWidth);
      let textMaxLeft = buttonGroupWidth + gap * 3;
      let textMinLeft = gap * 2;
      let titleWidth = showTwoButton || showOneButton ? textMinWidth : textMaxWidth;
      let titleLeft = showTwoButton || showOneButton ? textMaxLeft : textMinLeft;
      let titleTextAlign = showTwoButton || showOneButton ? 'center' : 'left';

      let searchRight = menuButtonInfoWidth + gap * 2;
      let searchWidth = windowWidth - searchRight - gap;

      this.setData({
        height: navbarData.navHeight,
        statusBarHeight: navbarData.statusBarHeight,
        contentHeight: menuButtonInfo.height,
        top: menuButtonInfo.top,
        buttonGroupHeight: menuButtonInfo.height,
        buttonGroupWidth,
        buttonGroupJustifyContent,
        gap,
        searchRight,
        searchWidth,
        titleWidth,
        titleLeft,
      });
      console.log(this.data)
    },
    goback(){ // 返回上一页
      wx.navigateBack({fail: function(err){
        console.log(err);
      }});
    },
    gohome(){ // 返回首页
      wx.switchTab({ url: '/pages/index/index' });
    },
    gosearch(){ // 跳转搜索页面
      wx.navigateTo({ url: '/pages/form/form' });
    }
  }
})
