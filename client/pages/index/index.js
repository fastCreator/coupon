const app = getApp()
Page({
  data: {},
  onLoad: function () { },
  onReady: function () { },
  toSearch:function(){
    wx.navigateTo({
      url: '../search/index'
    })
  }
})
