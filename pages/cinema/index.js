//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    items:[]
  },
  onLoad:function() {
    wx.request({
      url:'http://json.bmbstack.com/cinemaList',
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:(res)=> {
        console.log(res);
        this.setData({
          items:res.data
        })
      }
    })
  }
})
