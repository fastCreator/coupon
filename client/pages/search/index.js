const app = getApp()
Page({
  data: {
    value:'',
    tags: ['连衣裙', '女鞋', '两件套', 'T恤', '零食'],
    history: []
  },
  onLoad: function () { },
  onReady: function () {
    this.setHistory()
   },
  selectTag: function (e) {
    let it = e.target.dataset.item
    this.search(it)
  },
  setHistory:function(){
    var history = wx.getStorageSync('historySearch')
    this.setData({ history: history.split(',') })
  },
  clearHistory:function(){
    wx.setStorageSync('historySearch', '')
    this.setHistory()
  },
  inputValue:function(e){
    this.setData({ value: e.detail.value })
  },
  search:function(v){
    if (v.type){
      v = this.data.value
    }
    if(!v) return false
    var history = wx.getStorageSync('historySearch')
    if (history){
      let s = history.split(',')
      if(!~s.indexOf(v)){
        wx.setStorageSync('historySearch', history + ',' + v)
      }
    }else{
      wx.setStorageSync('historySearch', v)
    }
    this.setHistory()
    wx.navigateTo({
      url: '../list/index?search='+v
    })
  }
})
