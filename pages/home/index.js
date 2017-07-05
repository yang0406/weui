// 一个页面由wxml  wxss js mvc 组成
// 数据模型层
let app = getApp()
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 1000,
    duration: 1200,
    items: [],
    images: []
  },
  onLoad: function () {
    // 发送请求，获取数据
    console.log('onLoad');
    // wx 是 weixin
    let that = this;
    wx.request({
      url: 'http://json.bmbstack.com/playingList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          items: res.data
        })
      }
    })
    wx.request({
      url: 'http://json.bmbstack.com/bannerList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        // setData 设置数据
        // 强制页面刷新
        that.setData({
          images: res.data
        })
      }
    })
  },
  swiperchange: function (e) {
    // console.log(e.detail.current);
  },
  bindViewTap: function (e) {
    console.log('item clicked');
  }
})