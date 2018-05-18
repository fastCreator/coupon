export default {
  tbk (url, data) {
    return axios.post('https://wx.firecloud.club/apis/tbk', {
      url: url,
      data: data,
      session: true,
      adzone: true,
      site: true
    })
  }
}
