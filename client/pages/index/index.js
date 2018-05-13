import { tbk } from '../../utils/util.js'
const app = getApp()
Page({
  data: {
    imgUrls: [
      {
        img: "http://img.alicdn.com/tps/TB1_UFmOXXXXXc4aXXXXXXXXXXX-794-320.png",
      },
      {
        img: "http://img.alicdn.com/tps/TB1fztJOXXXXXcfXpXXXXXXXXXX-794-320.png"
      },
      {
        img: "http://img.alicdn.com/tps/TB1gKlIOXXXXXcJXpXXXXXXXXXX-794-320.png"
      }
    ],
    imageHeight: 0.387 * wx.getSystemInfoSync().windowWidth,
    favorites: []
  },
  onLoad() { },
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
      url: '../search/index'
    })
  },
  theme(e) {

    wx.navigateTo({
      url: '../them/index?favorites_id=' + this.data.favorites.find(it => it.favorites_title === e.currentTarget.dataset.type).favorites_id
    })
  }
})
