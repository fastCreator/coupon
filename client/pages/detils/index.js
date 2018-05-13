import { tbk } from '../../utils/util.js'
const app = getApp()
Page({
  data: {
    sPrice: '',
    num_iid: 0,
    coupon_id: 0,
    coupon_click_url: '',
    pict_url: '',
    title: '',
    imageList: [],
    zk_final_price: '',
    numb: 0,
    sPrice: '',
    coupon: '',
    item_url: ''

  },
  onLoad: function (option) {
    console.log(option)
    this.setData({
      num_iid: option.num_iid,
      coupon_id: option.coupon_id || '',
      coupon_click_url: option.coupon_click_url || '',
      sPrice: option.coupon || ''
    })
    this.init()
  },
  onReady: function () { },
  buy() {
    let that = this
    let coupon_id = this.data.coupon_id
    let coupon_click_url = this.data.coupon_click_url
    let pid = 'mm_131778178_45276106_534348035'
    let url = ''
    let item_id = this.data.item_url.match(/\?id=(\d+)/)[1]
    if (coupon_click_url) {
      url = wx.getStorageSync('coupon_click_url')
    } else {
      url = `https://uland.taobao.com/coupon/edetail?activityId=${coupon_id}&itemId=${item_id}&src=pgy_pgyqf`
    }

    //生成口令，并复制
    tbk('taobao.tbk.tpwd.create', {
      user_id: '87491795',
      text: this.data.title,
      url: url,
      logo: this.data.pict_url
    }, (d) => {
      let clip = `
      ${that.data.title}
      促销价:${that.data.zk_final_price}
      淘口令:${d.data.model}
      抢购：${url}
      `
      wx.setClipboardData({
        data: clip,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showModal({
                title: '提示',
                showCancel: false,
                content: '优惠卷复制成功，手动打开淘宝自动跳转；遇到延迟，请点击淘宝顶部搜索即可'
              })
            }
          })
        }
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
