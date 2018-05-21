const imgs = function (data, cb) {
  let url = 'https://wx.firecloud.club/express/express?'
  if (data.page || data.page === 0) {
    url += `&page=${data.page}`
  }
  if (data.search) {
    url += `&search=${data.search}`
  }
  if (data.ids) {
    url += `&ids=${data.ids}`
  }
  console.log(url)
  wx.request({
    url: url,
    success(res) {
      cb(res)
    }
  })
}
module.exports = { imgs }
