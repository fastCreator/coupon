const app = getApp()
//综合（月支出佣金从高到低）
Page({
  data: {
    searchTxt:'',
    checkboxs:[
      { name: 'gfhdsp', value: '官方活动商品' },
      { name: 'jpmj', value: '金牌卖家' },
      { name: 'yhj', value: '优惠券', checked: 'true' }
    ]
  },
  onLoad: function (option) {
    if (option.search){
      this.setData({ searchTxt: option.search })
    }
  },
  onReady: function () { 
   } 
})
