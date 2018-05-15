// 登录授权接口
var ApiClient = require('../lib/api/topClient.js').TopClient
// var tmcClient = require('../lib/tmc/tmcClient.js').TmcClient
const SESSION = '6100d05a218011d4cf13f4c994e10314659174cd34910fd87491795'
const client = new ApiClient({
    'appkey': '24884330',
    'appsecret': 'bac78cb1d551fbcfd517b8e10d6c310d',
    'REST_URL': 'http://gw.api.taobao.com/router/rest'
})

module.exports = async (ctx, next) => {
    return new Promise((r, j) => {
        let { url, data, session, adzone, site } = ctx.request.body
        if (session) {
            data = Object.assign({}, data, { session: SESSION })
        }
        if (adzone) {
            data = Object.assign({}, data, { adzone_id: ADZONE_ID })
        }
        if (site) {
            data = Object.assign({}, data, { site_id: SITE_ID })
        }
        if (url === 'taobao.tbk.tpwd.create') {
            data.url += `&pid=${PID}`
        }
        client.execute(url, data, function (error, response) {
            if (!error) {
                ctx.body = response
                r()
            } else j(JSON.stringify(error, null, 2))
        })
    })
}
