const app = getApp()
import utils from '../../utils/util.js'
Page({
  data: {
    nlist: [],
    list: [],
    page: 0,
    search: '',
    no: false
  },
  onLoad() {
    this.nsearch()
    this.search()
  },
  nsearch() {
    let page = ~~(Math.random() * 46)
    utils.imgs({ page: page }, (d) => {
      if (~~(Math.random() * 2)){
        d.data = d.data.slice(0, 6)
      }else{
        d.data = d.data.slice(6)
      }
      d.data.forEach(it => {
        it.header = it.url.slice(0, it.url.indexOf(','))
      })
      this.setData({ nlist: d.data })
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
    this.searchOk()
  },
  go(e) {
    let d = this.data.list[e.currentTarget.dataset.index]
    wx.setStorageSync('data', JSON.stringify(d))
    wx.navigateTo({
      url: '../detils/index',
    })
  },
  gon(e) {
    let d = this.data.nlist[e.currentTarget.dataset.index]
    wx.setStorageSync('data', JSON.stringify(d))
    wx.navigateTo({
      url: '../detils/index',
    })
  },
  goH(){
    wx.navigateToMiniProgram({
      appId: 'wx6883d65f70fecd8a',
      path: 'pages/index/index'
    })
  }
})
