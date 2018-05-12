// 登录授权接口
var ApiClient = require('../lib/api/topClient.js').TopClient
// var tmcClient = require('../lib/tmc/tmcClient.js').TmcClient
const SESSION = '6102a25f08ec55eb79bb736a7eb5a3d621a9a59457cf16787491795'
const ADZONE_ID = '534348035'
const SITE_ID = '45276106'
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
            data = Object.assign({}, data, { adzone_id: SITE_ID })
        }
        client.execute(url, data, function (error, response) {
            if (!error) {
                ctx.body = response
                r()
            } else j(JSON.stringify(error, null, 2))
        })
    })
}
