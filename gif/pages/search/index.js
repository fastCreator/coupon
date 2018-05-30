const app = getApp()
import dsearch from './dsearch'
Page({
  data: {
    value: '',
    tags: [],
    history: []
  },
  onLoad: function () { },
  onReady: function () {
    this.setHistory()
    this.flashs()
  },
  flashs() {
    let d = new Array(120).fill(0).map((v, i) => i + 1).sort(() => Math.random() - 0.5).slice(0, 10).map(i => dsearch[i])
    this.setData({ tags: d })
  },
  selectTag: function (e) {
    let it = e.target.dataset.item
    this.search(it)
  },
  setHistory: function () {
    var history = wx.getStorageSync('historySearch') || ''
    this.setData({ history: history ? history.split(',') : [] })
  },
  clearHistory: function () {
    wx.setStorageSync('historySearch', '')
    this.setHistory()
  },
  inputValue: function (e) {
    this.setData({ value: e.detail.value })
  },
  search: function (v) {
    if(v.target){
      v = this.data.value
    }
    var history = wx.getStorageSync('historySearch')
    if (history) {
      let s = history.split(',')
      if (!~s.indexOf(v)) {
        wx.setStorageSync('historySearch', history + ',' + v)
      }
    } else {
      wx.setStorageSync('historySearch', v)
    }
    this.setHistory()
    console.log(v)
    wx.navigateTo({
      url: '../list/index?keyword=' + v
    })
  }
})
