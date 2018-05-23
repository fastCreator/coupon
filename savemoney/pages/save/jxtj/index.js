import { tbk } from '../../utils/util.js'
Page({
  data: {
    page_size: 10,
    page_no: 1,
    q: '',
    list: [],
  },
  onLoad: function (options) {

  },
  onReady: function () {
    this.search()
  },
  nextPage: function () {
    this.setData({ page_no: this.data.page_no + 1 })
    this.search()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  godetils(e) {
    let d = e.currentTarget.dataset
    wx.navigateTo({
      url: `../detils/index?num_iid=${d.num_iid}&coupon_id=${d.coupon_id}&coupon=${d.coupon}`
    })
  },
  search() {
    let that = this
    wx.showLoading({
      title: '加载中',
    })
    tbk('taobao.tbk.dg.item.coupon.get', {
      platform: 2,
      page_size: that.data.page_size,
      q: that.data.q,
      page_no: that.data.page_no
    }, (d) => {
      wx.hideLoading()
      if (!d.results.tbk_coupon || !d.results.tbk_coupon.length) {
        wx.showLoading({
          title: '暂无更多',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 500)
        return false
      }
      d.results.tbk_coupon.forEach(it => {
        if (it.coupon_info) {
          it.coupon = it.coupon_info.match(/减(\d+)元/)[1] + '元劵'
        }
      })
      this.setData({
        list: that.data.list.concat(d.results.tbk_coupon)
      })
    })

  },
  inputValue(e) {
    this.setData({
      q: e.detail.value
    })
  },
  btnSearch() {
    this.setData({
      list: []
    })
    this.search()
  }
})