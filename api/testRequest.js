// 测试请求js
// 这里微信端登录应该是区别于pc端，微信登录或手机注册登录
const wxRequest = require('../utils/wxRequest.js');
const API = {
  getUserInfo: params => {
    return wxRequest('api/erp.settings.api/generalStatistics/dict', 'GET', params, { 
      Authorization: 'eyJhbGciOiJSUzI1NiJ9.eyJkdCI6InBjX3dlYiIsInR0IjoiMSIsInN1YiI6IjYxOTA2Njg3MzM5MzkzODQzMiIsIlVOb25jZSI6ImFjYWMxNmZmLWYyZDQtNGM1My1iYjM1LTAyNmFhZWZhMjk5NSwxMTJiYzY1OC0yOWZiLTQ2ZDMtYmU1MS05MDhhNWI0MmVmNDAiLCJyb2xlIjoiNTg1MDE0NjQyNzE3OTgyNzIwIiwiaXNzIjoieWp5ei5jb20iLCJleHAiOjE1Njg3NzU0MDIsImlhdCI6MTU2ODYwMjYwMiwianRpIjoiOTIwM2RjOTEtMmM0Ny00Nzc2LTkxMzgtZDQ0YTdkNDk0N2M4In0.WYTNIhMnA2jpfLl2RdjqAEvxav5ahZT2vKFUrxxKhXIYsAVRlQHo7t417MG0anQ8eHQpV8IAjXW_3BN9H2LDor1VOqIfK_gz8dUpaR_tLUt7cX9FdE1LyZKgIocOIANl69CcP6ey5pj2LKn2lsi6vBwsj4OM_fK1GVqQQgAf5Oo', 
      'X-Organ-Id': '552692373611008128', 
      'X-City-Code': '450100', 
      "Content-Type": "application/json;charset=UTF-8", 
      'X-Requested-With': 'XMLHttpRequest', 
      'Cache-Control': 'no-cache'
      });
  }
}

module.exports = {API}