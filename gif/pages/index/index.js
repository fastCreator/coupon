import { tbk, copy } from '../../utils/util.js'
const app = getApp()
Page({
  data: {
    imgUrls: [],
    imageHeight: 0.387 * wx.getSystemInfoSync().windowWidth,
    favorites: []
  },
  onLoad() {
    this.getImageUrls()
  },
  getImageUrls() {
    let that = this
    wx.request({
      url: 'https://wx.firecloud.club/apis/imgUrls',
      success: function (res) {
        that.setData({
          imgUrls: res.data
        })
      }
    })
  },
  onReady() {
    tbk('taobao.tbk.uatm.favorites.get', {
      fields: 'favorites_title,favorites_id,type',
      type: '-1'
    }, (d) => {
      this.setData({ favorites: d.results.tbk_favorites })
    })
  },
  toSearch() {
    wx.navigateTo({
      url: '../search-n/index'
    })
  },
  hd(e) {
    let d = this.data.imgUrls[e.currentTarget.dataset.index].clip
    let clip = `
      ${d.title}
      淘口令:${d.kl}
      活动地址：${d.dlj}
      `
    copy(clip, function () {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: `活动[${d.title}]链接复制成功，通过浏览器打开或者手动打开淘宝自动跳转；遇到延迟，请点击淘宝顶部搜索即可`
      })
    })
  },
  theme(e) {

    wx.navigateTo({
      url: '../them/index?favorites_id=' + this.data.favorites.find(it => it.favorites_title === e.currentTarget.dataset.type).favorites_id
    })
  }
})
