import { tbk } from '../../utils/util.js'
Page({
  data: {
    info: [],
    active:0
  },
  onLoad: function (options) {
    this.getlist()
  },
  onReady: function () {

  },
  nextPage: function () {

  },
  select(e){
    this.setData({
      active: e.currentTarget.dataset.index
    })
  },
  getlist() {
    wx.request({
      url: 'https://wx.firecloud.club/haodanku/app/get_classify',
      success: (res) => {
        let re = [{ cid: 0, main_name: '热门', data: res.data.hot_classify.data}]
        let o = re.concat(res.data.general_classify)
        this.setData({
          info: o
        })
        console.log(o)
      }
    })
  },
  god(e){
    wx.navigateTo({
      url: `../list/index?keyword=${e.currentTarget.dataset.keyword}`
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})