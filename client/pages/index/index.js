const app = getApp()
Page({
  data: {},
  onLoad() { },
  onReady() { },
  toSearch() {
    wx.navigateTo({
      url: '../search/index'
    })
  },
  theme(e) {
    wx.navigateTo({
      url: '../list/index'
    })
    console.log(e.target.dataset.type)
  }
})
