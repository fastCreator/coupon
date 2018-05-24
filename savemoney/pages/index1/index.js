const app = getApp()
import utils from '../../utils/util.js'
Page({
  data: {
    list: [],
    page: 0,
    search: '',
    no: false
  },
  onReady() {
  },
  onLoad() {
    wx.request({
      url: 'https://wx.firecloud.club/apis/issh',
      success: (res) => {
        if (!res.data) {
          wx.reLaunch({
            url: '../index/index',
          })
        } else {
          this.search()
        }
      }
    })
  },
  search() {
    if (this.data.no) {
      wx.showLoading({
        title: '暂无更多',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 500)
      return false
    }
    wx.showLoading({
      title: '加载中',
    })
    utils.imgs({ page: this.data.page, search: this.data.search }, (d) => {
      wx.hideLoading()
      d.data.forEach(it => {
        it.header = it.url.slice(0, it.url.indexOf(','))
      })
      this.setData({ list: this.data.list.concat(d.data) })
      if (d.data.length < 12) {
        this.setData({ no: true })
      }
    })
  },
  next() {
    this.setData({ page: this.data.page + 1 })
    this.search()
  },
  searchOk() {
    this.setData({ no: false })
    this.setData({ page: 0, list: [] })
    this.search()
  },
  inputTyping(e) {
    this.setData({ search: e.detail.value })
  },
  clearInput() {
    this.setData({ search: '' })
  },
  go(e) {
    let d = this.data.list[e.currentTarget.dataset.index]
    wx.setStorageSync('data', JSON.stringify(d))
    wx.navigateTo({
      url: '../detils1/index',
    })
  }
})
