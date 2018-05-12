const app = getApp()
Page({
  data: {
    imgUrls: [
      {
        img: "http://img.alicdn.com/tps/TB1_UFmOXXXXXc4aXXXXXXXXXXX-794-320.png",
      },
      {
        img: "http://img.alicdn.com/tps/TB1fztJOXXXXXcfXpXXXXXXXXXX-794-320.png"
      },
      {
        img: "http://img.alicdn.com/tps/TB1gKlIOXXXXXcJXpXXXXXXXXXX-794-320.png"
      }
    ],
    imageHeight: 0.387*wx.getSystemInfoSync().windowWidth
  },
  onLoad() { },
  onReady() {  
  },
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
