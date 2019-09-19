## API请求封装

* 编译器设置：微信小程序合法域名配置-不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书
* 基于promise封装wx.request请求
* api 所有api请求都放在api文件夹下，以页面位单位创建js文件

## 路由封装

* routes 文件夹存放路由文件

## 组件封装

* 要解决的问题
  * 每次使用路由时，总是黏贴复制路径，这样在路径修改时，需要修改所有用到该路径的地方，维护成本高
  * 路由跳转时拼接的参数然人头大，业务复杂时需要拼接十几个参数
  * 路由返回，只会返回一层，不能直接返回到目标页面，因为不知道目标页面是否在路由栈中，也不知道在第几层
* 使用router.js 对路由进行统一管理
* 使用routeMap对路由path做反映射
* navigateBack 方法职能返回 navigateTo 做跳转的路由

### 路由对应关系

```
// router => routes.index.js
router.push => wx.switchTab/wx.navigateTo
router.replace => wx.redirectTo
router.back => wx.navigateBack
reouter.relaunch = wx.reLaunch
```

## 对路由封装组件做测试

* 已完成

## 自定义tabBar

```javascript
wx.getMenuButtonBoundingClientRect(); // 获取小程序胶囊位置
wx.getSystemInfoSync()['statusBarHeight'] // 获取状态栏位置
// 需要注意的是，微信编辑器，基础库版本默认为2.0.1需要手动修改
```

