
Component({
  options: {
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    list: {
      type: 'array',
      value: []
    }
  },
  created() {
    console.log(this)
  },
  methods: {
    godetils(e) {
      let d = this.properties.list[e.currentTarget.dataset.index]
      wx.setStorageSync('shop', d)
      //https://api.haodanku.com/Hltaoke/couponinfo&itemid=569573695552
      wx.navigateTo({
        url: `../detils/index`
      })
    }
  }
})