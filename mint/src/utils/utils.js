import { MessageBox } from 'mint-ui'

export default {
  tbk (url, data) {
    return window.axios.post('https://wx.firecloud.club/apis/tbk', {
      url: url,
      data: data,
      session: true,
      adzone: true,
      site: true
    })
  },
  schemeUrl (url, callbak) {
    var ifr = document.createElement('iframe')
    ifr.src = url /** *打开app的协议，如zhe800://goto_home***/
    ifr.style.display = 'none'
    document.body.appendChild(ifr)
    // app没反应1s后执行另外的方法
    window.setTimeout(function () {
      document.body.removeChild(ifr)
      if (typeof callbak === 'function') {
        callbak()
      }
    }, 1000)
  },
  is_weixn () {
    var ua = navigator.userAgent.toLowerCase()
    if (~ua.indexOf('micromessenger') || ~ua.indexOf('MicroMessenger')) {
      return true
    } else {
      return false
    }
  },
  async copy (text, logo, price, numIid, couponId, couponClickUrl, model) {
    const PID = 'mm_131778178_45276106_534348035'
    let url = ''
    if (couponId && numIid) {
      url = `https://uland.taobao.com/coupon/edetail?activityId=${couponId}&itemId=${numIid}&src=pgy_pgyqf`
    } else if (numIid) {
      url = `https://item.taobao.com/item.htm?id=${numIid}`
    } else if (couponId) {
      url = `https://uland.taobao.com/coupon/edetail?activityId=${couponId}&src=pgy_pgyqf`
    } else {
      url = couponClickUrl
    }
    url = url + `&pid=${PID}`
    if (this.is_weixn()) {
      if (!model) {
        url = `https://uland.taobao.com/coupon/edetail?itemId=${numIid}${couponId ? ('&activityId=' + couponId) : ''}&src=pgy_pgyqf` + `&pid=${PID}`
        model = (await this.tbk('taobao.tbk.tpwd.create', {
          user_id: '87491795',
          text: text,
          url: url,
          logo: logo
        })).data.data.model
      }
      let copyText = `
          ${text}
          促销价:${price}元
          淘口令:${model}
          抢购：${url}
          `
      this.copyBox(copyText)
    } else if (
      /Android|webOS|iPhone|iPod|BlackBerry|UCBrowser|iOS|Windows Phone/i.test(navigator.userAgent)
    ) {
      let ck = ~url.indexOf('s.click.taobao.com')
      if (ck) {
        window.open(url)
      } else {
        url.replace('https://', '').replace('http://', '')
        location.href = 'taobao://' + url
      }
    } else {
      window.open(url)
    }
  },
  copyBox (copyText, cb) {
    MessageBox({
      title: '口令',
      message: '点击复制，打开淘宝APP,即可进入优惠券领取页面',
      confirmButtonText: '复制口令'
    }).then(() => {
      cb && cb()
    })
    let ele = document.getElementsByClassName('mint-msgbox-confirm')[0]
    ele.setAttribute('data-clipboard-action', 'copy')
    ele.setAttribute('data-clipboard-text', copyText)
    console.log(new window.ClipboardJS('.mint-msgbox-confirm'))
  }
}
