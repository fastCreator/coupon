import { tbk } from '../../utils/util.js'
Page({
  data: {
    page_size: 10,
    page_no: 1,
    favorites_id: '',
    list: [],
  },
  onLoad(options) {
    this.setData({ favorites_id: options.favorites_id })
    this.search()
  },
  nextPage() {
    this.setData({ page_no: this.data.page_no + 1 })
    this.search()
  },
  godetils(e) {
    let d = e.currentTarget.dataset
    let url = `../detils/index?num_iid=${d.num_iid}&coupon=${d.coupon}`
    if (d.coupon_click_url) {
      wx.setStorageSync('coupon_click_url', d.coupon_click_url)
      url += '&coupon_click_url=true'
    }
    wx.navigateTo({
      url: url
    })
  },
  search() {
    let that = this
    wx.showLoading({
      title: '加载中',
    })
    tbk('taobao.tbk.uatm.favorites.item.get', {
      platform: 2,
      page_size: that.data.page_size,
      favorites_id: that.data.favorites_id,
      fields: 'coupon_click_url,coupon_info,num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick,shop_title,zk_final_price_wap,event_start_time,event_end_time,tk_rate,status,type',
      page_no: that.data.page_no
    }, (d) => {
      wx.hideLoading()
      if (!d.results.uatm_tbk_item || !d.results.uatm_tbk_item.length) {
        wx.showLoading({
          title: '暂无更多',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 500)
        return false
      }
      d.results.uatm_tbk_item.forEach(it => {
        if (it.coupon_info) {
          it.coupon = it.coupon_info.match(/减(\d+)元/)[1] + '元劵'
        }
      })
      this.setData({
        list: that.data.list.concat(d.results.uatm_tbk_item)
      })
    })

  }
})