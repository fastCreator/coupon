import { tbk, copy } from '../../utils/util.js'
const app = getApp()
Page({
  data: {
    banners: [],
    navs: [],
    categories: [],
    favorites: [],
    fqcats: [],
    min_id: 0,
    cid: 0,
    searchList: ['全部', '女装', '男装', '内衣', '美妆', '配饰', '鞋品', '箱包', '儿童', '母婴', '居家', '美食', '数码', '家电']
  },
  onLoad() {
    this.get_banner()
    this.get_nav()
    this.get_categories()
    this.get_fqcat_items()
  },
  onReachBottom: function () {
    this.get_fqcat_items()
  },
  gocid(e) {
    this.setData({
      min_id: 0,
      fqcats: [],
      cid: e.target.dataset.index
    })
    this.get_fqcat_items()
  },
  get_banner() {
    wx.request({
      url: 'https://wx.firecloud.club/hykefu/api_get_banner',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        seller_id: 76233,
        version: '1.3.0'
      },
      success: (res) => {
        this.setData({
          banners: res.data
        })
      }
    })
  },
  get_nav() {
    wx.request({
      url: 'https://wx.firecloud.club/hykefu/api_get_nav',
      success: (res) => {
        this.setData({
          navs: res.data.datainfo
        })
      }
    })
  },
  get_categories() {
    wx.request({
      url: 'https://wx.firecloud.club/hykefu/api_get_categories',
      success: (res) => {
        this.setData({
          categories: res.data
        })
      }
    })
  },
  get_fqcat_items() {
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://wx.firecloud.club/haodanku/app/get_fqcat_items',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        min_id: this.data.min_id,
        cid: this.data.cid,
        isonline: 1
      },
      success: (res) => {
        wx.hideLoading()
        this.setData({
          fqcats: this.data.fqcats.concat(res.data.data),
          min_id: res.data.min_id
        })
        console.log(this.data.fqcats)
      }
    })
  },
  onReady() {

  },
  toSearch() {
    wx.navigateTo({
      url: '../search-n/index'
    })
  },
  goList(e) {
    let str = ''
    let v = e.currentTarget.dataset
    for (let key in v) {
      str = key + '=' + v[key]
    }
    wx.navigateTo({
      url: '../list/index?' + str
    })
  }
})
