// pages/detils/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    select: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let d = JSON.parse(wx.getStorageSync('data'))
    console.log(d)
    this.setData({
      select: d.header,
      list: d.url.split(','),
      title: d.title
    })
  },

  selectImg(e){
    this.setData({ select: e.currentTarget.dataset.select})
  }
})