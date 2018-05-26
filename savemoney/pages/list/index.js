import { tbk } from '../../utils/util.js'
const app = getApp()
Page({
  data: {
    SORT: {
      popular: 'tk_total_sales_des',
      sales: 'total_sales_des',
      price: 'price_asc'
    },
    filter: {
      page_no: 1,
      page_size: 10,
      platform: 1,
      sort: 'total_sales_des',
      q: '',
      has_coupon: true
    },
    list: []
  },
  onLoad: function (option) {
    this.data.filter.q = option.search || '123'
    this.search()
  },
  onReady: function () {
  },
  nextPage() {
    this.data.filter.page_no = this.data.filter.page_no + 1
    this.search()
  },
  selectCoupon(e) {
    this.data.filter.has_coupon = !!e.detail.value.length
    this.setData({
      list: []
    })
    this.search()
  },
  toggleSort(e) {
    this.setData({
      list: []
    })
    this.data.filter.sort = e.currentTarget.dataset.sort
    this.search()
  },
  search() {
    let that = this
    this.flashFilter()
    wx.showLoading({
      title: '加载中',
    })
    tbk('taobao.tbk.sc.material.optional', that.data.filter, (d) => {
      wx.hideLoading()
      if (!d.result_list.map_data || !d.result_list.map_data.length) {
        wx.showLoading({
          title: '暂无更多',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 500)
        return false
      }
      this.setData({
        list: that.data.list.concat(d.result_list.map_data)
      })
    })
  },
  flashFilter() {
    this.setData({
      filter: this.data.filter
    })
  },
  parseInfo(v) {
    if (v) {
      console.log(v)
      return v.match(/减(\d+)元/)[1]
    }
  }
})
