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
  methods: {
    godetils(e) {
      let d = e.currentTarget.dataset
      wx.navigateTo({
        url: `../detils/index?num_iid=${d.num_iid}&coupon_id=${d.coupon_id}&coupon=${d.coupon}`
      })
    }
  }
})