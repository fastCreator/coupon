// 登录授权接口
var ApiClient = require('../lib/api/topClient.js').TopClient
// var tmcClient = require('../lib/tmc/tmcClient.js').TmcClient
const SESSION = '6101d069b05c54189b247481c2d0a3e893f3b17105c00be87491795'
const client = new ApiClient({

    'appkey': '24884330',
    'appsecret': 'bac78cb1d551fbcfd517b8e10d6c310d',
    'REST_URL': 'http://gw.api.taobao.com/router/rest'
})

module.exports = async (ctx, next) => {
    return new Promise((r, j) => {
        let { url, data, session } = ctx.request.body
        if (session) {
            data = Object.assign({}, data, { session: SESSION })
        }
        client.execute(url, data, function (error, response) {
            if (!error) {
                ctx.body = response
                r()
            } else j(JSON.stringify(error, null, 2))
        })
    })
}
