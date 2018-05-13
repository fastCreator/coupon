import { tbk } from '../../utils/util.js'
const app = getApp()
//综合（月支出佣金从高到低）
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
      platform:1,
      sort: 'tk_total_sales_des',
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
    this.data.filter.page = this.data.filter.page + 1
    this.search()
  },
  godetils(e) {
    let d = e.currentTarget.dataset
    wx.navigateTo({
      url: `../detils/index?num_iid=${d.num_iid}&coupon_id=${d.coupon_id}&coupon=${d.coupon}`
    })
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
      if (!d.result_list.map_data || !d.result_list.map_data) {
        wx.showLoading({
          title: '暂无更多',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 500)
        return false
      }
      d.result_list.map_data.forEach(it => {
        if (it.coupon_info) {
          it.coupon = it.coupon_info.match(/减(\d+)元/)[1] + '元劵'
        }
      })
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
