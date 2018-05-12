const app = getApp()
Page({
  data: {
    id: 0,
    imgSrc: '',
    title: '',
    endPrice: 0,
    numb: 0,
    imageList: [],
    sPrice: 10.2,
    coupon: ''
  },
  onLoad: function (option) {
    this.setData({ id: option.id || '1006713' })
    this.init()
  },
  onReady: function () { },
  buy() {
    this.parseCoupon('￥MGW80GylRfO￥', function (data) {
      // createCoupon({
      //   url:1,
      //   logo: data.pic_url,
      //   text: content,
      //   user_id: 12
      // }, function (coupon) {
      //   console.log(coupon)
      // })

    })
  },
  parseCoupon(content, cb) {
    wx.request({
      url: `https://wx.firecloud.club/apis/tbk`,
      method: 'post',
      data: {
        "url": "taobao.wireless.share.tpwd.query",
        "data": { "password_content": content }
      },
      success: function (res) {
        cb(res.data)
      }
    })
  },
  createCoupon(obj, cb) {
    wx.request({
      url: `https://wx.firecloud.club/apis/tbk`,
      method: 'post',
      data: {
        "url": "taobao.wireless.share.tpwd.create",
        "data": {
          "tpwd_param": obj
        }
      },
      success: function (res) {
        cb(res.data)
      }
    })
  },
  init() {
    let that = this
    wx.request({
      url: `https://wx.firecloud.club/pczhe?act=wx&op=detail&id=${that.data.id}`,
      success: function (res) {
        let data = res.data.data[0]
        that.setData({
          imgSrc: data.pic_url,
          title: data.title,
          imageList: data.detail_images,
          endPrice: data.price_end,
          numb: data.volume,
          sPrice: data.quan_con ? '省￥' + data.quan_con : '促销',
          coupon: data.quan_con ? data.yh_serial : data.taobao_serial
        })
      }
    })
  }
})
