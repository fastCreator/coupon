// pages/detils/index.js
import utils from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    select: '',
    id: -1
  },
  onShareAppMessage(res) {
    return {
      title: '表情果，更多更好玩的表情，等你来挖掘',
      path: '/pages/detils/index?id=' + this.data.id
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      utils.imgs({ ids: options.id }, (d) => {
        d = d.data[0]
        let list = d.url.split(',')
        this.setData({
          select: list[0],
          list: list,
          title: d.title,
          id: d.id
        })
      })
    } else {
      let d = JSON.parse(wx.getStorageSync('data'))
      this.setData({
        select: d.header,
        list: d.url.split(','),
        title: d.title,
        id: d.id
      })
      this.setData({ collect: this.iscollect() })
    }
  },

  selectImg(e) {
    this.setData({ select: e.currentTarget.dataset.select })
  },
  gohome() {
    wx.switchTab({
      url: '../index1/index',
    })
  },
  preview() {
    wx.previewImage({
      current: this.data.select, // 当前显示图片的http链接
      urls: this.data.list // 需要预览的图片http链接列表
    })
  },
  iscollect() {
    let arr = wx.getStorageSync('collect').split(',')
    if (~arr.indexOf(this.data.id + '')) {
      return true
    } else {
      return false
    }
  },
  colecct() {
    wx.setStorageSync('nochange', '0')
    if (!this.iscollect()) {
      this.setData({ collect: true })
      wx.getStorage({
        key: 'collect',
        success: (res) => {
          if (!res.data) {
            wx.setStorage({
              key: 'collect',
              data: this.data.id + '',
            })
            return false
          }
          let arr = res.data.split(',')
          if (!~arr.indexOf(this.data.id + '')) {
            arr.unshift(this.data.id + '')
            wx.setStorage({
              key: 'collect',
              data: arr.join(','),
            })
          }
        },
        fail: () => {
          wx.setStorage({
            key: 'collect',
            data: this.data.id + '',
          })
        }
      })
    } else {
      this.setData({ collect: false })
      let arr = wx.getStorageSync('collect').split(',')
      arr.splice(arr.indexOf(this.data.id + ''), 1)
      wx.setStorage({
        key: 'collect',
        data: arr.length ? arr.join(',') : '',
      })
    }
  },
  showQ(){
    wx.showToast({
      title: '点击大图后，长按全屏图片，选择“发送给朋友"吧',
      icon: 'none',
      duration: 4000
    })
  }
})