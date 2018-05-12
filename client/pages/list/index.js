import { tbk } from '../../utils/util.js'
const app = getApp()
//综合（月支出佣金从高到低）
Page({
  data: {
    searchTxt: '',
    filter: {
      page: 1,
      sort: 'default'
    },
    list: []
  },
  onLoad: function (option) {
    this.setData({ searchTxt: option.search || '西瓜' })
    this.search()
  },
  onReady: function () {
  },
  load() {
    this.data.filter.page = this.data.filter.page + 1
    this.setData({
      filter: this.data.filter
    })
    this.search()
  },
  godetils(e) {
    wx.navigateTo({
      url: '../detils/index?id=' + e.target.dataset.id
    })
  },
  toggleSort(e) {
    this.setData({
      list: [],
      filter: {
        sort: e.target.dataset.sort,
        page: 1
      }
    })
    this.search()
  },
  search() {
    let that = this
    wx.showLoading({
      title: '加载中',
    })
    tbk('taobao.tbk.sc.material.optional', {

    }, (d) => {
      console.log(data)
    })
  }
})
