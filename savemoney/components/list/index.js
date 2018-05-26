Component({
  options: {
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    list: {
      type: 'array',
      value: [],
      observer(v) {
        v.forEach(it=>{
          it.coupon = it.coupon_info.match(/减(\d+)元/)[1]
          it.show = new Date(it.coupon_end_time).getTime() > Date.now()
          it.zk_final_price = (it.zk_final_price - it.coupon).toFixed(1)
        })
        this.setData({ myList: v })
      }
    }
  },
  data: {
    myList: []
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