import { padLeft, tbk, myformatTime, copy } from '../../utils/util.js'
const app = getApp()
const time = ['00', '08', '10', '13', '15', '17', '19', '20', '21', '24']
Page({
  data: {
    now: -1,
    time: time,
    scrollLeft: new Date().getHours() > 15 ? 1000 : 0,
    list: [],
    page_no: 1,
    active: -1
  },
  onShow() {
    let now, d = padLeft(new Date().getHours())
    for (let i = 9; i >= 0; i--) {
      if (time[i] <= d) {
        now = i
        break;
      }
    }
    if (this.data.now !== now) {
      this.setData({
        now: now,
        active: now,
        page_no: 1
      })
      this.search()
    }

  },
  onLoad: function () { },
  onReady: function () { },
  selectTime(e) {
    this.setData({
      active: e.currentTarget.dataset.index,
      page_no: 1,
      list: []
    })
    this.search()
  },
  buy(e) {
    let d = this.data.list[e.currentTarget.dataset.index]
    //生成口令，并复制
    tbk('taobao.tbk.tpwd.create', {
      user_id: '87491795',
      text: d.title,
      url: d.click_url,
      logo: d.pic_url
    }, (data) => {
      let clip = `
      ${d.title}
      抢购价:￥${d.zk_final_price}
      淘口令:${data.data.model}
      抢购：${d.click_url}
      `
      copy(clip, () => {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '优惠卷复制成功，手动打开淘宝自动跳转；遇到延迟，请点击淘宝顶部搜索即可'
        })
      })
    })
  },
  nextPage() {
    this.setData({
      page_no: this.data.page_no + 1
    })
    console.log(1)
    this.search()
  },
  search() {
    let d = myformatTime(new Date(), 'yyyy-MM-dd ')
    wx.showLoading({
      title: '加载中',
    })
    tbk('taobao.tbk.ju.tqg.get', {
      fields: 'click_url,pic_url,reserve_price,zk_final_price,total_amount,sold_num,title,category_name,start_time,end_time',
      start_time: d + time[this.data.active] + ':00:00',
      end_time: d + time[this.data.active + 1] + ':00:00',
      page_size: 10,
      page_no: this.data.page_no
    }, (d) => {
      wx.hideLoading()
      if (!d.results.results || !d.results.results.length) {
        wx.showLoading({
          title: '暂无更多',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 500)
        return false
      }
      this.setData({
        list: this.data.list.concat(d.results.results)
      })
    })
  }
})
