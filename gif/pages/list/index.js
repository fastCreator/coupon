import { tbk } from '../../utils/util.js'
const app = getApp()
Page({
  data: {
    sort:0,
    min_id:-1,
    list: [],
    filter:{},
    navs: ['综合','券后价','销售','超优惠']
  },
  onLoad: function (option) {
    this.setData({filter:option})
    this.nextPage()
  },
  nextPage() {
    let url = ''
    if (this.data.filter.keyword){
      url = 'get_keyword_items'
    }
    if (this.data.filter.nav) {
      url = 'get_sub_nav_items'
    }
    if (this.data.filter.column_type) {
      url = 'get_column_items'
    }
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://wx.firecloud.club/haodanku/app/' + url ,
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: Object.assign({
        min_id: this.data.min_id,
        isonline: 1,
        cid:-1,
        sort:this.data.sort
      },this.data.filter),
      success: (res) => {
        wx.hideLoading()
        this.setData({
          list: this.data.list.concat(res.data.data),
          min_id: res.data.min_id
        })
      }
    })
  },
  toggleSort(e) {
    this.setData({
      list: [],
      min_id:-1,
      sort: e.target.dataset.index
    })
    this.nextPage()
  }
})
