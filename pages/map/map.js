var QQMapWX = require('../../libs/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data: {
    houseMarker: {},
    markers: [],
    latitude: '',
    longitude: '',
    typeList: ['教育', '医院', '地铁', '公交', '银行', '休闲', '购物', '健身','美食'],
    activeType: '教育'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: '4UFBZ-GQZ66-7KGSI-E6OIA-56QV3-SIFWY'
    });
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          houseMarker: {
            iconPath: '../../static/images/icon/location.png',
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 28,
            height: 28,
          }
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let iconPath = '../../static/images/icon/education.png';
    this.searchAround('教育', iconPath);
  },
  searchType: function(e){
    let type = e.currentTarget.dataset.type;
    let iconPath = '';
    switch (type){
      case '教育': 
        iconPath = '../../static/images/icon/education.png';
        break;
      case '医院': 
        iconPath = '../../static/images/icon/hospital.png';
        break;
      case '地铁':
        iconPath = '../../static/images/icon/railway.png';
        break;
      default:
        iconPath = '../../static/images/icon/position.png'; 
    }
    this.searchAround(type, iconPath);
    this.setData({
      activeType: type
    })
  },
  searchAround: function(keyword, iconPath){
    /**
     * data [Array] 要格式化的数组
     * return [Array] 格式化后的数组
     */
    function formatData(data) {
      return data.map(item => ({
        iconPath,
        id: item.id,
        latitude: item.location.lat,
        longitude: item.location.lng,
        width: 28,
        height: 28,
        callout: {
          content: item.title,
          borderRadius: '4px',
          padding: '4px',
          display: 'BYCLICK',
          textAlign: 'center'
        }
      }))
    }
    qqmapsdk.search({
      keyword: keyword,
      success: res => {
        if (res && res.status === 0) {
          let markers = formatData(res.data);
          markers.unshift(this.data.houseMarker);
          this.setData({ markers });
        }
      },
      fail: err => {
        console.log(err);
      }
    })
  },
  markertap(e) {
    let markerId =  e.markerId;
    let markers = this.data.markers;
    let index = markers.findIndex(item => item.id === markerId);
    if (markers[index].callout.display === 'ALWAYS') return;
    let temp = `markers[${index}].callout.display`;
    this.setData({
      [temp]: 'ALWAYS'
    })
  },
  guideToLocation(){
    let data = this.data;
    wx.openLocation({
      latitude: data.latitude,
      longitude: data.longitude,
      name: '我的当前位置',
      address: '我的位置描述',
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      }
    })
  }
})