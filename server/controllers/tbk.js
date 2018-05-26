const fs = require('fs')
const path = require('path')
const request = require('request')
// 登录授权接口
var ApiClient = require('../lib/api/topClient.js').TopClient
// var tmcClient = require('../lib/tmc/tmcClient.js').TmcClient
let SESSION = ''
const PID = 'mm_131778178_45276106_534348035'
const ADZONE_ID = '534348035'
const SITE_ID = '45276106'
const APPKEY = '24884330'
const APPSECRET = 'bac78cb1d551fbcfd517b8e10d6c310d'
const client = new ApiClient({
    'appkey': APPKEY,
    'appsecret': APPSECRET,
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
flashToken()
setInterval(() => {
    flashToken()
}, 1000 * 60 * 60 * 6)
function flashToken () {
    const repath = path.resolve(__dirname, 'flashToken.txt')
    const refreshToken = fs.readFileSync(repath, 'utf-8')

    let url = `https://oauth.taobao.com/token?grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${APPKEY}&client_secret=${APPSECRET}`
    request({
        url: url,
        method: 'POST',
        json: true
    }, (error, response, body) => {
        SESSION = body.access_token
        fs.writeFileSync(repath, body.refresh_token)
    })
}
