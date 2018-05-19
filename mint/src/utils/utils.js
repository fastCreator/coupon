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
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
      return true
    } else {
      return true
    }
  }
}
