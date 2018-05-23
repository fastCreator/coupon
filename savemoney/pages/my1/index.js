const app = getApp()
import utils from '../../utils/util.js'
Page({
  data: {
    list: [],
    page: 0,
    search: '',
    first:true
  },
  onLoad() {
    // this.search()
  },
  onShow() {
    this.search()
  },
  search() {
    if (wx.getStorageSync('nochange') === '1' && !this.data.first) {
      return false
    }
    this.setData({ first:false})
    wx.setStorageSync('nochange', '1')
    wx.showLoading({
      title: '加载中',
    })
    utils.imgs({ ids: wx.getStorageSync('collect') }, (d) => {
      wx.hideLoading()
      d.data.forEach(it => {
        it.header = it.url.slice(0, it.url.indexOf(','))
      })
      this.setData({ list: d.data })
    })
  },
  next() {
    this.setData({ page: this.data.page + 1 })
    this.search()
  },
  searchOk() {
    this.setData({ page: 0, list: [] })
    this.search()
  },
  inputTyping(e) {
    this.setData({ search: e.detail.value })
  },
  clearInput() {
    this.setData({ search: '' })
  },
  preview(e) {
    console.log(e)
    let img ="https://wx.firecloud.club/static/goodicon.png"
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: [img] // 需要预览的图片http链接列表
    })
  },
  go(e) {
    let d = this.data.list[e.currentTarget.dataset.index]
    wx.setStorageSync('data', JSON.stringify(d))
    wx.navigateTo({
      url: '../detils/index',
    })
  }
})
