// pages/test2/test2.js
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
    let data = event.currentTarget.dataset;
    let index = data.index;
    console.log(getCurrentPages());
    router.back({delta: index});
  }
})