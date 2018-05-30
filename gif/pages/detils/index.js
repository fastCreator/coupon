import { tbk, copy } from '../../utils/util.js'
const app = getApp()
Page({
  data: {
    shop: {}
  },
  onLoad: function (option) {
    if (option.id) {
      wx.request({
        url: `https://wx.firecloud.club/haodanku/Hltaoke/couponinfo?itemid=${option.id}`,
        success: (res) => {
          this.setData({ 'shop': res.data })
        }
      })
    } else {
      this.setData({ 'shop': wx.getStorageSync('shop') })
    }
  },
  onReady: function () { },
  onShareAppMessage: function (res) {
    return {
      imageUrl: this.data.shop.itempic,
      title: this.data.shop.itemtitle,
      path: `/pages/detils/index?id=${res.target.id}`
    }
  },
  gohome() {
    wx.reLaunch({
      url: '../index/index'
    })
  },
  share() {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  buy() {
    let title = this.data.shop.itemtitle
    let url = this.data.shop.couponurl
    let logo = this.data.shop.itempic
    let price = this.data.shop.itemendprice
    //生成口令，并复制
    tbk('taobao.tbk.tpwd.create', {
      user_id: '87491795',
      text: title,
      url: url.replace('http://','https://'),
      logo: logo
    }, (d) => {
      let clip = `
      ${title}
      促销价:${price}
      淘口令:${d.data.model}
      抢购：${url +'&pid=mm_131778178_45276106_534348035'}
      `
      copy(clip, () => {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '优惠卷复制成功，请打开手机淘宝APP；'
        })
      })
    })

  },
  init() {
    let that = this

    tbk('taobao.tbk.item.info.get', {
      fields: 'volume,num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url',
      platform: 2,
      num_iids: that.data.num_iid
    }, (d) => {
      let data = d.results.n_tbk_item[0]
      that.setData({
        pict_url: data.pict_url,
        title: data.title,
        small_images: data.small_images.string,
        numb: data.volume,
        item_url: data.item_url,
        zk_final_price: data.zk_final_price
      })
    })

  }
})
