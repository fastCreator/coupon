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
    wx.request({
      url: `https://wx.firecloud.club/pczhe?act=wx&op=search&page=${this.data.filter.page}&pagesize=10&k=${this.data.searchTxt}&sort=${this.data.filter.sort}`, //仅为示例，并非真实的接口地址
      success: function (res) {
        wx.hideLoading()
        if (!res.data.data) {
          wx.showLoading({
            title: '暂无更多',
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 500)
          return false
        }
        res.data.data.forEach(it => {
          if (it.quan_con) {
            it.coupon = it.quan_con + '元劵'
          } else {
            it.coupon = "促"
          }
          if (it.quan_con) {
            it.endprice = '劵后：￥' + it.price_end
          } else {
            it.endprice = '促销价：￥' + it.price_end
          }
        })
        that.setData({ list: that.data.list.concat(res.data.data) })
      }
    })
  }
})
