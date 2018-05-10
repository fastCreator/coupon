// 登录授权接口
var ApiClient = require('../lib/api/topClient.js').TopClient
// var tmcClient = require('../lib/tmc/tmcClient.js').TmcClient

const client = new ApiClient({
    'appkey': '24884330',
    'appsecret': 'bac78cb1d551fbcfd517b8e10d6c310d',
    'REST_URL': 'http://gw.api.taobao.com/router/rest'
})

module.exports = async (ctx, next) => {
    return new Promise((r, j) => {
        let { url, data } = ctx.request.body
        client.execute(url, data, function (error, response) {
            if (!error) {
                ctx.body = response
                r()
            } else j(JSON.stringify(error, null, 2))
        })
    })
}
