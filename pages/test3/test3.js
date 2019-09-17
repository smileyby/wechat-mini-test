// pages/test3/test3.js
const router = require('../../routes/index.js');
Page({
  push: function (event) {
    let page = event.currentTarget.dataset.page;
    router.push({ name: page });
  },
  replace: function (event) {
    let page = event.currentTarget.dataset.replace;
    router.replace({ name: page });
  }
})