// pages/test4/test4.js
const router = require('../../routes/index.js');
Page({
  push: function (event) {
    let page = event.currentTarget.dataset.page;
    router.push({ name: page });
  },
  replace: function (event) {
    let page = event.currentTarget.dataset.replace;
    router.replace({ name: page });
  },
  back: function (event) {
    let index = event.currentTarget.dataset.index;
    console.log({index});
    router.back({ delta: index });
  },
  reLaunch: function (event) {
    let page = event.currentTarget.dataset.page;
    router.relaunch({ name: page });
  }
})