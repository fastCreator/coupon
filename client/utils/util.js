const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  })
}

var tbk = (url, data, cb) => {
  wx.request({
    url: `https://wx.firecloud.club/apis/tbk`,
    method: 'post',
    data: {
      "url": url,
      "data": data,
      "session": true,
      "adzone": true,
      "site": true
    },
    success: function (res) {
      cb(res.data)
    }
  })
}
var padLeft = (n) => {
  n -= 0
  if (n < 10) {
    return '0' + n
  }
  return n + ''
}

var myformatTime = function (d, format) {
  var o = {
    "M+": d.getMonth() + 1, //month
    "d+": d.getDate(), //day
    "h+": d.getHours(), //hour
    "m+": d.getMinutes(), //minute
    "s+": d.getSeconds(), //second
    "q+": Math.floor((d.getMonth() + 3) / 3), //quarter
    "S": d.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (d.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) if (new RegExp("(" + k + ")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
  return format;
}

var copy = (clip, cb) => {
  if (wx.getStorageSync('issh') != 1) {
    wx.setClipboardData({
      data: clip,
      success: function (res) {
        cb()
      }
    })
  } else {
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: '本站只提供商品信息查询，暂不支持商品购买等渠道'
    })
  }
}
module.exports = { formatTime, showBusy, showSuccess, showModel, tbk, padLeft, myformatTime, copy }
